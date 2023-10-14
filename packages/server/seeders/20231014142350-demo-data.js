module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Topics', [{
      label: 'First Topic',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      label: 'Second Topic',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('Messages', [{
      text: 'First Message',
      userName: 'First User',
      TopicId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Second Message',
      userName: 'Second User',
      TopicId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      text: 'First Message 2',
      userName: 'First User',
      TopicId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'Second Message 2',
      userName: 'Second User',
      TopicId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('topic_reaction', [
      {
        count: 10,
        TopicId: 1,
        ReactionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        count: 10,
        TopicId: 1,
        ReactionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        count: 10,
        TopicId: 1,
        ReactionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        count: 10,
        TopicId: 1,
        ReactionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        count: 10,
        TopicId: 2,
        ReactionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        count: 10,
        TopicId: 2,
        ReactionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        count: 10,
        TopicId: 2,
        ReactionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        count: 10,
        TopicId: 2,
        ReactionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {});
    await queryInterface.bulkDelete('Messages', null, {});
    await queryInterface.bulkDelete('topic_reaction', null, {});
  }
};