export const Author = (sequelize: {
// module.exports = (sequelize: {
    define: (arg0: string, arg1: {
      // Model attributes are defined here
      authorId: { primaryKey: boolean; autoIncrement: boolean; allowNull: boolean; type: any; }; authorName: any; anthorCountry: any;
    }, arg2: { timestamps: boolean; }) => any;
  }, DataTypes: { INTEGER: any; STRING: any; }) => {
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
