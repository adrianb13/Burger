var orm = require("./../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(colVal, cb) {
        orm.insertOne("burgers", "burger_name", colVal, function(res) {
            console.log(res);
            cb;
        });
    },
    updateOne: function(colId, cb) {
        orm.updateOne("burgers", "devoured", colId, function(res) {
            cb(res);
        });
    },
    order: function(colId, cb) {
        orm.order("burgers", "devoured", colId, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;