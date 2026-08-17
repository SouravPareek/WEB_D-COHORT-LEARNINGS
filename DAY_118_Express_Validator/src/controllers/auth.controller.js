export async function registerUser(req, res, next) {
    res.status(201).json({
        message: "User registered successfully"
    })
    
    // try{
    //     throw new Error("User already exists, with same username")
    // }catch(err){
    //     err.status = 409
    //     next(err)
    // }
}

/**
 * user=>{
 * username: {type: String, required: true},
 * email: {type: String, required: true, unique: true},
 * password: {type: String, required: true}
 * }
 */
