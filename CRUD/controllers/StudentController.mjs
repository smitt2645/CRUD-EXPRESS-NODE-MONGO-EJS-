import StudentModel from "../models/Student.model.mjs";

class StudentController {
    static getAllDoc = async (req,res)=>{

       try {
        const response = await StudentModel.find()
        // const {name,age,fees} = req.body;
        res.render('home',{response});
       } catch (error) {
        console.log(error,"GetAllData Eorror!")
       }
    }

    static editDoc = async (req, res) => {
        try {
            const id = req.params.id; 
            const response = await StudentModel.findById(id);
            console.log(id);
            console.log(response);
            res.render('edit', { data: response });
        } catch (error) {
            console.log(error, "edit doc error!");
        }
    }

    static createDoc = async (req,res)=>{
      const {name,age,fees} = req.body; 
        const StudentData = new StudentModel({
            name:name,
            age:age,
            fees:fees
        });
        try {
            const response = await StudentData.save()
            console.log(response);
            res.redirect('/student')
        } catch (error) {
            console.log(error,"CreateDoc Error!");
        }
        
    } 
    

    static updateDocById = async (req, res) => {
        try {
            const id = req.params.id; // Corrected access to ID parameter
            console.log(id);
            console.log(req.body);
            const response = await StudentModel.findByIdAndUpdate(id,req.body);
            console.log(response);
            res.redirect('/student');
        } catch (error) {
            console.log(error);
        }
    }

    static deleteDocById = async (req,res)=>{
        try {
            const id = req.params.id; // Corrected access to ID parameter
            console.log(id);
            console.log(req.body);
        const response = await StudentModel.findByIdAndDelete(id);

        console.log(response,"deleted");       
        res.redirect("/student");
        } catch (error) {
            console.log(error,"deleteDocById error!");
        }
    } 


}   
export default StudentController;