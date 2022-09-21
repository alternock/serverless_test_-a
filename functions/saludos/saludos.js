exports.handler = async () =>{
   let mensaje = "hola desde serverless"

    return{
        statusCode:200,
        body:JSON.stringify(mensaje)
    }
}