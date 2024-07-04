// const express = require('express')
import express from 'express';
const app = express()
app.get('/api' , (req, res)=> 
{
    res.send('Hello World')
})

app.listen(8080, () =>
{
    console.log('Server started at  http://localhost:8080')

})

export default app;