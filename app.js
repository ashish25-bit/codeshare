const express = require('express')
const path = require('path')
const socketio = require('socket.io') 
const http = require('http')
const {findRoom,createRoom,obtainCode,updateCode} = require('./utils/rooms')
const {joinUser,findUser,removeUser} = require('./utils/users')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
// for body parser
app.use(express.urlencoded({ extended : false }))
//server static files
app.use(express.static(path.join(__dirname, 'public')))
//set template engine 
app.set('views' , path.join(__dirname, 'views'))
app.set('view engine' , 'pug')

app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/join' , (req,res) => {
    room = req.query.name
    if(findRoom(room))
        res.sendFile(path.join(__dirname, 'public/code.html'))
    else {
        res.render('error' , {
            title : 'Room Not Found'
        })
    }
})

app.get('/create' , (req,res) => {
    room = req.query.name
    if(!findRoom(room)) {
        c = ''
        createRoom(room,c)
        res.sendFile(path.join(__dirname, 'public/code.html'))
    }
    else {
        res.render('error' , {
            title : 'Room already exists'
        })
    }
})

io.on('connection' , socket => {
    // to join the user in a specific room group
    socket.on('joinRoom' , room => {
        const user = joinUser(socket.id,room.name)
        socket.join(user.room)  
        code = obtainCode(room.name)
        socket.emit('message' , code.code)
    })

    // send the message to all the users connected in the room
    socket.on('codeMsg' , code => {
        const user = findUser(socket.id)
        io.to(user.room).emit('message' , code)
        updateCode(user.room,code)
    })

    socket.on('disconnect' , () => removeUser(socket.id))

})

const PORT = process.env.PORT || 3000
// setting up the server 
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
