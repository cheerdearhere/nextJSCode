import {MongoClient, ServerApiVersion} from "mongodb";


async function connectionMongoDb(){
    let connectDB;
    //private.yml에 저장된 데이터 가져오기
    const yaml = require('js-yaml');
    const fs = require('fs');
//file data
    const ymlFileName = 'private.yml';
    const fsOpt = {
        encoding:'utf8',
        flag:"r"
    };
    let privateData;
    try{
        const doc = yaml.load(fs.readFileSync(ymlFileName,fsOpt));
        privateData = doc.mongo;
    }catch(err){
        console.log(err);
    }
//가져온 데이터를 기준으로 url 작성
    const uri =  `mongodb+srv://${privateData.id}:${privateData.password}@clusterseoul0.lotwepn.mongodb.net/?retryWrites=true&w=majority`;
    console.log(uri);
    const connectionOpt = {
        serverApi:{
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    };
//connection 생성
    if(process.env.NODE_ENV === 'development'){
        if(!global._mongo){
            global._mongo = new MongoClient(uri,connectionOpt).connect();
        }
        connectDB = global._mongo;
    } else{
        connectDB = new MongoClient(uri,connectionOpt).connect();
    }
    return connectDB
}


export {
    connectionMongoDb
};