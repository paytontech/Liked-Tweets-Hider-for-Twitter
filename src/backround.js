chrome.runtime.onMessage.addListener(getUsername)

function getUsername (request) {
  const username = request.greeting
}

const username = getUsername(request)
console.log(username)