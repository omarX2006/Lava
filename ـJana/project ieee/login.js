function validatelogin() { 
    let email = document .getElementById("email") .value;
    let pass =document.getElementById("password").value;

    if (email ==="" || pass ===""){ 
        alert("please fill all fields");
        return false;
    }
    alert("login successfull (just demo)");
    return true;
}
