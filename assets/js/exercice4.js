$(function(){
// lancement d'une action au clic sur le bouton #bouton1
$('#bouton1').click(function(){
// si la hauteur est infÃ©rieur Ã  100px, on agrandit le rectangle de 10px
if( $('#rectangle').height() < 100 ) {
    //augmente de 10px la hauteur du rectangle
    $('#rectangle').css('height', $('#rectangle').height()+10+"px");
  } else {
    // sinon, on remet la valeur Ã  10px
    $('#rectangle').height(10);
  }
});
$('#bouton2').click(function(){
  $('#rectangle').css('backgroundColor', 'green');
});
$('#bouton3').click(function(){
  $('#rectangle').css('backgroundColor', 'black');
});
$('#bouton4').click(function(){
  $('#rectangle').css('display', 'none');
});
$('#bouton5').click(function(){
  $('#rectangle').css('display', 'block');
});
});
