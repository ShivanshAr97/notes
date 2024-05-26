import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    status:{
        type: String,
        enum : ['pending','in-progress','completed'],
        default: 'in-progress'
    },
    dueDate:{
        type:Date,
        required:true
    }
},{
    timestamps:true
})

export default mongoose.model("Todo", todoSchema);