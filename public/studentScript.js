function displayFav(fav,id, showing){
  if (showing == 0){
    document.getElementById(id).innerHTML = "loves " + fav;
  }
  else{
    document.getElementById(id).innerHTML = " ";
  }
}
