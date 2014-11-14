/*$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            
*/

function submitText() {

var randomnumber=Math.floor((Math.random() * 10) + 1);

if(randomnumber <5){
alert("true");
navigator.notification.beep(3);
}
else{
alert("False");
navigator.notification.vibrate(2000);
}

}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 
}