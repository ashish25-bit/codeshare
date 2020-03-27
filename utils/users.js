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
     users.splice(index,1)[0]
}

module.exports = {joinUser,findUser,removeUser}