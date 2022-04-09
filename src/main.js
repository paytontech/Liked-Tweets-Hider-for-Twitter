document.addEventListener('click', getUsername);

function getUsername(e) {
    const username = Username.value
    return username
}

/*TODO: 

Convert Username to ID
Use ID to get latest Liked tweets
send this info to a backround.js (somehow)
remove the tweet with the ID from API using the DOM

*/