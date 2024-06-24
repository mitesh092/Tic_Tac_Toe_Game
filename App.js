let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let turn0 = true; // playerX // playerY

let new_game_btn = document.querySelector("#new-btn")
let msgConatiner = document.querySelector(".Winn-massge");

let msg  = document.querySelector("#winner-id");

const Win_pattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText = "O"
            box.classList.add("player-X");
            turn0 = false;
        }else{
            box.innerText = "X";
            box.classList.add("player-Y");
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const enable_boxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
} 

const reset_NEW_btn = () => {
    turn0 = true;
    enable_boxes();
    msgConatiner.classList.add("hide");
};
const disabled_btn = () => {
    for(box of boxes){
        box.disabled = true;
    }
};
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgConatiner.classList.remove("hide");
    disabled_btn();
    
};

const DrawMatch = () => {
    msgConatiner.classList.remove("hide");
    msg.innerText = "Opps ! Match Draw";

};

const checkWinner = () =>{  
    let count = 0;
    for(let ptn of Win_pattern){
        let pos1 = boxes[ptn[0]].innerText;
        let pos2 = boxes[ptn[1]].innerText;
        let pos3 = boxes[ptn[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }else{
                count++;
            }
            
        }
    }
    if(count >= 8){
        DrawMatch();

    }
    
};

new_game_btn.addEventListener("click", reset_NEW_btn);
reset_btn.addEventListener("click", reset_NEW_btn);