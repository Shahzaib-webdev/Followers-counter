let count = 0; // Initialize count to 0



function displayCount(){
    document.getElementById("countDisplay").innerHTML=count;
}

function checkOut(){
    if(count===10){
        alert("Congratulations! you have reached 10 followers.")
    }
    else if(count===20){
        alert("YOu have gained 20 followers.Keep it up.")
    }
}

function increaseCount(){
    count++;
    displayCount();
    checkOut();
}