const join = document.querySelector('.join')
const make = document.querySelector('.make')
const join_name = document.querySelector('.join_name')
const make_name = document.querySelector('.make_name')
const ejoin = document.querySelector('.ejoin')
const emake = document.querySelector('.emake')

{
    ejoin.innerHTML = ''
    emake.innerHTML = ''
}

document.querySelector('.join_btn').addEventListener('click' , (event) => {
    if(join_name.value == ''){
        event.preventDefault()
        ejoin.innerHTML = 'Enter Name of the room'
    }
    else 
        join.setAttribute('action' , '/join')
})

document.querySelector('.make_btn').addEventListener('click' , (event) => {
    if(make_name.value == ''){
        event.preventDefault()
        emake.innerHTML = 'Enter Name of the room'
    }
    else 
        make.setAttribute('action' , '/create')
})