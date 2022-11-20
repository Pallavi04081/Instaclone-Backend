const RegistionDataNew = require('../../module/RegistrationData')

const followReq = async(req,res)=>{
      try{
        console.log(req.body)
      const Result = await RegistionDataNew.findByIdAndUpdate({_id:req.params.id},{
        $push:{followers:req.body}
      })
       res.json({
        Result:Result
       })
      }
      catch(error){
        console.log(error)
      }
}


const following = async(req,res)=>{
  try{
    console.log(req.body)
  const Result = await RegistionDataNew.findByIdAndUpdate({_id:req.params.id},{
    $push:{following:req.body}
  })
   res.json({
    Result:Result
   })
  }
  catch(error){
    console.log(error)
  }
}

 module.exports = {followReq,following}