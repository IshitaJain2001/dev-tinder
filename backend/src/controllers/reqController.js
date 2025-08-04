  export default async function connectionReq(req,res){
    const {firstName,lastName}= req.body
    res.send({
        "message":`req received from ${firstName} ${lastName}`
    })
  }