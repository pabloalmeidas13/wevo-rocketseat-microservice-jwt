const config = require('../config/config');
const jwt = require('jsonwebtoken');

exports.tokenValidate = async (req, res, next) =>
{
    try
    {
        let token = req.headers['x-rockeseat-token'];

        console.log("(tokenController)   [ Validando token... ]")
        if (token) 
        {
            jwt.verify(token, config.secret_key, (err, decoded) => {
                if (err) 
                {
                    console.error("(tokenController)   [ Erro ao validar o token... ]")
                    return res.status(401).json({
                        success: false,
                        message: 'Token não é válido'
                    });
                } 
                else 
                {

                    // Aplica regra de negocio
                    // decoded
                    console.log("(tokenController)   [ Token Valido! ]")
                    res.status(200).json({
                        success: true,
                        message: 'Autenticado com sucesso'
                    });
                    console.log("");
                    console.log("");
                }
            });
        } 
        else 
        {
            console.log("(tokenController)   [ Token nao Informado! ]")
            return res.status(401).json({
                success: false,
                message: 'Token não foi passado na request'
            });
        }       
    }
    catch(err)
    {
        res.status(400).json(err);
    }    
}