var courseCtrl = require('../Controller/courseManager');

var router = require('express').Router()

    router.get('/', function(req,res) {
        res.contentType('html')
        res.send('<h1>Web Based Course Management System</h1>');
    });
    router.get('/courses', courseCtrl.getAllCourses);
    router.get('/course/:id', courseCtrl.getOneCourse);
    router.post('/course/add', courseCtrl.addCourse);
    router.delete('/course/:id', courseCtrl.deleteCourse);
    router.patch('/course/:id', courseCtrl.updateCourse);

    module.exports = router;
  