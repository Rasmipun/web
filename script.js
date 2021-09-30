function validateForm(){
  var name= document.forms["messageForm"]["name"].value;
  var country=document.forms["messageForm"]["country"].value;
  var country=document.forms["messageForm"]["address"].value;
  var country=document.forms["messageForm"]["email"].value;
  var country=document.forms["messageForm"]["gender"].value;
  var country=document.forms["messageForm"]["message"].value;

  if( name =="" ||country == "" || address == "" || email == "" || message ==""){
    alert("Empty fields found. Please fill the form.");
  }
  else{
    alert("Thank you for messaging us.");
  }
}
