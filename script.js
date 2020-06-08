const achievements=document.getElementById('achievements')
const Me=document.getElementsByClassName('AboutMe')
const Content=document.getElementById("content")
const Myself=document.getElementById('Myself')








function AboutMe(){
    for(i=1;i<=Me.length;i++){
        if(Me[i-1].style.display==='none'){
            Me[i-1].style.display='block'
            achievements.style.animation='Achievements 1s linear 1'
            Myself.style.animation='Myself 1s linear 1'
        }
        else{
            Me[i-1].style.display='none'
        }
    }
}








