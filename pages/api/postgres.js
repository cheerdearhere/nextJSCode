import connectionDB, {databaseType} from "@/app/util/dbConnection";
import HttpResponseStatus from "@/app/components/serverSide/HttpResponseStatus";

export default async function postgresTest (request, response){
    try{
        const connectionData = await connectionDB(databaseType.POSTGRES);
        return response.status(HttpResponseStatus.OK.CODE).json(connectionData);
    }catch (err){
        console.error(err);
        throw new Error(err);
    }
}