const mongoose = require('mongoose')

module.exports = {
   connectToDB: function(projectName){
      
      let dbLocation = 'mongodb://localhost/'+ projectName

      if (process.env.NODE_ENV === "development"){
        dbLocation += "_dev"
        mongoose.connect(dbLocation , (err, db)=>{
          if (err) {
            
          }
          else {
            
          }
        })
      } else {
        mongoose.connect(process.env.MONGODB_URI , (err, db)=>{
          if (err) {
            
          }
          else {
            
          }
        })
      }  
      
    }
}
