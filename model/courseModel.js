const mongoose = require("mongoose");


const courseSchema = mongoose.Schema({
    courseTitle: {
        type: String,
        required: [true, "Course Title is required"],
        unique: [true,"Course Title must be unique"]
    },
    courseCode: {
        type: String,
        required: [true, "Course code is requied "],
        unique: [true,"Course code must be unique"]
    }, 
    courseUnit: {
        type:String,
        required: [true, "Course Unit is requied "],
        // unique: [true,"Course Unit must be unique"]
    },
    student: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "student"
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("course",courseSchema);