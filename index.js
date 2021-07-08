let functionsQueries = require("./functionsQueries.js")
let Trainer = require("./trainer.js")
let Student = require("./student.js")
let Assignment = require("./assignment.js")
let Course = require("./course.js")
let mysql = require('mysql2');
// const prompt = require("prompt-sync")({ sigint: true });


let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "cube_coding_bootcamp",
    connectTimeout: 40000
})


connection.connect(function (error) {
    if (error) { throw error } else {
        console.log("connected")
    }
})


//**** QUERY-FUNCTION:SELECT * FROM 5 TABLES(students,trainers,assignments,courses)********/

//VARIABLES FOR THE TABLES///Use the variables to the functions 
const sql1 = "courses"
const sql2 = "students"
const sql3 = "trainers"
const sql4 = "assignments"

functionsQueries.selectAll(connection, sql1)
setTimeout(() => { functionsQueries.selectAll(connection, sql2) }, 2000)
setTimeout(() => { functionsQueries.selectAll(connection, sql3) }, 4000)
setTimeout(() => { functionsQueries.selectAll(connection, sql4) }, 6000)
setTimeout(() => { connection.end() }, 8000)






//****************** DELETE FROM TABLES ************************/

// functionsQueries.remove(connection,sql3,12)


//********************* READ FROM TABLES ***********************/
// functionsQueries.read(connection,sql1,2)


/******************* UPDATES ***********************/

//******** Student Update *************/

// const student=new Student("Alekos","Rwmanos","2000-1-10",2000)
// functionsQueries.studentUpdate(connection,student,10)

//******** Trainer Update *************/

// const trainer=new Trainer("Dimitris","Saravakos","HTML/CSS")
// functionsQueries.trainerUpdate(connection,trainer,1);

//***********Course Update****************/

// const course = new Course("CB31","Ruby","Part-Time","2020-1-10","2021-1-10")

// functionsQueries.courseUpdate(connection,course,1)

//********* Assignment Update **************/

// const assignment=new Assignment("To Do List","Build a todolist","2021-5-4")
// functionsQueries.assignmentUpdate(connection,assignment,2)