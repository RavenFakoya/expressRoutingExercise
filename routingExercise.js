const express = require('express')
const { mean, median, mode, validateNumbers } = require('./operations')
const ExpressError = require('./expressError')

const app = express()


app.get('/mean', (req, res) => {
    if(!req.query.nums) {
        throw new ExpressError('A query string with numbers separated by commas is required.', 400);
    }
    let numString = req.query.nums.split(',');
    
    //Are all the query string numbers??
    let arr = validateNumbers(numString);
    if(arr instanceof Error){
        throw new ExpressError(arr.message);
    }

    const response = {
        operation: "mean", 
        value: mean(arr)
    }

    return res.json(response)
})

app.get('/median', (req,res) => {
    if(!req.query.nums) {
        throw new ExpressError('A query string with numbers separated by commas is required.', 400);
    }
    let numString = req.query.nums.split(',');
    
    //Are all the query string numbers??
    let arr = validateNumbers(numString);
    if(arr instanceof Error){
        throw new ExpressError(arr.message);
    }

    const response = {
        operation: "median", 
        value: median(arr)
    }

    return res.json(response)

})

app.get('/mode', (req,res) => {
    if(!req.query.nums) {
        throw new ExpressError('A query string with numbers separated by commas is required.', 400);
    }
    let numString = req.query.nums.split(',');
    
    //Are all the query string numbers??
    let arr = validateNumbers(numString);
    if(arr instanceof Error){
        throw new ExpressError(arr.message);
    }

    const response = {
        operation: "mode", 
        value: mode(arr)
    }

    return res.json(response)
})

app.get('/all', (req, res) => {
    if(!req.query.nums) {
        throw new ExpressError('A query string with numbers separated by commas is required.', 400);
    }
    let numString = req.query.nums.split(',');
    
    //Are all the query string numbers??
    let arr = validateNumbers(numString);
    if(arr instanceof Error){
        throw new ExpressError(arr.message);
    }

    const response = {
        operation: "all", 
        mean: mean(arr),
        median: median(arr),
        mode: mode(arr)
    }

    return res.json(response)

})

// If no other route matches, respond with a 404
app.use((req, res, next) => {
  const e = new ExpressError("Page Not Found", 404)
  return next(e)
})


// Error handler
app.use(function (err, req, res, next) { //Note the 4 parameters!
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.msg;

  // set the status and alert the user
  return res.status(status).json({
    error: { message, status }
  });
});


//Should always be at the end of code
app.listen(3000, function() { 
    console.log('App on port 3000');
})