//carragando o express na aplicacao
const express = require ("express")
const cors = require ("cors")
const app = express() // invocando a function do express

const port = 3000 
// definindo uma porta para o serviço

let numeros = []
{
    let n1 = 0
}

{
    let n2 = 0
}

//conectando a funcao cors com o express
app.use(cors())
//reconhecendo os request que possui json no body
app.use(express.json())


// invocando a funcao get para configurar a rota http pelo método get
app.get("/", (req, res)=>{
}) 

//Lista de produtos
app.get("/calcular", (req, res)=>{
   
res.json(numeros)

}) 


//Lista de produtos
app.post("/calcular", (req, res)=>{
    //incluindo objeto
numeros.push(req.body)
    //devolvendo um json de resposta para o client
    res.json ({mensagem: soma})
    
}) 

app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
} )


