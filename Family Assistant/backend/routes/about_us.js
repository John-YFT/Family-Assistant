const Router = require('express');
const router = new Router();
const { AboutUs, User } = require('../models/model');
const uuid = require('uuid')
const path = require('path')

router.post('/about', async (req, res) => {
  try {
    const {role, message, userId } = req.body;

    // Проверка времени последней отправки
    const lastFeedback = await AboutUs.findOne({ where: { userId }, order: [['lastFeedbackTime', 'DESC']] });

    if (lastFeedback) {
      const twoHoursAgo = new Date();
      twoHoursAgo.setHours(twoHoursAgo.getHours() - 1);

      if (lastFeedback.lastFeedbackTime && lastFeedback.lastFeedbackTime > twoHoursAgo) {
        return res.status(429).json({ error: 'Вы можете отправлять обратную связь только раз в 1 час' });
      }
    }

    // Создание записи в базе данных
    const feedback = await AboutUs.create({
      role,
      text: message,
      userId,
      lastFeedbackTime: new Date(), // Устанавливаем время отправки
    });

    res.status(201).json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.get('/get-aboutus', async (req, res) => {
  try {
    // Получаем все записи из таблицы обратной связи
    const about = await AboutUs.findAll({
      include: [{
        model: User,
        attributes: ['fullName', 'email', 'phone'] 
      }]
    });

    res.status(200).json(about);
  } catch (error) {
    console.error('Ошибка при получении списка обратной связи:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;