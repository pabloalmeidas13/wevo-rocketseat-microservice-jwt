const axios = require('axios').default;

exports.tokenValidate = (req, res, next) =>
{
    let token = req.headers['x-rockeseat-token'];

    if (token)
    {
        axios.post("http://localhost:4000/accounts/token/validate", {}, {
            headers: {
                "x-rockeseat-token": token
            }
        })
        .then(function (response) 
        {
            // -------------------------------
            // ENVIA PARA O PROXIMO "METODO"
            // -------------------------------
            next();
        })
        .catch(function (err) {
            res.status(401).json({
                success: false,
                message: "Token inválido!"
            });
        });
    }
    else
    {
        res.status(401).json({
            success: false,
            message: "Token não informado!"
        });
    }    
}