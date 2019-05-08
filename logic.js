var evaluated = 0;

function input(id){
    if(evaluated == 1){
        clearDisplay();
        evaluated = 0;
        document.getElementById('displayInput').value += id;
        console.log(id);
    }else{
        evaluated = 0;
        document.getElementById('displayInput').value += id;
        console.log(id);
    }
}

function clearDisplay(){
    var c = document.getElementById('displayInput').value = "";
    console.log('cleared display.');
    return c;
}

function getTotal(){
    //get total of sum
    t = document.getElementById("displayInput").value;
    a = document.getElementById("displayInput").value = eval(t);
    if(a == null){
        document.getElementById("displayInput").value = "";
        console.log('start with a number ;)');
    }else{
        console.log(t + '=');
        console.log(eval(t));
        evaluated = 1;
        return a;
    } 
}