var randomselect=(Math.floor(Math.random()*100));
var changescore=document.querySelector("#score").innerHTML;
console.log(`${randomselect}`);

if(randomselect > 0 && randomselect <= 3)
{
    document.querySelector('#hint').innerHTML="TODDLER";
}

else if(randomselect > 3 && randomselect <= 12)
{
    document.querySelector('#hint').innerHTML="CHILDHOOD";
}


else if(randomselect > 12 && randomselect <= 20)
{
    document.querySelector('#hint').innerHTML="MINOR";
}

else if(randomselect > 20 && randomselect <= 30)
{
    document.querySelector("#hint").innerHTML="EARLY ADULTHOOD";
}

else if(randomselect > 30 && randomselect <= 50)
{
    document.querySelector('#hint').innerHTML="LATE ADULTHOOD";
}

else if(randomselect > 50 && randomselect <= 70)
{
    document.querySelector('#hint').innerHTML="OLD";
}

function myfunction(){
    let myguess=document.querySelector('#inp').value;
    console.log(`${myguess}=>THIS IS THE NUMBER I GUESSED NOW`)
    if(randomselect == myguess){
        document.querySelector('#hint').innerHTML="YOU WON PLAY AGAIN";
        document.querySelector('#guessbox').innerHTML=randomselect;
        document.querySelector('#inp').style.backgroundColor="green";
        document.querySelector('#hint').style.color="green";
        document.querySelector('#ballon').style.display="block";
        // document.querySelector('#guessbox').disabled="true"
    }
else{
    changescore--;
    if(changescore>0){
        document.querySelector('#score').innerHTML=changescore;
    }
    else if(changescore == 0){
        document.querySelector('#score').innerHTML=changescore;
        document.querySelector('#hint').innerHTML="GAMEOVER TRY AGAIN";
        // document.querySelector('#guessbox').disabled="true"
    }
    document.querySelector('#hint').style.color="red";
}
}
document.querySelector('#submit').addEventListener('click',myfunction);