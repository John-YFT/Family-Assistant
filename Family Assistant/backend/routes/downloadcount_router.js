const Router = require('express');
const router = new Router();
const { DownloadCount } = require('../models/model');

// Получение статистики скачиваний
router.get("/get-downloadcount", async (req, res) => {
    try {
      const downloads = await DownloadCount.findAll();
      res.status(200).json(downloads);
    } catch (error) {
      console.error("Ошибка при получении статистики:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Увеличение количества скачиваний за текущий день
  router.post("/incr-download", async (req, res) => {
    try {
      const { date } = req.body;
  
      let existingEntry = await DownloadCount.findOne({ where: { date } });
  
      if (existingEntry) {
        existingEntry.kolvo += 1;
        await existingEntry.save();
      } else {
        await DownloadCount.create({ date, kolvo: 1 });
      }
  
      res.status(200).json({ message: "Скачивание записано" });
    } catch (error) {
      console.error("Ошибка при обновлении скачиваний:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  module.exports = router;