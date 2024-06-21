const serve= require('express')
const app= serve();

//app.use(express.json())-- it is giving error

app.get('/',(req,res)=>
{
    res.send('Hi')
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
