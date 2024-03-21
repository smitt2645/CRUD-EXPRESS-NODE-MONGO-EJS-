// Import required libraries
import mongoose from 'mongoose';

// Define the schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    age: {
        type: Number,
        required: true,
        min:16,
        max:30
    },
    fees: {
        type: Number,
        required: true,
        validate:(v)=> { v >=5000.50 }
    }
});

// Create the model
const StudentModel = mongoose.model('Student', studentSchema);

// Export the model
export default StudentModel;
