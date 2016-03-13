/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('propertyfeature', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    propertyId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    bedroom: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    bathroom: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    garages: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    carports: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    airConditioning: {
      type: 'BIT(1)',
      allowNull: true
    },
    alarmSystem: {
      type: 'BIT(1)',
      allowNull: true
    },
    pool: {
      type: 'BIT(1)',
      allowNull: true
    },
    otherFeatures: {
      type: DataTypes.STRING,
      allowNull: true
    },
    propertyfeaturecol: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'propertyfeature',
    freezeTableName: true
  });
};
