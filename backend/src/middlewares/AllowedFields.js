export default  async function checkingFields(req,res,next){
       try {
        const allowedFields= ["firstName", "age","lastName", "gender" ];
 
     const isValid= Object.keys(req.body).every((field)=>allowedFields.includes(field))
if(isValid){
 next()
}
else{
    throw new Error()
}
    
       } catch (error) {
        res.send("invalid request")
       }
    
 }