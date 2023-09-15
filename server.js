import express from 'express'
const app = express()

app.get('/',(req, res)=>{
    res.send('welcome!')
})

const port = process.env.PORT || 3000

app.listen(port,()=> {
        console.log(`Server is running on port ${port}...`);
    console.log('Success');
})


