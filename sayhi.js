const sayhi=(req,res,next)=>{
    console.log('hello')
    next()
    }
    
    module.exports = sayhi