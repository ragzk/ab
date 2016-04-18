/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('property', {
    propertyId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dateAvailable: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rent: {
      type: DataTypes.INTEGER(11),
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
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    type: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    priceView: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bond: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    uniqueId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    headline: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'property',
    freezeTableName: true
  });
};
