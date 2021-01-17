var pg = require('pg');
var connectionString = "postgres://postgres:aa41717,.@localhost/ip:5432/CampusBuyAccounts";
var pgClient = new pg.Client(connectionString);
pgClient.connect();
var query = pgClient.query("SELECT id from Customer where name = 'customername'");


query.on("row", function(row,result){

    result.addRow(row);
    
    });

    query.on("end", function(result){

        if(result.rows[0] === undefined){
        
        return;
        
        }
        
        else{
        
        var id = result.rows[0].id;
        
        var query = "delete from CustomerAddress where customer_id = " + id ;
        
        pgClient.query(query);
        
        }
        
        pgClient.end();
        
        });
