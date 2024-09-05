import jwt from 'jsonwebtoken';
const isAuthenticated = async(req,res,next)=>{
    try {
        const token = req.cookies.token;
        console.log(token);

        if(!token){
            return res.status(401).json({msg:'Please login for Authentication'});
        }

        const decode = await jwt.verify(token,process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({message:"Invalid token"});
        }

        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error);
        
    }
}

export default isAuthenticated;