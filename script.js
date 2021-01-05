
window.onload = function(){
  let playerPlay = document.getElementById('playerPlay');
  playerPlay.onclick = function(){
    if(playerPlay.className === 'player-play'){
      playerPlay.className ='player-stop';
   }else{
      playerPlay.className='player-play';  
   }
  };
  
let playerPlaySound = document.getElementById('playerSoundOn');
  playerPlaySound.onclick = function(){
    if(playerPlaySound.className === 'player-sound-on'){
       playerPlaySound.className = 'player-sound-off';
    }else{
       playerPlaySound.className = 'player-sound-on';
    }
};


  let menuSave = document.getElementById('menuSave');
  let menuSaves = document.getElementById('menuSaves');
  menuSave.onclick=function(){
  if(menuSaves.className==='menu-saves'){
     menuSaves.className='menu-saves-style';
  }else{
     menuSaves.className='menu-saves';
  }
}
};

window.onscroll = function(){
let playerBox = document.getElementById('playerBox');
if(document.body.scrollTop > 200 ||document.documentElement.scrollTop > 200){
     playerBox.className = 'player__box-fixed';
}else{
     playerBox.className = 'player-box';
}
};

