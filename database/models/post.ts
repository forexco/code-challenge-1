// const { DataTypes } = require('sequelize');
// const {sequelize} = require('./index');
// const {Category} = require('./category');

import { Post_Category } from './post-category';

// module.exports = (sequelize, DataTypes) => {
export const Post = (sequelize: {
    define: (arg0: string, arg1: {
      // Model attributes are defined here
      postId: { primaryKey: boolean; autoIncrement: boolean; allowNull: boolean; type: any; }; title: any; authorId: any; content: any; excerpt: any; postDate: any;
    }, arg2: { timestamps: boolean; }) => any;
  }, DataTypes: { INTEGER: any; STRING: any; TEXT: any; }) => {
  // console.log(`sequelize model:${sequelize}`);
  {
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

    Post.associate = function (models: { Author: any; }) {
      // associations can be defined here
      Post.belongsTo(models.Author, { foreignKey: 'authorId', as: 'author' });
      // Post.hasMany(models.Post_Category, { foreignKey: 'postId', as: 'post_category' });
      // Post.belongsToMany(models.Category, { through: PostCategory });
    };
    console.log(`Post:${Post}`);
    return Post;
  }
};