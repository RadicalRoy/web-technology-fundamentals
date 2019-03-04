

// Set the top right corner date
function dateTimer() {
  var d = new Date();

  document.getElementById("timerDiv").innerHTML = d.toLocaleTimeString();

}

// onload method to call dateTimer every 1 second
function startTimer() {
  window.setInterval(dateTimer, 1000);
}

// onClick command to pull text from comment box, append to local storage, and display in comment section
function submitComment() {
  var txt = document.getElementById("commentText").value + "<br/>"; //include linebreak

  var oldTxt = window.localStorage.getItem("rortyComments"); // get existing comments

  if (oldTxt === null) { // because I do this for a living too; why does no one validate!?
    oldTxt = "";
  }

  txt = oldTxt + txt;

  window.localStorage.setItem("rortyComments", txt);

  document.getElementById("rortyLove").innerHTML = txt;
}

// onload existing comments
function getComments() {
  document.getElementById("rortyLove").innerHTML = window.localStorage.getItem("rortyComments");
}

function toggleStyles() {
  var timeOfDay = window.sessionStorage.getItem("timeOfDay");

  // check initial state
  if (timeOfDay === null) {
    timeOfDay = "day";
  }

  if (timeOfDay === "day") {
    // set to night time
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementsByTagName("IMG")[0].src = "https://i0.wp.com/www.themetaweta.com/wp-content/uploads/2016/12/Cthulhu.jpg";
    document.body.innerHTML = document.body.innerHTML.replace(/Richard Rorty/g, "Cthulhu");
    
    // it is now night
    timeOfDay = "night";
  }
  else {
    // set to day time
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementsByTagName("IMG")[0].src = "https://cdn-images-1.medium.com/max/1600/1*Uw2Ef-mdK8N1T8HdyeH3RA.jpeg";
    document.body.innerHTML = document.body.innerHTML.replace(/Cthulhu/g, "Richard Rorty");

    // it is now day
    timeOfDay = "day";
  }

  // save to session storage
  window.sessionStorage.setItem("timeOfDay", timeOfDay);
}
