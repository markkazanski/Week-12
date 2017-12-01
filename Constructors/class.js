var Student = require("./student.js");

function Class(studentsArr, prof, room){
    this.studentsArr = studentsArr;
    this.studentsNum = this.studentsArr.length;
    this.prof = prof;
    this.room = room;
    this.addStudent = function(name, subject, gpa){
        var newStudent = new Student(name, subject, gpa);
        studentsArr.push(newStudent);
    };
    this.numberOfStudents = function(){
        return this.studentsArr.length;
    };
};

var bunchOfStudents = [
    new Student("billy", "math", 4),
    new Student("frank", "history", 2.4),
    new Student("joey", "science", 3)
];

var actualClass = new Class( bunchOfStudents, "Mr Bongo", 55 );

actualClass.addStudent("New Kid", "math", 55);

console.log(actualClass);

console.log(actualClass.numberOfStudents());