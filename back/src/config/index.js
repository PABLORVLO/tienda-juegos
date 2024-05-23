const dotenv = require ('dotenv')
dotenv.config()

const {MongoClient} = require ('mongodb')

const client = new MongoClient(process.env.MONGO_URL)

async function connectToMongoDB (){
try {
    await client.connect()
    console.log("conectado a mongo db")
    return client
} catch (error) {
    console.log('error al conectar a mongo db')
    return null
}     
}

async function disconnectToMongoDB(){
    try {
       await client.close()
       console.log("desconectado de mongodb")
    } catch (error) {
        console.log("error al desconectar de MONGODB", error);
    }
}

module.exports = {connectToMongoDB, disconnectToMongoDB}