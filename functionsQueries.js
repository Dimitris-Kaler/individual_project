//***** FUNCTION WITH SELECT * FROM QUERY********** */

function selectAll(con, table) {
    let sqlQuery = `SELECT * FROM ${table}`
    con.query(sqlQuery, function (err, result) {
        if (err) throw err
        console.log(`***********${table}*************`)
        // console.log(result) use this if you want to see the results as an Array of objects
        for (let row in result) {
            Object.entries(result[row]).forEach(([key, value]) => {
                console.log(key + ": " + value)

            })

        }


    })
    return con //i used return con instead con.end() to display all the queries (select * from)  for all tables together with setTimeout
}


//********INSERT INTO STUDENT FUNCTION*********** */

function createStudent(con, student) {
    let sqlQuery = `INSERT INTO students(first_name,last_name,date_of_birth,tuition_fees) VALUES('${student.firstName}','${student.lastName}','${student.dateOfBirth}',${student.tuitionFees})`
    con.query(sqlQuery, function (err, result) {
        if (err) throw err
        console.log(`student ${student.firstName} ${student.lastName} succesfully inserted`)
    })
    return con //i use this to insert with prompt new student and trainer together if you wnat only student change it with con.end()
}


//***********INSERT INTO TRAINER FUNCTION******************* */


function createTrainer(con, trainer) {
    let sqlQuery = `INSERT INTO trainers(first_name,last_name,subject) VALUES('${trainer.firstName}','${trainer.lastName}','${trainer.subject}')`
    con.query(sqlQuery, function (err, result) {
        if (err) throw err
        console.log(`The trainer ${trainer.firstName} ${trainer.lastName} succesfully inserted`)
    })
    con.end()
}

//***********************INSERT INTO COURSE FUNCTION****************************/
function createCourse(con, course) {
    let sqlQuery = `INSERT INTO courses(title,stream,type,start_date,end_date) VALUES('${course.title}','${course.stream}','${course.type}','${course.startDate}','${course.endDate}')`
    con.query(sqlQuery, function (err, result) {
        if (err) throw err
        console.log(`the course ${course.title} succesfully inserted`)
    })
    con.end()
}

///********************************INSERT INTO ASSIGNMENT FUNCTION****************************/

function createAssignment(con, assignment) {
    let sqlQuery = `INSERT INTO assignments(title,description,sub_date_time) VALUES('${assignment.title}','${assignment.description}','${assignment.subDateTime}')`
    con.query(sqlQuery, function (err, result) {
        if (err) throw err
        console.log(`The assignment ${assignment.title} succesfully inserted`)
    })
    con.end()
}



///*******************FUNCTION DELETE ****************/
function del(con, table, id) {
    let sqlQuery = `DELETE FROM ${table} WHERE id=${id} `
    con.query(sqlQuery, function (err, result) {
        if (err) throw err
        console.log("Number of records deleted: " + result.affectedRows);
    })
    con.end()
}


//*************************FUNCTION READ************/

function read(con, table, id) {
    let sqlQuery = `SELECT * FROM ${table} WHERE id=${id}`
    con.query(sqlQuery, function (err, result) {
        if (err) throw err
        console.log(result)
    })
    con.end()
}


///***************************UPDATE FUNCTIONS****************** */

//****Update Function For Students **************/

function studentUpdate(con, student, id) {

    let sqlQuery = `UPDATE students SET first_name = '${student.firstName}',Last_name='${student.lastName}',date_of_birth='${student.dateOfBirth}',
            tuition_fees=${student.tuitionFees} WHERE id = ${id}`;
    con.query(sqlQuery, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + "record(s) updated")
    })

    con.end();
}

//***********Update Function For Trainers************** */

function trainerUpdate(con, trainer, id) {

    let sqlQuery = `UPDATE trainers SET first_name = '${trainer.firstName}',last_name='${trainer.lastName}',subject='${trainer.subject}'
         WHERE id = ${id}`;
    con.query(sqlQuery, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + "record(s) updated")
    })

    con.end();
}
//*********Update Function For Courses*******************/

function courseUpdate(con, course, id) {
    let sqlQuery = `UPDATE courses SET title='${course.title}',stream='${course.stream}',type='${course.type}',start_date='${course.startDate}',
    end_date='${course.endDate}' WHERE id=${id}`;
    con.query(sqlQuery, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + "record(s) updated")

    })
    con.end()

}
//***********Update Function For Assignemnts***********/

function assignmentUpdate(con, assignment, id) {
    let sqlQuery = `UPDATE assignments SET title='${assignment.title}',description='${assignment.description}',sub_date_time='${assignment.subDateTime}' 
    WHERE id=${id}`;
    con.query(sqlQuery, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + "record(s) updated")
    })
    con.end()
}










module.exports = {
    selectAll: selectAll,
    insertStudent: createStudent,
    insertTrainer: createTrainer,
    remove: del,
    read: read,
    insertCourse: createCourse,
    insertAssignment: createAssignment,
    studentUpdate: studentUpdate,
    trainerUpdate: trainerUpdate,
    courseUpdate: courseUpdate,
    assignmentUpdate: assignmentUpdate
}




