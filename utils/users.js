let {findRoom,createRoom,obtainCode,updateCode,deleteRoom} = require('./rooms')
let users = []

function joinUser(id,room) {
     const user = {id,room}
     users.push(user)
     return user
}

function findUser(id) {
     return users.find(user => user.id === id)
}

function removeUser(id) {
     index = users.findIndex(user => user.id == id)
     room = users[index].room
     users.splice(index,1)[0]
     u = users.find(user => user.room === room)
     if(u == undefined) {
          deleteRoom(room)
     }
}

module.exports = {joinUser,findUser,removeUser}