let rooms = []
let codes = []

function findRoom(room) {
    return (rooms.includes(room))
}

function createRoom(room,code) {
    rooms.push(room)
    c = {room, code}
    codes.push(c)
    return rooms
}

function obtainCode(room) {
    return codes.find(code => code.room === room)
}

function updateCode(room,c) {
    codeIndex = codes.findIndex(code => code.room === room)
    codes[codeIndex].code = c
}

function deleteRoom(room) {
    index = rooms.indexOf(room)
    rooms.splice(index,1)
    codes.splice(index,1)[0]
}

module.exports = {findRoom,createRoom,obtainCode,updateCode,deleteRoom}