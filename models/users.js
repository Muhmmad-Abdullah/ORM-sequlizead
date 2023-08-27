module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
      name: DataTypes.STRING,
      email: {
          type: DataTypes.STRING,
          defaultValue: "john123@gmail.com",
      },
      gender: {
          type: DataTypes.STRING,
      },
  }, {
      timestamps: false,
      engine: 'MYISAM'
      //  tableName:'userdata',// Set timestamps to false to disable createdAt and updatedAt columns //true 
//       //  updatedAt:false,
//       // createdAt:false,
//     // createdAt:'create_at',
//     // updatedAt:'modified_at',
  });

  return user;
};
