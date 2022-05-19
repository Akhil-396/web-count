const mongoose =require('mongoose')
const Schema=mongoose.Schema;

let WebSchema = new Schema({
    url :{
        type: String,
        required:true
    }
   
    
    
})
module.exports=mongoose.model('website',WebSchema)