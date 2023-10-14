'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('topic_reactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      TopicId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ReactionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    await queryInterface.addConstraint('topic_reactions', {
      type: 'foreign key',
      name: 'topic_id_fk',
      fields: ['TopicId'],
      references: {
        table: 'Topics',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
    await queryInterface.addConstraint(
      'topic_reactions', {
        type: 'foreign key',
        name: 'reaction_id_fk',
        fields: ['ReactionId'],
        references: {
          table: 'Reactions',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('topic_reactions');
  }
};