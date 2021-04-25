// Enter your code here

function Print() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var status = document.getElementById("status");
    var section = document.getElementsByName("section");
    var courses = document.getElementsByName("courses");
    var comment = document.getElementById("comment");
    var res = "";
    console.log("===============Form Submission===============")
    console.log("Name: "+ name.value);
    console.log("Email: "+ email.value);
    if (status.value =="Choose an Option") {
        console.log("Class Registration: no selection");
    } else {
        console.log("Class Registration:"+status.value);
    }
    for(var i=0; i< section.length; i++) {
        if(section[i].checked) {
            if(section[i].value == "CS 410p")
                console.log("Class section: Under Graduate");
            if(section[i].value == "CS 510")
                console.log("Class section: Graduate"); } 
    }

    for(var i=0; i< courses.length; i++) {
        if(courses[i].checked) {
            res += courses[i].value + ", ";
        }
    }
    var printCourses = res.substring(0, res.length - 2);
    console.log("Courses Taken: " + printCourses);
    if (comment.value== null) {
        console.log("Feedback: no feedback" + comment.value);
  } else {
    console.log("Feedback:"+comment.value);
 }

}