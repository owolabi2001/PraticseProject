const { genericResponse } = require("../dto/genericResponse");
const Course = require("../model/courseModel");
const Student = require("../model/studentModel");



const addCourses =async(req,res)=>{

    console.log("API to add course");
    const {courseTitle,courseCode,courseUnit} = req.body;

    const courseTitleCheck = await Course.findOne({courseTitle});
    console.log(courseTitleCheck);
    
    const courseCodeCheck = await Course.findOne({courseCode});
    console.log(courseCodeCheck);

    if (courseCodeCheck && courseTitleCheck){
        return res.status(405).json(genericResponse(
            "11",
            "course title and course code must be unique",res.body,null
        ));
    }else if(courseTitleCheck){  
        return res.status(405).json(
            genericResponse("11",
            "Course Title already exists before",
            req.body,null
            )
        )
    }else if(courseCodeCheck){
        return res.status(405).json(genericResponse(
            "11",
            "Course Code must be unique", req.body,null
        ));
    }else{
        const course = await Course.create({
            courseTitle,
            courseCode,
            courseUnit
        })
    
        if(course){
            return res.status(200).json(
                genericResponse(
                    "00",
                    "Course succesfully created",
                    req.body,
                    null
                )
            )
        }
    
    }

}

const addStudentToCourse = async (req,res)=>{
    console.log("API to add to student to a Course");
    const {matricNumber, courseCode} = req.body;
    const check = req.query.check;
    console.log(check);

    const student = await Student.findOne({matricNo:matricNumber});
    const course = await Course.findOne({courseCode});

    const studentCount = course.student.length;


    console.log("Student Id is: ",student);
    console.log("Course Id is:", course);
    if(!student || !course ){ 
        return res.status(401).json(
            genericResponse(
                "11","Either course or Student is not registered",
                null,null
            )
        )
    }
    
    const updating  =  course.student.push(student._id);
    course.save();

    if(updating >studentCount){
        res.status(200).json(genericResponse(
            "00",
            "Student has been added to course",
            null,null 
        ))
    }
}

const getStudentsforCourse = async (req,res)=>{
    console.log("API to get a students for a specified course");
    const courseCode = req.params.courseCode; 
    console.log("course code:",courseCode);
    // const course = await Course.findOne({courseCode:courseCode});
    // console.log(course._id); 
    const course = await Course.findOne({courseCode: courseCode}).populate("student");

    console.log(course.student);
    const students = course.student;
    if(students){
        return res.status(201).json(genericResponse(
            "00",
            "The Students associated with this course are: ",
            students,
            null
        ));
    }
    return  res.status(404).json(genericResponse(
        "11",
        "There are no students associated with this course.",null,null
    ));
    
    

}

module.exports = {
    addCourses,
    addStudentToCourse,
    getStudentsforCourse

}