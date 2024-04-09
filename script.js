let count = 0; // Initialize count to 0

// manipulating dom

function displayCount(){
    document.getElementById("countDisplay").innerHTML=count;
}
// just added some checks
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


// reset function 
function resetFollowers(){
    count = 0;
    document.getElementById("countDisplay").innerHTML= count;
    alert("Followers has been reset");
}