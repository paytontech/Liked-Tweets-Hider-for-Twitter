document.addEventListener('keyup', getUsername)

function getUsername(e) {
    if(e.keycode == 13){
    const username = Username.value
    console.log(username)
    }
}
