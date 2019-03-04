
function submitInput() {
    var input = document.getElementById("my_input").value
    + '<br/>';
    var divComment = document.getElementById("comment");

    var oldInput = window.localStorage.getItem("comment");

    input = oldInput + input;

    window.localStorage.setItem("comment", input)
    divComment.innerHTML = input;
}

function myLoadingFunction() {
  document.getElementById("comment").innerHTML = window.localStorage.getItem("comment");
}
