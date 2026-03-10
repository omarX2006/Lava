function validatelogin() {
    let name =document . getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confirm =document.getElementById("confirm").value;

    if (name === "" || email === "" || pass === "" || confirm === ""){
        alert("please fill all fields");
        return false;
    }
    if (pass !== confirm) {
        alert("password don't match")
        return false;
    }
    alert("Sign up successfull (demo only)")
    return true;
        
}