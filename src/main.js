document.addEventListener("keydown", function(event) {
    if (event.code === 'Enter') {
        let username = document.getElementById("Username").value 
        chrome.runtime.sendMessage({greeting: username})
    }
})