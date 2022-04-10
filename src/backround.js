chrome.runtime.onMessage.addListener(
    function(request) {
      let username = request.greeting
      return username
    }
)
