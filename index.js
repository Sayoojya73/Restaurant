// import json-server
const jsonServer = require('json-server')

// create a server application using json-server
const restServer = jsonServer.create()

const router =jsonServer.router('db.json')
const middleware =jsonServer.defaults()
const port = 3001
restServer.use(middleware)
restServer.use(router)

restServer.listen(port,()=>{
    console.log("restServer listening on port " + port);
})