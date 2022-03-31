document.addEventListener('keydown', getUsername)

function getUsername(e) {
    while(e.value !== "Enter"){
        const username = Username.value
        console.log(username)
    }
}
