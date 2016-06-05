function displayFav(fav,id, showing){
  if (showing == 0){
    document.getElementById(id).innerHTML = "loves " + fav;
  }
  else{
    document.getElementById(id).innerHTML = " ";
  }
}

function highlightLow(){
  var badStudents = document.getElementsByClassName("true");
  if (badStudents.length !=0) {
    for (i=0;i<badStudents.length;i++){
      badStudents[i].style.border =" 1px solid red";
    }
  }
}

function highlightHi(){
  var goodStudents = document.getElementsByClassName("false");
  if (goodStudents.length !=0) {
    for (i=0;i<goodStudents.length;i++){
      goodStudents[i].style.border =" 1px solid green";
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
