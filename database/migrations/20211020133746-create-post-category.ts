'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('postCategory', {
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // references: {
        //   model: {
        //     tableName: 'post',
        //   },
        //   key: 'postId',
        // },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: {
        //     tableName: 'category',
        //   },
        //   key: 'categoryId',
        // },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('postCategory');
  }
};