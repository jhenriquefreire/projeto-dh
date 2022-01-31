const produto = {
    criar: (req, res) => res.send('Criação de produtos'),
    excluir: (req, res) => {
        let {id} = req.params
            if (id == undefined){
                res.send('Exclusão de produtos')
            }
            else{
                res.send('Excluindo o produto ' + id)
            }
        },
    index: (req, res) => {
        let {id} = req.params
            if (id == undefined){
                res.send('Página inicial dos produtos')
            }
            else{
                res.send('Este é o produto ' + id)
            }
        }
}

module.exports = produto