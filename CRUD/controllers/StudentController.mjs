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

    static editDoc = async (req,res)=>{
        res.render('edit');
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
    

    static updateDocById = async (req,res)=>{
        res.redirect('/student')
    } 
    static deleteDocById = async (req,res)=>{
        res.redirect('/student')
    } 


}   
export default StudentController;