const express = require('express');
const router = express.Router();
const teacherController = require("../controllers/teacherController");
const studentsController = require("../controllers/studentsController");
const authentication = require("../middleware/auth");
//const {authentication, authorization } = require("../middleware/auth.js");

router.post('/createUser', teacherController.createTeacher);

router.post('/userLogin', teacherController.teacherLoggedIn);

router.post('/filledMarks/:teacherId',authentication.authentication,authentication.authorization, studentsController.filledMarks);

router.put("/updatestudent/:teacherId/:studentId", authentication.authentication,authentication.authorization, studentsController.updateStudent)

router.get("/getStudents/:teacherId",authentication.authentication, studentsController.getStudent)

router.delete("/deleteStudents/:teacherId/:studentId",authentication.authentication,authentication.authorization,  studentsController.deleteStudent)

//API for wrong route-of-API
router.all("/*", function (req, res) {
    res.status(400).send({
      status: false,
      message: "Path Not Found",
    });
  });


module.exports = router;