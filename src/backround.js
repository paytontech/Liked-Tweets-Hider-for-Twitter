chrome.runtime.onMessage.addListener(getUsername)

function getUsername (request) {
  let username = request.greeting
}