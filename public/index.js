const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")
userCreateForm.addEventListener("submit", collateData) //the parentheses that would normally appear after collateDatat(since it's a function) are left out because including parentheses would run the function automatically.  here, you just want the information from the function here.


function collateData(event){
    event.preventDefault()
    console.log("hello")
    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    const username = document.getElementById("username").value
    const mobilephone = document.getElementById("mobilephone").value
    const socialmedia = document.getElementById("socialmedia").value
    const resStartDate = document.getElementById("resStartDate").value
    const resEndDate = document.getElementById("resEndDate").value


    const fields = {email:email, username: username, firstname:firstname, lastname: lastname, mobilephone: mobilephone, socialmedia: socialmedia, preferredContactMethod: selectRadio(), usmail: usmail, preferredDevice: selectDevice(), resStartDate: resStartDate, resEndDate: resEndDate}
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

function resetForm(){
    document.getElementById("user-create-form").reset();
}

function selectRadio(){
    const usePhone = document.getElementById("usePhone").checked
    const useEmail = document.getElementById("useEmail").checked
    if (usePhone === true){
        return "phone"
    } else if(useEmail === true){
        return "email"
    }   return "usmail"
}

function selectDevice(){
    const iOS = document.getElementById("iOS").checked
    const Android = document.getElementById("Android").checked
    const Mac = document.getElementById("Mac").checked
    const Windows = document.getElementById("Windows").checked
    const deviceArray = []
    if (iOS === true){
        deviceArray.push("ios")
        }
    if (Android === true){
        deviceArray.push("Android")
    }    
    if (Mac === true){
        deviceArray.push("Mac")
    }
    if (Windows === true){
        deviceArray.push("Mac")
    }
    return deviceArray
}