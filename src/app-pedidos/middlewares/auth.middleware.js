const axios = require('axios').default;

exports.tokenValidate = (req, res, next) =>
{
    let token = req.headers['x-rockeseat-token'];

    if (token)
    {
        console.log("(authMiddleware)   [ Solicitando autenticacao... ]")
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
            console.log("(authMiddleware)   [ Autenticado com Sucesso ]");
            next();
        })
        .catch(function (err) 
        {
            console.log("(authMiddleware)   [ Erro na autenticação ]");
            res.status(401).json({
                success: false,
                message: "Token inválido!"
            });
        });
    }
    else
    {
        console.log("(authMiddleware)   [ Token não informado ]");
        res.status(401).json({
            success: false,
            message: "Token não informado!"
        });
    }    
}