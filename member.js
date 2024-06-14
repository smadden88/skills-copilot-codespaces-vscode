function skillsMember() { 
    var member = document.getElementById("member").value;
    var member = member.toLowerCase();

    if (member == "michael") {
        document.getElementById("skills").innerHTML = "Michael's skills are: HTML, CSS, JavaScript, PHP, Python, and Java.";
    }
    else if (member == "joseph") {
        document.getElementById("skills").innerHTML = "Joseph's skills are: HTML, CSS, JavaScript, PHP, Python, and Java.";
    }
    else if (member == "james") {
        document.getElementById("skills").innerHTML = "James's skills are: HTML, CSS, JavaScript, PHP, Python, and Java.";
    }
    else if (member == "jason") {
        document.getElementById("skills").innerHTML = "Jason's skills are: HTML, CSS, JavaScript, PHP, Python, and Java.";
    }
    else {
        document.getElementById("skills").innerHTML = "Member not found.";
    }
}