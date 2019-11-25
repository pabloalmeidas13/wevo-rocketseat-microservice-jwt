const config = require('../config/config');
const jwt = require('jsonwebtoken');

exports.tokenValidate = async (req, res, next) =>
{
    try
    {
        let token = req.headers['x-rockeseat-token'];

        if (token) 
        {
            jwt.verify(token, config.secret_key, (err, decoded) => {
                if (err) 
                {
                    return res.status(401).json({
                        success: false,
                        message: 'Token não é válido'
                    });
                } 
                else 
                {

                    // Aplica regra de negocio
                    // decoded

                    res.status(200).json({
                        success: true,
                        message: 'Autenticado com sucesso'
                    });
                }
            });
        } 
        else 
        {
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