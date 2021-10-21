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
      categoryId: {        
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      categoryName: DataTypes.STRING
    },
    { timestamps: false },
  );

  Category.associate = function (models) {
    // associations can be defined here
    // Category.hasMany(models.Post_Category, { foreignKey: 'categoryId', as: 'category_post' });
    // Category.belongsToMany(models.Post, { through: PostCategory });
  };
  console.log(`Post:${Category}`);
  return Category;

};







