document.addEventListener('input', validate)

function validate(e) {
    if (e.code == "Enter")
    console.log("got it")
}