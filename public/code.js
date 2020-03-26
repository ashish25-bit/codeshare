const socket = io()
const code = document.querySelector('.code')

const room = Qs.parse(location.search, { ignoreQueryPrefix : true })

document.querySelector('.room_name').innerHTML = `${room.name}'s Code Room`

// join a room
socket.emit('joinRoom' , {name : room.name})

code.addEventListener('input' , () => socket.emit('codeMsg' , code.value) )

socket.on('message' , msg => code.value = msg )
