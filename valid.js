
function validation(){
    let popup=document.getElementById("popup")

    if(document.Fromfill.username.value==""){
        document.getElementById("result").innerHTML="Enter username*";
        return false;
    }
    else if(document.Fromfill.username.value.length<6){
        document.getElementById("result").innerHTML="Atleast six letter*";
        return false;
    }
    else if(document.Fromfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.Fromfill.password.value==""){
        document.getElementById("result").innerHTML="Enter your password*";
        return false;
    }
    else if(document.Fromfill.password.value.length<6){
        document.getElementById("result").innerHTML="password must be 6-digits";
        return false;
    }
    else if(document.Fromfill.cpassword.value==""){
        document.getElementById("result").innerHTML="Enter comfirm password";
        return false;
    }
    else if(document.Fromfill.password.value !==document.Fromfill.cpassword.value){
        document.getElementById("result").innerHTML="password does'n matched*";
        return false;
    }
    else if(document.Fromfill.password.value !==document.Fromfill.cpassword.value){
        // popup.classList.add("open-slide")
        return false;
    }

    popup.classList.add("open-slide");

   
}
function closeSlide(){
    popup.classList.remove('open-slide')
}

  