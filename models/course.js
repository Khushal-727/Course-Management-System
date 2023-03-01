module.exports = (sequelize,DataTypes) => {

    const course = sequelize.define('course', {
      c_name: {
        type: DataTypes.STRING,
        // allowNull:false
      },
      c_duration: {
        type: DataTypes.STRING,
        // allowNull:false
      },
      c_fees: {
        type: DataTypes.INTEGER,
        // allowNull:false
      }
    }, { 
      tableName: 'courses',
      timestamps: false
    });

    return course;
}