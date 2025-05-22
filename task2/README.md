# Task 2 : Student Management System

This documentation covers a JavaScript-based student management system that allows for managing student information, attendance, courses, and hobbies.

## Table of Contents
- [Data Structure](#data-structure)
- [Core Functions](#core-functions)
  - [Display Students](#display-students)
  - [Filter Students by Grade](#filter-students-by-grade)
  - [Find Student by ID](#find-student-by-id)
  - [Record Attendance](#record-attendance)
  - [Add Course](#add-course)
  - [Remove Student](#remove-student)
  - [Find Students with Most Hobbies](#find-students-with-most-hobbies)
- [Example Usage](#example-usage)

## Data Structure

The system uses an array of student objects with the following structure:

```javascript
{
    studentId: Number,          
    name: String,                
    grade: Number,               
    courses: Array<String>,      
    attendance: {                
        "DD-MM-YYYY": String     
    },
    hobbies: {                   
        "sports": Array<String>, 
        "music": Array<String>  
    }
}
```

## Core Functions

### Display Students

```javascript
const displayProducts = () => { ... }
```

Prints details of all students to the console, including their courses, attendance records, and hobbies.

### Filter Students by Grade

```javascript
const filterStudentsByGrade = (grade) => { ... }
```

**Parameters:**
- `grade` (Number): The grade level to filter by

**Returns:** An array of students matching the specified grade level.

### Find Student by ID

```javascript
const findStudentById = (id) => { ... }
```

**Parameters:**
- `id` (Number): The student ID to search for

**Returns:** The student object if found, or undefined if not found.

### Record Attendance

The system uses a module pattern to encapsulate attendance functionality:

```javascript
const attendanceModule = (() => {
    const recordAttendance = (studentId, date, status) => { ... }
    return { recordAttendance: recordAttendance };
})()
```

**Usage:**
```javascript
attendanceModule.recordAttendance(studentId, date, status);
```

**Parameters:**
- `studentId` (Number): The ID of the student
- `date` (String): The date in "DD-MM-YYYY" format
- `status` (Boolean): true for present, false for absent

Records a student's attendance for a specific date.

### Add Course

```javascript
const addCourse = (studentId, course) => { ... }
```

**Parameters:**
- `studentId` (Number): The ID of the student
- `course` (String): The name of the course to add

Adds a new course to a student's course list if it doesn't already exist.

### Remove Student

```javascript
const removeStudent = (studentId) => { ... }
```

**Parameters:**
- `studentId` (Number): The ID of the student to remove

Removes a student from the students array.

### Find Students with Most Hobbies

```javascript
const studentsWithMostHobbies = (category) => { ... }
```

**Parameters:**
- `category` (String): The hobby category to check (e.g., "sports", "music")

**Returns:** An object containing the student ID, name, and the count of hobbies in the specified category for the student with the most hobbies in that category.

## Example Usage

```javascript
// Display all students
displayProducts();

// Filter students by grade level
filterStudentsByGrade(8);

// Find a student by ID
findStudentById(1);

// Record attendance for a student
attendanceModule.recordAttendance(2, "05-05-2025", true);

// Add a course to a student
addCourse(3, "Biology");

// Remove a student
removeStudent(1);

// Find student with most hobbies in a category
studentsWithMostHobbies("sports");
```

The system helps manage student information with operations for displaying, filtering, finding, managing attendance and courses, and analyzing hobby preferences across the student body.