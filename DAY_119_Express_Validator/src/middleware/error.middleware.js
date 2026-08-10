import dotenv from "dotenv"

dotenv.config()

function handleError(err, req, res, next){
    const response = {
        message: err.message
    }

    if(process.env.NODE_ENVIRONMENT === "development"){
        response.stack = err.stack//to locate exactly where error occured(not used in production)
    }
    
    res.status(err.status).json(response)
}

export default handleError