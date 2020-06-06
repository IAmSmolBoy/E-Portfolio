const achievements=document.getElementsByClassName('achievements')

function Achievements(){
    for(i=1;i<achievements.length;i++){
        if(achievements[i-1].style.display==='none'){
            achievements[i-1].style.display='block'
        }
        else{
            achievements[i-1].style.display='none'
        }
    }
}