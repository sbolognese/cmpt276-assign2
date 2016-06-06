function displayFav(fav,name, showing){
  if (showing == 0){
    document.getElementById('favInfo').innerHTML = "" + name + " loves " + fav + ".";

  }
  else{
    document.getElementById('favInfo').innerHTML = "" + "Hover over a student to view their interest.";
  }
}

function highlightLow(){
  var badStudents = document.getElementsByClassName("true");
  if (badStudents.length !=0) {
    for (i=0;i<badStudents.length;i++){
      badStudents[i].style.border =" 3px solid red";
    }
  }
}

function highlightHi(){
  var goodStudents = document.getElementsByClassName("false");
  if (goodStudents.length !=0) {
    for (i=0;i<goodStudents.length;i++){
      goodStudents[i].style.border =" 3px solid green";
    }
  }
}

function clearMe(){
  var badStudents = document.getElementsByClassName("true");
  var goodStudents = document.getElementsByClassName("false");
  if (goodStudents.length !=0) {
    for (i=0;i<goodStudents.length;i++){
      goodStudents[i].style.border ="none";
    }
  }
  if (badStudents.length !=0) {
    for (i=0;i<badStudents.length;i++){
      badStudents[i].style.border ="none";
    }
  }
}
