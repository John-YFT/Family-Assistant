const express = require("express");
const router = express.Router();
const { AppRating } = require('../models/model');

const formatDate = (date) => {
  const d = new Date(date);
  return `${String(d.getDate()).padStart(2, "0")}-${String(
    d.getMonth() + 1
  ).padStart(2, "0")}-${d.getFullYear()}`;
};

router.post("/submit-rating", async (req, res) => {
  try {
    const { rating } = req.body;
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: "Оценка должна быть от 1 до 5" });
    }

    const today = formatDate(new Date());
    await AppRating.create({ rating, date: today });

    res.status(200).json({ message: "Оценка записана" });
  } catch (error) {
    console.error("Ошибка при сохранении оценки:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/get-average-rating", async (req, res) => {
  try {
    const ratings = await AppRating.findAll();
    if (ratings.length === 0) return res.json({ average: 0 });

    const sum = ratings.reduce((acc, r) => acc + r.rating, 0);
    const average = (sum / ratings.length).toFixed(1);

    res.status(200).json({ average });
  } catch (error) {
    console.error("Ошибка при получении средней оценки:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;