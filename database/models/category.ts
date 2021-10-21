// const { DataTypes } = require('sequelize');
// const {sequelize} = require('./index');
// const {Post} = require('./post');
// const {PostCategory} = require('./post-category');
export const Category = (sequelize: {
// module.exports = (sequelize: {
    define: (arg0: string, arg1: {
      // Model attributes are defined here
      categoryId: { primaryKey: boolean; autoIncrement: boolean; allowNull: boolean; type: any; }; categoryName: any;
    }, arg2: { timestamps: boolean; }) => any;
  }, DataTypes: { INTEGER: any; STRING: any; }) => {
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

  Category.associate = function () {
    // associations can be defined here
    // Category.hasMany(models.Post_Category, { foreignKey: 'categoryId', as: 'category_post' });
    // Category.belongsToMany(models.Post, { through: PostCategory });
  };
  console.log(`Post:${Category}`);
  return Category;

};







