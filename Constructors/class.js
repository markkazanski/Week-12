var Student = require("./student.js");

var Class(studentsArr, prof, room){
    this.studentsArr = studentsArr;
    this.studentsNum = this.StudentsArr.length;
    this.prof = prof;
    this.room = room;
    this.addStudent = function(name, subject, gpa){
        var newStudent = new Student(name, subject, gpa);
        studentsArr.push(newStudent);
    };
};

var bunchOfStudents = [
    new Student("billy", "math", 4),
    new Student("frank", "history", 2.4),
    new Student("joey", "science", 3)
];

console.log(bunchOfStudents);