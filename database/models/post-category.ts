module.exports = (sequelize, DataTypes) => {
  console.log(`sequelize model:${sequelize}`);
  const Post_Category = sequelize.define('Post_Category', {}, { timestamps: false });

  Post_Category.associate = function (models) {
    // associations can be defined here
    models.Post.belongsToMany(models.Category, { through: Post_Category });
    models.Category.belongsToMany(models.Post, { through: Post_Category });

    // Post_Category.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
    // Post_Category.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
  };
  console.log(`Post_Category:${PostCategory}`);
  return Post_Category;
};
