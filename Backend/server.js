const express= require('express');
const app= express();
const cors= require('cors');

//write npm run server to esecute the file and start the server
app.use(express.json()) 

app.use(cors({
    origin: 'http://localhost:5000',
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
    credentials: true
}));

app.get('/',(req,res)=>
{
    res.send('server is running...')
})
const arr= [
    {
        id:1,
        name:'John'
    },
    {
        id:2,
        name:'Doe'
    },
    {
        id:3,
        name:'Jane'
    }
]

app.get('/products',(req,res)=>
{
    res.json(arr)
})
//displaying data in the page and also with the filteration methodology
app.get('/products/:id',(req,res)=>
{
    const newdata=arr.filter(item => item.id.toString() === req.params.id);
    return res.send(newdata)
})

app.post('/addproducts',(req,res) =>
{
    const  {id,name}= req.body;
    console.log(id,name);
    return res.send('data stored')
})
app.listen(5000,()=> console.log('server is runnimg ...'))
