module.exports = (sequelize, type) => {
  return sequelize.define('pothole', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    longitude: type.DECIMAL(10, 4),
    latitude: type.DECIMAL(10, 4),
    severity: type.INTEGER,
    title: type.STRING,
    description: type.STRING,
    fill_cost: type.INTEGER,
    money_donated: type.DECIMAL(10, 2),
    filled: type.BOOLEAN,
    image: type.STRING,
    created_at: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    user_id: {
      type: type.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      }
    }
  });
};
