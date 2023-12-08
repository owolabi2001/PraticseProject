const { ObjectId } = require("mongodb");
const { genericResponse } = require("../dto/genericResponse");
const Course = require("../model/courseModel");
const Student = require("../model/studentModel");


// Code still doesn't work well to return error
const addCourses =async(req,res)=>{
    console.log("API to add course");
    const {courseTitle,courseCode,courseUnit} = req.body;

    const courseTitleCheck = await Course.find({courseTitle});
    console.log(courseTitleCheck);
    
    const courseCodeCheck = await Course.find({courseCode});
    console.log(courseCodeCheck);
    // const courseUnitCheck = await Course.find({courseUnit});

    if(!courseTitleCheck || !courseCodeCheck ){  
        console.log("==========> Code is reaching here"); 
        return res.status(401).json(
            genericResponse("11",
            "All input feed must be unique",
            req.body,null
            )
        )
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
    // return res.status(401).json(
    //     genericResponse(
    //         "11",
    //         "Something happened",
    //         null,null
    //     )
    // )
    
}

const AddCourseToStudent = async (req,res)=>{
    const {studentName,courseName} = req.body;
    const check = req.query.check;
    console.log("check =========>",check);
    const student = await Student.findOne({name:studentName});
    console.log(student); 
    const course = await Course.findOne({courseTitle:courseName});
    
    console.log("course Id: ",course._id);
    // console.log("Student Id: ",student._id);
    console.log("student name " + studentName);

    student.course.push({$ref:"course",$id:course._id});

    const done = await student.save();
    if(done){
        return res.status(201).json(genericResponse( 
            "00",
            "Student is successfully added",
            student,
            null
        ))
    }

}

const addStudentToCourse = async (req,res)=>{
    console.log("API to add to student to a Course");
    const {matricNumber, courseCode} = req.body;
    const check = req.query.check;
    console.log(check);

    const student = await Student.findOne({matricNo:matricNumber});
    const course = await Course.findOne({courseCode});

    console.log("Student Id is: ",student);
    console.log("student",student._id);
    console.log("Course Id is:", course);
    if(student == null && course == null){ 
        return res.status(401).json(
            genericResponse(
                "11","Either course or Student is not registered",
                null,null
            )
        )
    }
    
    const updating  =  course.student.push(student._id);
    console.log(`updating =====>${updating}`);
    course.save();

    if(updating){
        res.status(200).json(genericResponse(
            "00",
            "Student has been added to course",
            null,null
        ))
    }
}

module.exports = {
    addCourses,
    addStudentToCourse

}