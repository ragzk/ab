/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('propertyfeature', {
    propertyId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'property',
        key: 'propertyId'
      }
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
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    alarmSystem: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    pool: {
      type: DataTypes.INTEGER(2),
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
