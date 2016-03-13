/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('property', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    locationId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dateAvailable: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inspectionTimes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Longitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'property',
    freezeTableName: true
  });
};
