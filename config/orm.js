const connection = require("./connection");

var orm = {
    selectAll: function(tableName, callback) {
        connection.query("SELECT * FROM ??", [tableName], function(err, result) {
            if(err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function(tableName, objectToInsert, callback) {
        connection.query("INSERT ?? SET ?", [tableName, objectToInsert], function(err, result) {
            if(err) {
                throw err;
            }
            callback(result);
        });
    },
    updateOne: function(tableName, itemToUpdate, condition, callback) {
        connection.query("UPDATE ?? SET ? WHERE ?", [tableName, itemToUpdate, condition], function(err, result) {
            if(err) {
                throw err;
            }
            callback(result);
        });
    }
};

module.exports = orm;