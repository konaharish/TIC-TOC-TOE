let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('#reset');
let newgame=document.querySelector('#newgame');
let msgcontainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');
let hide=document.querySelector('.hide');
let turn=true;
let winner='';
let count=0;
const winpatterns=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if (turn){
            box.innerText='0';
            turn=false;
            
        }
        else{
            box.innerText='x';
            turn=true;
        }
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count===9 && !iswinner){
            gamedraw();
        }
    });
});
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        
        if(pos1val !='' && pos2val !='' && pos3val !=''){
            if(pos1val===pos2val && pos2val===pos3val){
                showwinner(pos1val);
                return true;
            }
        }
         
    }
};
const showwinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove('hide');
    //hide.style.display='block'; 
    disableboxes();  

};
const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const resetgame=()=>{
    turn=true;
    count=0
    anableboxes();
    msgcontainer.classList.add('hide');
    //msgcontainer.style.display='none';

};
const anableboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText='';
    }
};
const gamedraw=()=>{
    msg.innerText='Game Was A Draw';
    msgcontainer.classList.remove('hide');
    disableboxes();
};
newgame.addEventListener('click',resetgame);
reset.addEventListener('click',resetgame);
