let functionsQueries = require("./functionsQueries.js")
let Trainer = require("./trainer.js")
let Student = require("./student.js")
let Assignment = require("./assignment.js")
let Course = require("./course.js")
let mysql = require('mysql2');
const prompt = require("prompt-sync")({ sigint: true });


let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "cube_coding_bootcamp",
    connectTimeout: 40000
})


connection.connect(function (error) {
    if (error) { throw error } else {
        //console.log("connected")
    }
})


//*************************INSERTS WITH PROMPTS*************************//



// //******* Prompt For New Student ******* */

let firstName = prompt(`first-name:`)
let lastName = prompt('last-name:')
let dateOfBirth = prompt('date of birth:')
let tuitionFees = prompt('tuition fees:')
const student1 = new Student(firstName, lastName, dateOfBirth, tuitionFees)
functionsQueries.insertStudent(connection, student1)


// // //********* Prompt For New Trainer ********/

const trainerFirstName = prompt('firstName:')
const trainerLastName = prompt('lastName:')
const subject = prompt("subject:")
const trainer1 = new Trainer(trainerFirstName, trainerLastName, subject)
functionsQueries.insertTrainer(connection, trainer1)


/********Prompt For New Course******* */

// const courseTitle=prompt("title: ")
// const stream=prompt("stream: ")
// const type=prompt("type: ")
// const startDate=prompt("startDate: ")
// const endDate=prompt("endDate: ")

// const course1=new Course(courseTitle,stream,type,startDate,endDate)
// functionsQueries.insertCourse(connection,course1)


/*********Prompt For New Assignment****************** */

// const assignmentTitle=prompt("title: ")
// const description=prompt("description: ")
// const subDateTime=prompt("subDateTime: ")


// const assignment1= new Assignment(assignmentTitle,description,subDateTime)
// functionsQueries.insertAssignment(connection,assignment1)