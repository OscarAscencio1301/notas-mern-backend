const express = require('express')
const cors = require('cors');
const { configDB } = require('../database/config');
class Server {
    constructor(){
      this.app = express();
      this.port = process.env.PORT;
      this.middlewares()
      this.routes();
      this.connect();
    }
    async connect(){
        await configDB();
    }
    middlewares(){
        this.app.use(express.static('public'))
        this.app.use(cors())
        this.app.use(express.json())
    }
    routes(){
        this.app.use('/api/auth', require('../routes/auth.routes'));
        this.app.use('/api/crud', require('../routes/crud.routes'));
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor Corriendo en ${this.port}`)
        })
    }
}

module.exports = Server;