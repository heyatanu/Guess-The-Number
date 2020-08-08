var lable;
var f=0;
var v=0;
var whats_the_numbar;
document.getElementById("demo").innerHTML="SELECT LABLE FIRST";
res_arr=[];//RESULT ARRAY
var h=0;
var ch=0;
function hintt(){//HINT LOGIC FUNTION
    
   
    document.getElementById("tb1").style.backgroundColor="";
    document.getElementById("tb2").style.backgroundColor="";
    document.getElementById("tb3").style.backgroundColor="#ccc";
    document.getElementById("tb4").style.backgroundColor="";
    document.getElementById("tb5").style.backgroundColor="";
    mynew(); 
    h01 =Math.round( Math.random()*10);
    h10=Math.round( Math.random()*15)+10;
    var hintrandomnum=(h01+h10);
    var hintlower;
    var hintupper;
    hintlower=n-hintrandomnum;
    hintupper=n+hintrandomnum;
    if (hintlower<0){
        hintlower=0;
        document.getElementById("hinttxt2").innerHTML="The Number Is Between ("+(hintlower)+")  And  ("+hintupper+")\n\n\n Your Total Guess Increase By 2 Points.";
    }
    else{
        hintlower=hintlower;
        hintupper=hintupper;
        document.getElementById("hinttxt2").innerHTML="The Number Is Between ("+hintlower+")  And  ("+hintupper+")\n\n\n Your Total Guess Increase By 2 Points.";
   
    }
    h=h+2;
    ch=ch+1;
    document.getElementById("hinttime").innerHTML=ch;
    
    document.getElementById("gcount").innerHTML=v+h;
}

function color()
{
    document.getElementById("tb1").style.backgroundColor="#ccc";
    document.getElementById("tb2").style.backgroundColor="";
    document.getElementById("tb3").style.backgroundColor="";
    document.getElementById("tb4").style.backgroundColor="";
    document.getElementById("tb5").style.backgroundColor="";
}

//THREE DIFFERENT LABLE FUNTIONS START HERE
function easyfun(){
    document.getElementById("myText").focus();
    lable=15;
    h=0;v=0;
    document.getElementById("gcount").innerHTML="0";
    document.getElementById("hinttime").innerHTML="0";  
    c=1;ch=0;
    n =Math.round( Math.random()*lable);
    whats_the_numbar=n;
    document.getElementById("demo").innerHTML="Easy lable Is Selected...!! New Number Is Genarated Start Guessing...!";
    document.getElementById("easy").innerHTML="&#10146;     Easy (Selected)";
    document.getElementById("medium").innerHTML="Medium";
    document.getElementById("hard").innerHTML="Hard";
    f=1;
}
function medfun(){
    lable=100;
    document.getElementById("myText").focus();
    c=1;v=0;
    h=0;document.getElementById("gcount").innerHTML="0";
    document.getElementById("hinttime").innerHTML="0";  
    n =Math.round( Math.random()*lable);
    whats_the_numbar=n;ch=0;
    document.getElementById("demo").innerHTML="Medium lable Is Selected...!! New Number Is Genarated Start Guessing...!";
    document.getElementById("easy").innerHTML="Easy";
    document.getElementById("medium").innerHTML="&#10146;Medium (Selected)";
    document.getElementById("hard").innerHTML="Hard";f=2;
}
function hardfun(){
    lable=1000;v=0;
    c=1;h=0;document.getElementById("gcount").innerHTML="0";
    document.getElementById("hinttime").innerHTML="0";  
    document.getElementById("myText").focus();
    n =Math.round( Math.random()*lable);ch=0;
    whats_the_numbar=n;
    document.getElementById("demo").innerHTML="Hard lable Is Selected..!! New Number Is Genarated Start Guessing...!";
    document.getElementById("easy").innerHTML="Easy";
    document.getElementById("medium").innerHTML="Medium";
    document.getElementById("hard").innerHTML="&#10146;Hard (Selected)";f=3;
}

//THREE DIFFERENT LABLE FUNTIONS END HERE


//ENTER KEY PRESS FUNTION CALLING  START
document.getElementById("myText").addEventListener("keydown", function (r) {
    if (r.keyCode === 13) {
        var x = document.getElementById("myText").value;
        if (x == "" || x == null) {
            validateForm(r);
        }
        else{
        openCity(event, 'London');
        color();
        mynew();
        myFunction(r);
        }
    }
});
//ENTER KEY PRESS FUNTION CALLING END
function validateForm(r) {//ENTER SOMETHING IN VALID OR NOT CHECK FUNTION
document.getElementById("gcount").innerHTML="No Valid Data Put Please Put Valid Data.";
}



function mynew(){//FOCUS THE INPUT TEXT BOX
    document.getElementById("myText").focus();
}




function myFunction(r) {//ENTER BUTTON CALLING THE FUNTION
   
    var x = document.getElementById("myText").value; 
    if (x==""|| x==null){
validateForm();
    }
    else
    {a=x;
    ne();}

}



//MAIN LOGIC START HERE

function ne(){

    if (a>n){
        playno();
        document.getElementById("myimg").src = "image/no.gif";
        document.getElementById("gcount").innerHTML=(c+h);
        document.getElementById("demo").innerHTML="Please Put A Lower Value of No:-"+a+"...!!Try Again....!!";
        document.getElementById("myText").value="";
        
        
    }
    else if (a<n){
        playno();
        document.getElementById("myimg").src = "image/no.gif";
        document.getElementById("gcount").innerHTML=(c+h);
        document.getElementById("demo").innerHTML="Please Put A Higher Value of No:-"+a+"...!!Try Again...!!";
        document.getElementById("myText").value="";
        
        
    }
    else if(a==n){
        play();
        document.getElementById("myimg").src = "image/200.gif";
        document.getElementById("demo").innerHTML="Congratulations , Complete Succfully in "+ (c+h) +" Attems Wait For 1 Sec For Restart The Game..";
        document.getElementById("myText").value="";
        document.getElementById("gcount").innerHTML=(c+h);
        document.getElementById("myText").placeholder="Congratulations..!";
        
        
        
        res_arr.push(c+h);
        
        reset();

        len=res_arr.length;
        
        document.getElementById("lastgame").innerHTML="Complete The last game in "+res_arr[len-1]+" Attems";
        document.getElementById("1stlastgame").innerHTML="Complete The Secand last game in "+res_arr[len-2]+" Attems";
        document.getElementById("2ndlastgame").innerHTML="Complete The Third last game in "+res_arr[len-3]+" Attems";
        document.getElementById("3rdlastgame").innerHTML="Complete The Forth last game in "+res_arr[len-4]+" Attems";
        document.getElementById("4thlastgame").innerHTML="Complete The Fifth last game in "+res_arr[len-5]+" Attems";

    }v=c;
    c=c+1;


}

//MAIN LOGIC END HERE



//RESET LOGIC START HERE

function reset(){
    setTimeout(function(){
        
        document.getElementById("myimg").src = "image/start.gif";
        document.getElementById("gcount","hinttime").innerHTML="0"; 
        document.getElementById("hinttime").innerHTML="0";  
        ch=0;
        v=0;
        document.getElementById("myText").placeholder="Guess The Number";

    c=1
    lable=0;
    if (f==1){
      
        easyfun();
    }
    else if(f==2){
        medfun();
    }
    else if(f==3){
        hardfun();
    }
    document.getElementById("demo").innerHTML="Game Restart Stay In Same Lable You Can Change The Lable Now....!";}, 2000);
    
}

//RESET LOGIC END HERE

function total(){//COUNTING THE TOTAL POINT AND NO OF MATCH FUNTION
    document.getElementById("tb1").style.backgroundColor="";
    document.getElementById("tb2").style.backgroundColor="";
    document.getElementById("tb3").style.backgroundColor="";
    document.getElementById("tb4").style.backgroundColor="#ccc";
    document.getElementById("tb5").style.backgroundColor="";
    var i,pl1=0,pl2=0,pl1_c=0,pl2_c=0;
    for (i=0;i<res_arr.length;i++){
        if (i%2==0){
            pl1=pl1+res_arr[i];
            pl1_c=pl1_c+1;
        }
        else{
            pl2=pl2+res_arr[i];
            pl2_c=pl2_c+1;
        }
    }
    ar_len=res_arr.length;

    if (ar_len%2==0){
        if(pl1<pl2){
            document.getElementById("wintxt").innerHTML="Player1 Win At This Time...!!! Keep Trying Player2.";
        }
        else if (pl1>pl2){
            document.getElementById("wintxt").innerHTML="Player2 Win At This Time...!!! Keep Trying Player1.";
        }
        else{
            if (pl1==0 && pl2==0){
                document.getElementById("wintxt").innerHTML="Play The Game ..!!!To Get Win Result...!!";
            }
            else
            {document.getElementById("wintxt").innerHTML="Wow....!!!!! Both Are Same Poistion.";}
        }
    }
    else{
        document.getElementById("wintxt").innerHTML="Player2 Need To Play The Game One More Time For Get The Win Result";
    }
    document.getElementById("pl1").innerHTML=pl1;
    document.getElementById("pl2").innerHTML=pl2;
    document.getElementById("pl1_c").innerHTML=pl1_c;
    document.getElementById("pl2_c").innerHTML=pl1_c;
}



function arrr(){//PRINTING THE ARRAY

    
    document.getElementById("arrtxt").innerHTML=res_arr;
    mynew();
}
function rules(){//PRINTING THE ARRAY
    document.getElementById("tb1").style.backgroundColor="";
    document.getElementById("tb2").style.backgroundColor="";
    document.getElementById("tb3").style.backgroundColor="";
    document.getElementById("tb4").style.backgroundColor="";
    document.getElementById("tb5").style.backgroundColor="#ccc";
  
}






var audio = new Audio('music/win.mp3');
var audio2 = new Audio('music/no.mp3');
function play() {
    
    audio.play();
  }
  function playno() {
    
    audio2.play();
  }

  function enableMute() { 
    music_icon_off()
    mynew();
    audio.muted = true;
  } 
  function enableMute2() { 
    music_icon_off()
    mynew();
    audio2.muted = true;
  } 
  function disableMute() { 
    music_icon_on()
    mynew();
    audio.muted = false;
  }  
  function disableMute2() { 
    music_icon_on()
    mynew();
    audio2.muted = false;
  }  
  function music_icon_off(){
    document.getElementById("icon").classList.remove("fa-volume-up");
    document.getElementById("icon").classList.add("fa-times");
    document.getElementById("music_icon").style.color="red";
    document.getElementById("icon").style.color="red";
  }
  function music_icon_on(){
    document.getElementById("icon").classList.add("fa-volume-up");
    document.getElementById("icon").classList.remove("fa-times");
    document.getElementById("music_icon").style.color="";
    document.getElementById("icon").style.color="";
    
  }



