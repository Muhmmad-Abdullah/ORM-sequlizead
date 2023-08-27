const db = require("../models");

const Users = db.users; 
const addUser = async (req, resp) => {
  try {
    // ... (add user creation code)
  } catch (error) {
    console.error("Error:", error);
    resp.status(500).send("An error occurred: " + error.message);
  }
};

const crudOperation = async (req, resp) => {
  try {
    // Insert
    // let data = await Users.create({
    //   name: "Testing",
    //   email: "test230@gmail.com",
    //   gender: "x",
    // });

    // console.log(data.id);

    // Update
    // let updatedRows = await Users.update(
    //   {
    //     name: "updatedname",
    //     gender: "updatedgender",
    //     email: "updated@gmail.com",
    //   },
    //   {
    //     where: {
    //       id: 2,
    //     },
    //   }
    // );

    // console.log("Updated Rows:", updatedRows);

    // Delete
    // let deletedRows = await Users.destroy({
    //   where: {
    //     id: 2,
    //   },
    // });

    // console.log("Deleted Rows:", deletedRows);

    // Truncate
    // let truncatedRows = await Users.destroy({
    //   truncate: true,
    // });

    // console.log("Truncated Rows:", truncatedRows);

    // Bulk insert
    let bulkInsertData = [
      { name: "first1", email: "first1@gmail.com", gender: "Male" },
      { name: "first2", email: "first2@gmail.com", gender: "Male" },
      { name: "first3", email: "first3@gmail.com", gender: "Male" },
      { name: "first4", email: "first4@gmail.com", gender: "Male" },
    ];

    let insertedRows = await Users.bulkCreate(bulkInsertData);

    console.log("Inserted Rows:", insertedRows);

    //  Find 

    let data = await Users.findAll({});  //findOne

    let response ={
        data:data
    }
    
    // let response = {
    //   data: "okays",
    // };

    resp.status(200).json(response);
  } catch (error) {
    console.error("Error:", error);
    resp.status(500).send("An error occurred: " + error.message);
  }
};

module.exports = {
  addUser,
  crudOperation,
};
