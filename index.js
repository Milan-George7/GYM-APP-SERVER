const JSONServer = require('json-server')
const GAServer = JSONServer.create()
const router = JSONServer.router("db.json")
const middleware = JSONServer.defaults()
const PORT = 3001 || process.env.PORT
GAServer.use(middleware)
GAServer.use(router)

GAServer.listen(PORT,()=>{
    console.log(`GAServer started at port: ${PORT}`);
})