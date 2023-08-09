const emojies =['😊','😊','😍','😍','❤️','❤️','👍','👍','🤐','🤐','😓','😓','😭','😭','😡','😡'];

const shuf_emj=emojies.sort(()=>(Math.random()>.5)?2:-1);

for(var i=0;i<emojies.length;i++)
{
   let box=document.createElement('div')
   box.className='item';
   box.innerHTML =shuf_emj[i];

   box.onclick = function(){
    box.classList.add('boxopen');
    setTimeout(() => {
        if(document.querySelectorAll('.boxopen').length > 1){
            if(document.querySelectorAll('.boxopen')[0].innerHTML ==document.querySelectorAll('.boxopen')[1].innerHTML)
            {
                document.querySelectorAll('.boxopen')[0].classList.add('boxmatch');
                document.querySelectorAll('.boxopen')[1].classList.add('boxmatch');
                
                document.querySelectorAll('.boxopen')[0].classList.remove('boxopen');
                document.querySelectorAll('.boxopen')[1].classList.remove('boxopen');

                if(document.querySelectorAll('.boxmatch').length == emojies.length)
                {
                    alert("you win");
                }
            }
            else
            {
                document.querySelectorAll('.boxopen')[0].classList.remove('boxopen');
                document.querySelectorAll('.boxopen')[1].classList.remove('boxopen');
            }
        }
        
    }, 500);
   }
  document.querySelector('.boxes').appendChild(box);
}