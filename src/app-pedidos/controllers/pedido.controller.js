exports.salvarPedido = async (req, res, next) =>
{
    try
    {
        res.status(200).json({message:'Pedido Salvo com Sucesso!'});
    }
    catch(err)
    {
        res.status(500).json(err);
    }    
}