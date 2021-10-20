
module.exports = (sequelize, DataTypes) => {
  class Post = sequelize.define(
    'Post',
    {
      postId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      authorId: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      excerpt: DataTypes.TEXT,
      postDate: DataTypes.STRING,
    },
    {},
  );

  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.Author, { foreignKey: 'authorId', as: 'author' });
    Post.hasMany(models.Comment, { foreignKey: 'postId', as: 'comments' });
  };
  return Post;

};