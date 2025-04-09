 const sequelize = require('../db')
 const {DataTypes} = require('sequelize')

 const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    fullName: { type: DataTypes.STRING }, 
    phone: { type: DataTypes.STRING }, 
    gender: { type: DataTypes.STRING }
})

 const AboutUs = sequelize.define('about_us', {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   role: { type: DataTypes.STRING, allowNull: false },
   text: { type: DataTypes.TEXT, allowNull: false },
   lastFeedbackTime: { type: DataTypes.DATE },
 });

 const DownloadCount = sequelize.define('download_count', {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   kolvo: { type: DataTypes.INTEGER},
   date: { type: DataTypes.STRING, allowNull: false },
 });

 const AppRating = sequelize.define("app_rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rating: { type: DataTypes.INTEGER, allowNull: false }, 
  date: { type: DataTypes.STRING, allowNull: false }, 
});

AboutUs.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(AboutUs, { foreignKey: 'userId' });


 module.exports = {
    User,
    AboutUs,
    DownloadCount,
    AppRating
 }