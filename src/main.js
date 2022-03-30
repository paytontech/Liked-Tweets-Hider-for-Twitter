document.addEventListener('keydown', validate)

function validate(e) {
    if (e.code !== "Enter") {return 1}
    console.log(document.getElementById("Username"))
}