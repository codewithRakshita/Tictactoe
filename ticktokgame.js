let box=document.querySelectorAll(".b1");
let reset=document.querySelector(".reset");
let newgameBtn=document.querySelector("#new");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let turnO=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [7,4,6],
];

const resetgame=()=>{
    turnO=true;
        enableboxes();
        msgcontainer.classList.add("hide");
};

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
        box.innerText="O";
        box.classList.add("box-o"); 
        box.classList.remove("box-x");
        turnO=false;
}else{
    box.innerText="X";
    turnO=true;
    box.classList.remove("box-o"); 
    box.classList.add("box-x");
}
box.disabled=true;
checkwinner();
});  
});
const disableboxes=()=>{
    for(let boxes of box){
        boxes.disabled=true;
    }
};
const enableboxes=()=>{
    for(let boxes of box){
        boxes.disabled=false;
        boxes.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const checkwinner=()=>{
    for(let pattern of winpatterns){
                   let pos1= box[pattern[0]].innerText;
                   let pos2= box[pattern[1]].innerText;
                   let pos3=box[pattern[2]].innerText;
                    if(pos1!="" && pos2!="" && pos3!=""){
                        if(pos1===pos2 && pos2===pos3){
                            showWinner(pos1);  
                        }
                    }
    }
};
newgameBtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);