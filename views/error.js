const room = Qs.parse(location.search, { ignoreQueryPrefix : true })

{
    if(document.title === 'Room Not Found')
        msg = `Room '${room.name}' has not been created. Click 'home' to create the room`
    else if(document.title === 'Room already exists') 
        msg = `Room '${room.name}' has already been created. Click 'home' and join the room`
    else    
        msg = `Unknown problem has occured. Click 'home' to go the homepage`
    document.querySelector('.emsg').innerHTML = msg
}