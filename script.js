const achievements=document.getElementsByClassName('achievements')
const Me=document.getElementsByClassName('AboutMe')

function AboutMe(){
    for(i=1;i<Me.length+1;i++){
        console.log(Me[i-1].style.display)
        if(Me[i-1].style.display==='none'){
            Me[i-1].style.display='block'
        }
        else{
            Me[i-1].style.display='none'
        }
    }
}
function Achievements(){
    for(i=1;i<achievements.length+1;i++){
        console.log(achievements[i-1].style.display)
        if(achievements[i-1].style.display==='none'){
            achievements[i-1].style.display='block'
        }
        else{
            achievements[i-1].style.display='none'
        }
    }
}