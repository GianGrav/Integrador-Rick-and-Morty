const  {User}  = require('../DB_connection');
const { Op } = require('sequelize');

const login = async(req,res) =>{
    const { email , password } = req.query;
    
    if(![email,password].every(Boolean)){
        return res.status(400).json({message:"Faltan datos"});
    }
    
    try {
    
        const user = await User.findOne({ where:{ email } })
    
        if(user === null){ return res.status(404).json({message:"Usuario no encontrado"})}
    
        if(user.password !== password){return res.status(403).json({message:"Constraseña incorrecta"})}
        
        return res.status(200).json({access:true})

    } catch (error) {
        res.status(500).json({error:error.message})
    }

}

module.exports = {
    login
}