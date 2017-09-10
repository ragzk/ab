/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('propertyaddress', {
    propertyId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'property',
        key: 'propertyId'
      }
    },
    streetNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    street: {
      type: DataTypes.STRING,
      allowNull: true
    },
    suburb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postcode: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    }
  }, {
    tableName: 'propertyaddress',
    freezeTableName: true
  });
};
