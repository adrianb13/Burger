var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ?? ";

        connection.query(queryString, [table], function(err, result) {
            if (err) {throw err};
            cb(result);
        });
    },

    insertOne: function(table, column_name, colVal, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";

        connection.query(queryString, [table, column_name, colVal], function(err, result) {
            if (err) {throw err};
            cb(result);
        });
    },

    updateOne: function(table, column_name, colId, cb) {
        var queryString = "UPDATE ?? SET ?? = true WHERE id = ?";
        connection.query(queryString, [table, column_name, colId], function(err, result) {
            if (err) {throw err};
            cb(result);
        });
    }
};

module.exports = orm;