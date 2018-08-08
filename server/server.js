//requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

//uses
app.use( express.static( 'server/public' ) );


//globals
const port = 5000;



//server
app.listen( port, ()=>{
    console.log( 'server up on', port );
})