export const Post_Category = (sequelize: {
// module.exports.Post_Category = (sequelize: { 
  define: (arg0: string, arg1: {}, arg2: { timestamps: boolean; }) => any; }, DataTypes: any) => {
  // module.exports = (sequelize, DataTypes) => {
  console.log(`sequelize model:${sequelize}`);
  const Post_Category = sequelize.define('Post_Category', {}, { timestamps: false });

  Post_Category.associate = function (models: { Post: { belongsToMany: (arg0: any, arg1: { through: any; }) => void; }; Category: { belongsToMany: (arg0: any, arg1: { through: any; }) => void; }; }) {
    // associations can be defined here
    models.Post.belongsToMany(models.Category, { through: Post_Category });
    models.Category.belongsToMany(models.Post, { through: Post_Category });

    // Post_Category.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
    // Post_Category.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
  };
  console.log(`Post_Category:${Post_Category}`);
  return Post_Category;
};
