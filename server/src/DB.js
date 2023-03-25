var mysql = require('mysql');

//Coonect to database
var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSW
});

module.exports = {
    getTable: function(database,tableName,colum) {
        con.query("SELECT * FROM " + database + "." + tableName, (err, results, flieds) => {
            if (err) return null;
            console.log('The solution is: ', results[colum]);
            return results[colum];
        });
    },

    existInTable: function(database,tableName,colum,search) {
        var table = this.getTable(database,tableName,colum);
        table.forEach(element => {
            if(element.includes(search)) return true;
        });
    },

    insertInTable: function (db,table,insert) {
        con.query("INSERT INTO " + db + "." + table + "VALUES('" + insert + "')");
    }
    
}