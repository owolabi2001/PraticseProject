const { genericResponse } = require("../dto/genericResponse");
const Student = require("../model/studentModel")

const addStudent = async(req,res)=>{
    console.log("API to add student");
    const {name, email,matricNo} = req.body;
    const student = await Student.findOne({email});
    console.log(student);
    if(student){
        res.status(200).json(genericResponse(
            "00",
            "Your email must be unique",
            req.body,
            null
            )
        )
        return "email already exist";
    }
    console.log("THE STUDENT ======>",student);
    console.log(name,email,matricNo);
    
    if(!name || !email || !matricNo){

        res.status(200).json(genericResponse(
            "00",
            "all fields must be filled",
            req.body,
            null
            )
        )
        return "One input feed is missing";
    }
    const add = await Student.create({
        name,
        email,
        matricNo
    })    

    if(add){
        res.status(200).json(genericResponse(
            "00",
            `${name} successfully added`,
            res.body,
            null
        ))
    }

    
}


const getStudentByEmail = async (request, response)=>{
    console.log("API to get Student by Email")
    const email = request.params.email;
    console.log(email)
    const studentCheck = await Student.findOne({email});
    if(!studentCheck){
        return response.status(201).json(genericResponse(
            "11",
            `there is no student with the email ${email}`,
            null,null
        ));
    }
    return response.status(201).json(genericResponse(
        "00","The student with this email: ",studentCheck,null
    ));
}
module.exports = {
    addStudent,
    getStudentByEmail
}