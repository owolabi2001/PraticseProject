const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"I is required to input your name"]
    },
    email:{
        type: String,
        required: [true, "your email is required"]
    },
    matricNo:{
        type: String,
        required: [true,"your Matriculation number is required"]
    },
    course: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "course"
    }],
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports =mongoose.model("student", studentSchema)