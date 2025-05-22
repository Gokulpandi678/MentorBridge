const students = [
    {
        studentId: 1,
        name: "Ram",
        grade: 8,
        courses:["Maths", "Science", "English"],
        attendance:{
            "01-05-2025": 'present',
            "02-05-2025": 'present',
            "03-05-2025": "Absent",
            "04-05-2025": "Absent",
        },
        hobbies:{
            "sports":["cricket", "football"],
            "music":["guitar", "piano"],
        }
    },
    {
        studentId: 2,
        name: "Kavya",
        grade: 9,
        courses:["Tamil", "Science", "Social"],
        attendance:{
            "01-05-2025": 'present',
            "02-05-2025": "Absent",
            "03-05-2025": "Absent",
            "04-05-2025": 'present',
        },
        hobbies:{
            "sports":["chess"],
            "music":["violine"],
        }
    },
    {
        studentId: 3,
        name: "Joseph",
        grade: 7.5,
        courses:["Maths", "Physics", "History"],
        attendance:{
            "01-05-2025": "Absent",
            "02-05-2025": 'present',
            "03-05-2025": 'present',
            "04-05-2025": "Absent",
        },
        hobbies:{
            "sports":["cricket", "volleyball"],
            "music":["guitar", "drums", "piano"],
        }
    },
    {
        studentId: 4,
        name: "Nivetha",
        grade: 8,
        courses:["English", "Science", "History"],
        attendance:{
            "01-05-2025": 'present',
            "02-05-2025": 'present',
            "03-05-2025": 'present',
            "04-05-2025": 'present',
        },
        hobbies:{
            "sports":["cricket", "football","Handball"],
            "music":["flute", "piano"],
        }
    }
]

//Dsiplaying all the products
const displayProducts = () => {
    students.forEach(student => {
        console.log(`
            StudentId:${student.studentId},
            Name:${student.name},
            Grade:${student.grade},
            Courses:${student.courses.join(', ')},
            Attendance:{${Object.entries(student.attendance).map(([date, status]) => `${date}: ${status}`).join(', ')}},
            Hobbies:{${Object.entries(student.hobbies).map(([category, items]) => `${category}: ${items.join(', ')}`).join(', ')}}
        `)
    })
}
console.log("----------Student details--------------");
displayProducts();


//Filtering students by grade
const filterStudentsByGrade = (grade) => {
    return students.filter((student) => student.grade === grade);
}
console.log("-------Students with the grade 8-------------");
console.log(filterStudentsByGrade(8));


//Finding students by Id
const findStudentById = (id) => {
    return students.find(student => student.studentId === id);
}
console.log("----------Student with the Id 1-----------");
console.log(findStudentById(1));


//Retrieving attendance of a student
const attendanceModule = (() => {
    const recordAttendance = (studentId, date, status) => {
        const student = findStudentById(studentId);
        if(student){
            student.attendance[date] = status;
            console.log(`Attendance for ${student.name} on ${date} is now recorded as ${status ? 'Present' : 'Absent'}`);
        }else{
            console.log('Student not found');
        }
    }   
    return {recordAttendance : recordAttendance}
})();
console.log('-------Attendance for the student 2--------');
attendanceModule.recordAttendance(2, "05-05-2025", true);


//Addding course to a student
const addCourse = (studentId, course) => {
    const student = findStudentById(studentId);
    if(student){
        if(student.courses.includes(course)){
            console.log(`Course ${course} already exists for ${student.name}`);
            return;
        }
        student.courses.push(course);
        console.log(`Course ${course} added to ${student.name}`);
    }else{
        console.log('Student not found');
    }
}
console.log('-------Adding course to the student 3--------');
addCourse(3, "Biology");


//Removing a student 
const removeStudent = (studentId) => {
    const studentIndex = students.findIndex(student => student.studentId === studentId);
    if(studentIndex !== -1){
        students.splice(studentIndex, 1);
        console.log('Student removed successfully');
    }else{
        console.log('No student found with this id');
    }
}
console.log('-------Removing student with the Id 1--------');
removeStudent(1);


//Get students with most hobbies in category
const studentsWithMostHobbies = (category) => {
    return students.map(student => {
        const hobbies = student.hobbies[category];
        return {
            studentId: student.studentId,
            name: student.name,
            hobbiesCount: hobbies.length
        };
    }).sort((a, b) => b.hobbiesCount - a.hobbiesCount)[0];
}
console.log('-------Students with most hobbies in sports category--------');
console.log(studentsWithMostHobbies("sports"));



