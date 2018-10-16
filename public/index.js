const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")
userCreateForm.addEventListener("submit", collateData) //the parentheses that would normally appear after collateDatat(since it's a function) are left out because including parentheses would run the function automatically.  here, you just want the information from the function here.

function collateData(event){
    event.preventDefault()
    console.log("hello")
    const email = document.getElementById("email").value
    const username = document.getElementById("username").value
    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    const fields = {email:email, username: username, firstname:firstname, lastname: lastname}
    console.log(fields)
    const stringifiedFields = JSON.stringify(fields)
    
    fetch("/api/user", {
        method: "POST",
        body: stringifiedFields,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }

        //fetch needed to be inside the function.
    })
    .then(response => {
        if(response.status === 201){
            alert("success")
        } else if (response.status === 409){
            alert("fail")
        }
        return response.json() 
    })
    .then(response => {
        console.log(response)
    })
};