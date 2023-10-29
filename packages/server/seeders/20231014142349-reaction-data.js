module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reactions', [{
      name: 'thumbsUp',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'thumbsDown',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'angry',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'happy',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reactions', null, {});
  }
};