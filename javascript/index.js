/*JS try out
var width = 20;
var Name = "Ali";
var Name2 ='Abu';
var x = {firstName:"John", lastName:"Snow"};
var a = ["John","Cersei","Stark"];
var malaysia;

malaysia = "Malaysia";

console.log (width + Name + Name2);

console.log(x);
console.log(malaysia);
console.log(a);
malaysia = 13;
console.log(malaysia);*/

/*Loop
var i = 10;
if(i === 10){
    console.log("i is more than 10");
}else if(i=="10"){
    console.log("1 is equal to string ten");
}
else{
    console.log("i is less than 10");
}*/

/*Exercise 1
for(var i=0; i<3; i++){
    console.log(i);
}
for(var y=5;y>0;y--){
    console.log("y is = "+y);
}
for(var i=5;i<100;i+=5){
    console.log(i);
}
for(var y=50;y>0;y-=2){
    console.log("y is = "+y);
}
*/
/*
var i=0;
var text="";
while(i<10){
    text += "The number is  "+i;
    i++;
    console.log(text);
}*/

//javascript check name and age

function checkName() {
    var x = document.forms["verify"]["name"].value;
    var y = document.forms["verify"]["age"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else if(y<18){
        alert("Age is less than 18. You are not an adult!");
    }
  }