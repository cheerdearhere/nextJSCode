import HttpResponseStatus from "@/app/components/serverSide/HttpResponseStatus";

const databaseType={
    POSTGRES    : "postgres",
    MS_SQL      : "mssql",
    MY_SQL      : "mysql",
    MARIA_DB    : "mariaDB",
    // ORACLE_XE   : "oracleXe",
    // ORACLE_CL   : "oracleCloud",
}
const connectionConfig = (dbType)=>{
    console.log(`databaseType: ${dbType}`);
    const typeCheck = Object.keys(databaseType).find(type=> databaseType[type] === dbType);
    if(!typeCheck){
        throw new Error("Please check database type: databaseType");
    }
    //connection resource
    const yaml = require('js-yaml');
    const fs = require('fs');
    const filePath = `app/util/databaseConfig/${dbType}Config.yml`;
    const fsOpt = {
        encoding:'utf8',
        flag:"r",
    }
    let dbConnectionData;
    try{
        const data = yaml.load(fs.readFileSync(filePath,fsOpt));
        dbConnectionData = data.connection;
    }catch(error){
        console.log(error);
        throw new Error(HttpResponseStatus.INTERNAL_SERVER_ERROR.MESSAGE);
    }
    console.log("db connection",dbConnectionData);
    return dbConnectionData;
}
const connectionDB = (dbType)=>{
    const pgp = require('pg-promise')();
    const config = connectionConfig(dbType);
    //전역변수에 .db 객체 여부 확인
    const dbKey = Symbol.for(connectionDB+".db");
    const globalSymbols = Object.getOwnPropertySymbols(global);
    if(globalSymbols.indexOf(dbKey)<0){
        global[dbKey]=pgp(`${dbType}://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`);
    }
    return global[dbKey];
}

export default connectionDB;
export {
    databaseType,
}