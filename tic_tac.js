let playertext =document.getElementById('playertext');
let reset =document.getElementById('reset');
let btns =Array.from(document.getElementsByClassName('btns'));
let winingindicator =getComputedStyle(document.body).getPropertyValue('--winning-blocks');


const o_text ="O";
const x_text ="X";

let currentplayer = x_text;
let spaces =Array(9).fill(null);

const startgame =()=>{
    btns.forEach(box => box.addEventListener('click',boxclicked) )
}

function boxclicked(e)
{
console.log(e.target);

const id =e.target.id;

if(!spaces[id])
{
    spaces[id]=currentplayer;
    e.target.innerHTML=`<h3>${currentplayer}<h3/>`;
    if(playerhaswon()!==false)
    {
       playertext.innerText =`${currentplayer} Has won!`

       let winningblock = playerhaswon();
       winningblock.map(box => btns[box].style.backgroundColor = winingindicator)
       console.log(winningblock);

    }
    currentplayer=currentplayer==x_text?o_text:x_text;
}
}

const winningcombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerhaswon()
{
    for(const condition of winningcombos)
    {
        let [a,b,c]=condition;
        if(spaces[a]&& spaces[a]==spaces[b] && spaces[a]==spaces[c])
        {
        return [a,b,c];
        }
       
    }
    return false;
}

reset.addEventListener('click',()=>{
    spaces.fill(null);

    btns.forEach(box=>{
        box.innerText=' ';
        box.style.backgroundColor='';
    })
    playertext.innerText='X Will start';
    currentplayer=x_text;
})


startgame();