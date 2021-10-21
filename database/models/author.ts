module.exports = (sequelize, DataTypes) => {
  console.log(`sequelize model:${sequelize}`);
  const Author = sequelize.define(
    'Author',
    {
      // Model attributes are defined here
      authorId: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,

      },
      authorName: DataTypes.STRING,
      anthorCountry: DataTypes.STRING
    },
    { timestamps: false },
  );

  Author.associate = function (models) {
    // associations can be defined here
    Author.hasMany(models.Post, { foreignKey: 'authorId', as: 'posts' });
  };
  console.log(`Post:${Author}`);
  return Author;

};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Author.init({
    authorId: DataTypes.INTEGER,
    authorName: DataTypes.STRING,
    anthorCountry: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};