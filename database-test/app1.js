var mysql = require("mysql");  //
var client = mysql.createConnection({ //
    "host":"sh-fuhu-vm1",
    "port":"3306",
    "user":"fuhu",
    "password":"123456",
     "database": 'test_db'
});
console.log("connecting to db server...");
client.query("USE test_db",function(error,results){
	if(error){//
		console.log("ClientConnectionReady Error:"+error.message);
		client.end();return;
	}
    console.log("conected to db server successfully!");
    InsertData(client);
});
//
InsertData=function(){
    var values=["Hello!","create this row data value @ "+Date.now()];
		client.query("INSERT INTO node_table SET title=?,info=?",values,function(error,results){
			if(error){//
				console.log("InsertData Error:"+error.message);
				client.end();return;
			}
			console.log("Inserted: "+results.affectedRows+" row.");
			console.log("Id inserted: "+results.insertId);
		});
    GetData(client);
};
//
GetData=function(client){
    client.query("SELECT * FROM node_table",function(error,results,fields){
            if(error){
                console.log("GetData Error:"+error.message);
                client.end();
                return;
            }
            console.log("Results:");
            console.log(results);
            if(results.length>0){
                var rs = results[0];
                console.log("Title:"+rs.title);
                console.log("info:"+rs["info"]);
            }
        }
    );
    client.end();
    console.log("Connection closed.");
};
//GetData(client);