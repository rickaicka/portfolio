var express = require('express');

module.exports = function(){
    var app = express();
    //configuração de ambiente
    app.set('port',8000);
    
    //middleware
    app.use(express.static('./public'));
    app.set('view engine','ejs');
    
    
    return app;
};

