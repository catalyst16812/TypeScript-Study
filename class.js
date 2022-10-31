var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.adduser = function (stud) {
        return "".concat(stud, " is added");
    };
    Student.prototype.deleteuser = function (data) {
        console.log("".concat(data, " is removed"));
    };
    return Student;
}());
var student1 = new Student;
var result = student1.adduser('nikhil');
student1.deleteuser('aman');
console.log(result);
