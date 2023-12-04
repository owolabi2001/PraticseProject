const { genericResponse } = require("../dto/genericResponse");
const Course = require("../model/courseModel")
const addCourses =async(req,res)=>{
    console.log("API to add course");
    const {courseTitle,courseCode,courseUnit} = req.body;
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

    return res.status(401).json(
        genericResponse(
            "11",
            "Something happened",
            null,null
        )
    )
    
}

module.exports = {
    addCourses

}