module.exports = (sequelize, DataTypes) => {
  console.log(`sequelize model:${sequelize}`);
  const PostCategory = sequelize.define(
    'PostCategory',
    {
       // Model attributes are defined here
       postId: DataTypes.INTEGER,
       categoryId: DataTypes.INTEGER
    },
    {},
  );

  PostCategory.associate = function (models) {
    // associations can be defined here
    PostCategory.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
    PostCategory.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
  };
  console.log(`Post:${PostCategory}`);
  return PostCategory;

};
