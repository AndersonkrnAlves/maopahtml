/* 
usuário : kronosalves
senha: rGlwpnNde9Vo11Z7

mongodb+srv://kronosalves:rGlwpnNde9Vo11Z7@cluster0.eo15t3i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

*/

const express = require("express")
const { PrismaClient, Prisma } = require('@prisma/client')

const prisma = new PrismaClient()

const app = express()

app.use(express.json())

//rota que o FROND-END vai acessar
//CRIA UM NOVO USUÁRIO

app.post('/usuarios', async (request, response) => {

    const { name, email, telefone } = request.body

    const usuario = await prisma.user.create({

        data: {

            name,
            email,
            telefone
        }

    })

    return response.status(200).send(usuario)

})

//DELETAR USUARIO

app.delete('/usuarios/deletar/:id', async (request, response) => {

    const id = request.params.id

    const usuarioDeletado = await prisma.user.delete({

        where: { id }
    })

    return response.status(200).send(usuarioDeletado)

})

// BUSCA TODOS OS USUÁRIOS
app.get('/usuarios', async (request, response) => {

    const usuarios = await prisma.user.findMany()

    return response.status(200).send(usuarios)
})

//BUSCA UM USUÁRIO POR id
app.get('/buscar/usuario/:id', async (request, response) => {

    const id = request.params.id

    const usuarios = await prisma.user.findUnique({

        where: { id }
    })


    return response.status(200).send(usuarios)
})

app.put('/editar/usuario/:id', async (request, response) => {

    const id = request.params.id
    const { name, email, telefone } = request.body

    const usuarioAtualizado = await prisma.user.update({

        where: { id },

        data: {

            name,
            email,
            telefone
        }
    })

    return response.status(200).send(usuarioAtualizado)
})

app.listen(3333, () => {
    console.log("Servidor Rodando")
})

