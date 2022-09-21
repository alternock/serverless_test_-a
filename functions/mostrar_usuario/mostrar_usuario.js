exports.handler = async ()=>{
   let usuario = "foobar"

   return{
    statusCode:200,
    body:JSON.stringify(usuario)
   }
}