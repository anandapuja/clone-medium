'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'about_me', Sequelize.STRING);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users','about_me');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
