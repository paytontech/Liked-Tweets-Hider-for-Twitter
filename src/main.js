document.addEventListener("keydown", function(event) {
    if (event.code === 'Enter') {
        const username = document.getElementById("Username").value 
        chrome.runtime.sendMessage({greeting: username})
    }
})