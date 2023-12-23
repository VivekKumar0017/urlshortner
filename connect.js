const mongoose=require('mongoose')

async function connecttoDb(url){
   return mongoose.connect(url)
};
module.exports=connecttoDb;
