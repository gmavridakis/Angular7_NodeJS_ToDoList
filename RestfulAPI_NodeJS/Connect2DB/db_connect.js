var express = require('express');
var mysql = require('mysql');
var app = express();
var cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}));

var con = mysql.createConnection({
    host: "localhost",
    user: "greg",
    password: "Greg15935746!",
    database: "angular_project"
});
con.connect(function(err) {
    if (err) throw err;
    // http://localhost:4201/send_data
    app.get('/send_data', function(req, res) {
        console.log('I received a get request!');
        query_select = "select TaskId,Task_Descr from Tasks order by Task_Descr;";       
        
        con.query(query_select, function (err, result, fields) {
            if (err) throw err;
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'content-type');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');            
            res.contentType('application/json');
            myJSONstring = JSON.stringify(result);
            res.send(myJSONstring);
        });
    });  
    app.post('/do_the_magic', function (req, res) {

        if(req.query.action === 'add' && req.query.description || req.query.action === 'delete' && req.query.taskid){
                
                query_select = "select TaskId,Task_Descr from Tasks order by Task_Descr;";  

                // http://localhost:4201/do_the_magic?action=delete&taskid=1
                if(req.query.action === 'delete' && req.query.taskid){
                    
                    taskid = req.query.taskid;
                    query_delete = "DELETE FROM Tasks WHERE TaskID='" +taskid +"';";

                    con.query(query_delete, function (err, result, fields) {
                        if (err) throw err;
                    });

                    con.query(query_select, function (err, result, fields) {
                        if (err) throw err;
                        console.log(result);
                    });
                }

                // http://localhost:4201/do_the_magic?action=add&description=somedummytest
                if(req.query.action === 'add' && req.query.description){               
                    
                    task_descr = req.query.description;
                    query_add = "INSERT INTO Tasks(Task_Descr,UserID) VALUES ('" +task_descr +"',1);";

                    con.query(query_add, function (err, result, fields) {
                        if (err) throw err;

                    });

                    con.query(query_select, function (err, result, fields) {
                        if (err) throw err;
                        console.log(result);
                    });
                }
            
            res.sendStatus(200);
        }
    });

});
app.listen(4201, function () {
    console.log('Server is listening...');
});
