var models = require('../models/admin');
var db = require('../database')
const body= require('body-parser');
var app = require('../../server/server')

  


module.exports = {

    getAlladmin:(req,res) =>{
        models.getAlladmin(function(err,results){
           
           if (err) { console.log('error in myAdmin controller',err)}
           res.json(results);
       
        })
       },

       createadmin: function (req, res) {
          
        //    console.log(req.body,'req.body')
        var params =[req.body.adminName,req.body.hash];
        console.log(req.body.adminName,"create")
        models.createadmin(params, function(err, results) {
          if (err) { console.log("error post at admin controller",err) }
          res.sendStatus(200)
          
        });
      },
       
      deleteOneadmin: function(req,res){

        var params = [req.params.id];
        models.deleteOneadmin(params,function(err,results){
            if(err){
                console.log("error delete at admin controller",err)
            }
            res.send('admin deleted')
        })



      },

      getOneadmin : function(req,res){
        var params = [req.params.id];
        models.getOneadmin(params,function(err,results){
            if(err){
                console.log("error getone at admin controller",err)
            }
            res.send(results)
        });

      },

      updateOneadmin: function(req, res){
        var params = [req.body.adminId,req.body.adminName, req.body.adminpassword];
        models.updateOneadmin(params, function(err,results) {
          if (err) {console.log("error updateone at admin controller",err)}
          console.log(req.body.studentId)
          res.send('admin updated')
        });

       
},
login : (req,res ) => {
  // var params = [req.body.username, req.body.adminpassword];
  const username = req.body.username;
  const password = req.body.adminpassword;
  // const user = {username: req.body.username, password: req.body.adminpassword}
  
   var hashed = models.findOne(username, function (err, username) {
     if(err) {
       console.log("error at hashed")
       console.log(req.body)
     }
     try{
       if( bcrypt.compare(password, hashed)) {
       res.send("success")
     }else{
      res.send("not allowed")
     }
     }catch{
       res.status(500).send()
     }
     
   });
             
            
       
} 

       
} 