// const { DataTypes } = require('sequelize');
// const {sequelize} = require('./index');
// const {Post} = require('./post');
// const {PostCategory} = require('./post-category');

module.exports = (sequelize, DataTypes) => {
  console.log(`sequelize model:${sequelize}`);
  const Category = sequelize.define(
    'Category',
    {
       // Model attributes are defined here
       categoryId: DataTypes.INTEGER,
       categoryName: DataTypes.STRING
    },
    {},
  );

  Category.associate = function (models) {
    // associations can be defined here
    Category.belongsToMany(models.Post,  { through: PostCategory });
  };
  console.log(`Post:${Category}`);
  return Category;

};







