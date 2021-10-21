// const { DataTypes } = require('sequelize');
// const {sequelize} = require('./index');
// const {Category} = require('./category');
const { PostCategory } = require('./post-category');

// module.exports = (sequelize, DataTypes) => {
module.exports = (sequelize, DataTypes) => {
  console.log(`sequelize model:${sequelize}`);
  const Post = sequelize.define(
    'Post',
    {
      // Model attributes are defined here
      postId: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,

      },
      title: DataTypes.STRING,
      authorId: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      excerpt: DataTypes.TEXT,
      postDate: DataTypes.STRING,
    },
    { timestamps: false },
  );

  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.Author, { foreignKey: 'authorId', as: 'author' });
    // Post.hasMany(models.Post_Category, { foreignKey: 'postId', as: 'post_category' });
    // Post.belongsToMany(models.Category, { through: PostCategory });
  };
  console.log(`Post:${Post}`);
  return Post;

};