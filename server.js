 const  express  = require ('express');
 const hbs = require('hbs'); // hbs stands for handle bar services 
const fs =  require('fs');
 var app = express();
 hbs.registerPartials(__dirname +'/views/partials')
 app.set ('view engine','hbs');  // we are passing key value types in your app
 //dirname takes the path of node-webserver
 app.use((req,res,next) =>{
    var now = new Date().toString();
    console.log(now)

    var log = (`${now} : ${req.method} ${req.url}`);

    console.log(log)
    fs.appendFile('server.log',log +'\n' );
       
        next();

     
    });

   // app.use((req,res,next) =>{
   //     res.render('maintance.hbs')
        
         
    //    });
app.use(express.static(__dirname + '/public'));
 app.get('/',(req,res) => {
 
   
    //res.send('<h1>Hello Express !</h1>')
    //app.use is how the middleware uses it 
    res.render('welcome.hbs',{
        pageTitle : 'Welcome to page',
        currentYear : new Date().getFullYear()
    });

        
    

 } );
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle : 'About hbs',
        currentYear : new Date().getFullYear()
    })
})

//bad -send back json with error message 

app.get('/bad',(req,res) => {
    res.send ({
        error : "this is a error message",
    });
});




app.listen(3000, () => {

    console.log ("Node is running on port 3000")
});