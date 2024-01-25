 let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genComputerchoice=() =>{
    const options=["rock","paper","scissor"];
   const  randix =Math.floor( Math.random() * 3);
   return options[randix];
    
}
const drawgame=() =>{
    console.log("Game was Draw");
    msg.innerText="Game was draw,Play again."
    msg.style.backgroundColor="#081b31"
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`YOU WIN! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else {
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`YOU LOSE. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
console.log("user choice=",userchoice);
//generate computer choice 
const compchoice=genComputerchoice();
console.log("computer choice =",compchoice);

if(userchoice===compchoice)
{
    drawgame();
}
else{
    let userwin =true;
    if(userchoice==="rock"){
        //scissors,paper
    userwin=compchoice==="paper"?false:true;
    }
    else if(userchoice==="paper"){
        //rock,scissors
      userwin=compchoice==="scissor"?false:true;
    }
    else{
        //rock,paper
        userwin=compchoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
}

}



choices.forEach((choice)=>{

    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});