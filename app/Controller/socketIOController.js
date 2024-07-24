const SocketIO = require("socket.io")

let io = {}
const message = "Bienvenue sur l'application de révision"

const SocketIOController = (server, options) => {
    let socketId
    io = SocketIO(server, options)
    io.on("connection", (socket) => {        
        console.log('first connection : ', socket.id)
        socketId = socket.id
        const usr='gossipCoco'
        socket.broadcast.emit('move', (io, socketId, usr, message));
        sendMessageWelcome(io, socketId, usr, message)
    })
    io.on('disconnect', socket => {
        console.log('Disconnect')
    })
}
const sendMessageWelcome = (io, socketId, message) =>{
    io.to(socketId).emit('sendMessage', message)
}
module.exports = SocketIOController