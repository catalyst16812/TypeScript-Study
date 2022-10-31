class Student
{
    name: '' | undefined;
    email: '' | undefined;

    adduser(stud: any)
    {
        return `${stud} is added` 
    }

    deleteuser(data: any)
    {
        console.log(`${data} is removed`)
    }
}
let student1 = new Student;
let result = student1.adduser('nikhil');
student1.deleteuser('aman');
console.log(result);
