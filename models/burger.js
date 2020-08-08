// Import the ORM to create functions that will interact with the database
const orm = require("../config/orm.js");
const burger = {
    selectAll: (cb) => {
        // Display all burgers in the db
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    // The variables cols and vals are arrays
    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        });
    },

    // Change the devoured status to true
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    },
    
    // Delete a burger from the db
    deleteOne: (condition, cb) => {
        orm.deleteOne("burgers", condition, (res) => {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgerController.js)
module.exports = burger;