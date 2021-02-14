//Javascript Document
/*One function permit 
  the alert only run until the function be called
  so the program doesn't stop
*/


function ejecuta(){
	document.getElementsByTagName("h4")[0].onclick=saludo;
    //document.getElementById("importante).onclick=saludo;
}
function saludo(){
alert("Function saludo desde archivo script")

}

window.onload=ejecuta;

function typepaint(){
	
}
