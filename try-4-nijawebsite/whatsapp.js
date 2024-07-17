function sendMessage(){
    let number ="+916369618359";

    let name =document.getElementById('name').value;
    let LastName =document.getElementById('lastname').value;
    let mobile = document.getElementById('mobileno').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    var url ="https://wa.me/" + number + "?text=" 
    +"Name:" +name+ " " +LastName+ "%0a"
    +"Mobile:" +mobile+ "%0a"
    +"Email:" +email+ "%0a"
    +"Message:" +message+ "%0a";

    window.open(url, '_blank').focus();
  }