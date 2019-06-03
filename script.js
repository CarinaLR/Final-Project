//Accept input from user and calculate the formula to obtain energy required without exercise.
var y,protein,carbs,fruit,veg;
var calTot=0;

function weigthLoss(){
  var num,elmnt;  
  num = document.getElementById("form1");
  elmnt = num.elements["cal"].value;
  // console.log(result);
  if(elmnt>0){
    y=parseInt(elmnt);
    document.getElementById("demo").innerHTML= "Your current calorie intake is: " +y;
  }
  else{
    document.getElementById("demo").innerHTML= "Please check your answers and try again. Make sure you are using numbers only to complete this field."
  }
}

//Create function that will take a value base on the option the user chose.
function myOption(){
  var emoji= document.querySelector("#emoji");
  var selection = document.getElementById("option").value;
  if (y>0){
    var total=Math.round((y*selection)-500);
    document.getElementById("demo2").innerHTML= "Your daily calorie intake should be: " + total;
  }
  else{
    document.getElementById("demo2").innerHTML= "Please make sure you fill in the information above";
  }

}

function caloriesNeeded(){

  var selection = document.getElementById("option1").value;
  num = document.getElementById("form");
  var w= parseInt(num.elements["weigth"].value);
  var h= parseInt(num.elements["heigth"].value);
  var a= parseInt(num.elements["age"].value);
  if(w>0 && h>0 && a>0){
    if(selection=="Female"){
      var totalCalories;

      totalCalories= Math.round(655+(4.35*w)+(4.7*h)-(4.7*a));

      document.getElementById("demo1").innerHTML= "Your minimum daily calorie intake should be: " +totalCalories;
    }

    if(selection=="Male"){
      var totalCalories;

      totalCalories= Math.round(66+(6.23*w)+(12.7*h)-(6.8*a));
      
      document.getElementById("demo1").innerHTML="Your total amount of daily calories should be: " +totalCalories;
    }
  }
  else{
    document.getElementById("demo1").innerHTML= "Please check your answers and try again. Make sure you are using numbers only to complete the fields."
  }

}

function calorieTracker(){
  var num = document.getElementById("myNutrition")
  var selection = document.getElementById("option3").value;
  var selection1 = document.getElementById("option4").value;
  var selection2 = document.getElementById("option5").value;
  var selection3 = document.getElementById("option6").value;

  var protein=parseInt(num.elements["quantityP"].value);
  var veg=parseInt(num.elements["quantityV"].value);
  var fruit=parseInt(num.elements["quantityF"].value);
  var carbs=parseInt(num.elements["quantityC"].value);

if(selection!==NaN &&
   selection1!==NaN &&
   selection2!==NaN &&
   selection3!==NaN &&
   protein>=0 &&
   veg>=0 &&
   fruit>=0 &&
   carbs>=0 ){
    if(selection=="Chicken"){
      var totalP= 60*protein;
  
    }

    if(selection=="Steak"){
      var totalP= 80*protein;

    }

    if(selection=="Fish"){
      var totalP= 30*protein;
    
    }

    if(selection1=="Broccoli"){
      var totalV= 32*veg;
    
    }

    if(selection1=="Leaves"){
      var totalV= 7*veg;

    }

    if(selection1=="Cucumber"){
      var totalV= 8*veg;
  
    }

    if(selection2=="Apple"){
      var totalF= 95*fruit;
    
    }

    if(selection2=="Banana"){
      var totalF= 105*fruit;

    }

    if(selection2=="Pear"){
      var totalF= 100*fruit;
  
    }

      if(selection3=="Potato"){
      var totalC= 161*carbs;
    
    }

    if(selection3=="Rice"){
      var totalC= 216*carbs;

    }

    if(selection3=="Pasta"){
      var totalC= 159*carbs;
  
    }

    var totalNut=totalP+totalV+totalF+totalC;

    document.getElementById("demo4").innerHTML= "The amount of calories in your chosen meal is: " + totalNut + " 💪 💪 💪";
   
  }
  else{
    document.getElementById("demo4").innerHTML= "All fields must be completed. Remember: not dieting while exercising 😉";
  }  
}