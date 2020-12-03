
const controller = require('../database/controllers');
// var students = require('../database/controllers/students');
var router = require('express').Router();
var body = require('body-parser');


/*student's table routes */

router.get('/getAll', controller.students.getAll);
console.log('router');
router.get('/getOne/:id', controller.students.getOne);
router.post('/create/student', controller.students.createstudent);
router.delete('/deleteOne/:id', controller.students.deleteOne);
router.put('/updateOne/:id', controller.students.updateOne);


/*Admin table routes*/
router.get('/getAlladmin', controller.admin.getAlladmin);
router.get('/getOneadmin/:id', controller.admin.getOneadmin);
router.post('/create/admin', controller.admin.createadmin);
router.delete('/deleteOneadmin/:id', controller.admin.deleteOneadmin);
router.put('/updateOneadmin/:id', controller.students.updateOne);
router.post('/login', controller.admin.login);



//mark table routes
router.get('/getMarks/:id' , controller.marks.getMarks)
router.post('/createMark' , controller.marks.createMark);

/*subject's table routes */
router.get('/getAllSubjects', controller.subjects.getAllsubjects);
router.get('/getOnesubject/:id', controller.subjects.getOnesubject);
router.post('/createsubject', controller.subjects.createsubject);
router.delete('/deleteOnesubject/:id', controller.subjects.deleteOnesubject);

//  /*export the routes to the server and controller folder*/
module.exports.router = router;