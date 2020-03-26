let rooms = ['Ashish']

function findRoom(room) {
    return (rooms.includes(room))
}

function createRoom(room) {
    rooms.push(room)
    return rooms
}

module.exports = {findRoom,createRoom}