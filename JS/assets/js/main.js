/*task3
function Show(){
    let x=document.getElementById('put').value;
    let y=x.slice(-3,-2);
    if(y==1){
        document.body.style.backgroundColor="orange"
    }else if(y==2){
        document.body.style.backgroundColor="green"
    }else if(y==3){
        document.body.style.backgroundColor="darkblue"
    }else{

    }
}
Show()*/

/*task2*/
function myFunction(){
    let text;
    let age=prompt("Enter Your Age");
    if(age>18){
        document.getElementById('img')
        document.getElementById('demo').style.display='none';
    }else{
        text="Don't Show"
        document.getElementById('img');
    }
    document.getElementById('demo').innerHTML=text;
}
myFunction()

/*task1
function myFunction() {
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
      text = "You pressed OK!";
    } else {
      text = "You canceled!";
    }
    document.getElementById("demo").innerHTML = text;
  }*/