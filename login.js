function login(){
    u1 = document.getElementById("username1").value;
    u2 = document.getElementById("username2").value;
    localStorage.setItem("uu1",u1);
    localStorage.setItem("uu2",u2);
    window.location = "index.html";
}
