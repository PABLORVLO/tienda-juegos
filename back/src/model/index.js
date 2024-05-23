//const data = require('../../data.json');

const { connectToMongoDB, disconnectToMongoDB } = require('../config/index')

class ProductosModel {
    static async getAll(){
     try {
       const clientMongo = await connectToMongoDB()
       if (!clientMongo){
        throw Error('Error al conectar a MONGODB')
       }
      const result = await clientMongo.db('tienda').collection('productos').find().toArray()
     await disconnectToMongoDB ()


      console.log(result);
      if (!result) return {data:null, error:true}  
      return {data:result, error:false}

     } catch (error) {
        return error
     }   
    
    }
}

module.exports = ProductosModel