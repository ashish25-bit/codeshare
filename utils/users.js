let users = []

function joinUser(id,room) {
     const user = {id,room}
     users.push(user)
     return user
}

function findUser(id) {
     return users.find(user => user.id === id)
}

module.exports = {joinUser,findUser}