console.log("Script is running....");
// let user = document.getElementById("name");
// let subject = document.getElementById("subject");
// let userName = prompt("Enter YOur Name: ");
// let userSubject = prompt("Enter your Subject: ");
// user.innerHTML = userName;
// subject.innerHTML = userSubject;
// ************************************************
// let User = document.getElementById("exampleInputName1").value;
// let subject = document.getElementById("exampleInputSubject1").value;
// let userMicroProjectSubject = document.getElementById("exampleInputMicroProjectSubject1").value;
// let user = document.getElementById("name");
// let Subject = document.getElementById("subject");

// user.innerHTML = User;
// Subject.innerHTML = subject;

// [User, subject, Subject, userMicroProjectSubject, user].forEach(console.log);

$(document).ready(function(){
    $('#btn').click(function(){
        $('#container').printThis();
    });
});

function webReload(){
    console.log("Reload");
    let a = location = 'left_frame.html';
    return a.reload();
}
// webReload();
