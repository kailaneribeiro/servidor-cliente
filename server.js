let baralhos = [
    { id: 1, titulo: 'LionsDev',categoria:'empresa' },
    { id: 2, titulo: 'Javascript',categoria:'programaçao' }
]

function processarRequisicao(requisicao){
    const { acao, titulo, categoria, id } = requisicao

    switch (acao) {
        case 'CONSULTAR':
            return baralhos.find(b => b.titulo.toLocaleLowerCase() === titulo.toLocaleLowerCase()) || { mensagem: "Titulo não encontrado." }

        case 'LISTAR':
            return baralhos

        case 'ADICIONAR':
            const novoTitulo = { id: baralhos.length +1, titulo, categoria }
            baralhos.push(novoTitulo)
            return {mensagem: 'titulo add com sucesso', dado: novoTitulo }
        case 'REMOVER':
            baralhos.find(d => d.id === id) || { mensagem: "ID não encontrado." }
            return baralhos.splice(id -1, 1)
            
        default: 
            return { mensagem: 'açao invalida' }
    }
}

module.exports = {processarRequisicao}