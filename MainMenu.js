const achievements=document.getElementById('achievements')
const Me=document.getElementsByClassName('AboutMe')
const Content=document.getElementById("content")
const Myself=document.getElementById('Myself')








function AboutMe(){
    for(i=1;i<=Me.length;i++){
        if(Me[i-1].style.visibility==='hidden'){
            Me[i-1].style.visibility='visible'
            Me[i-1].style.animation='SizeUp 1s linear'
        }
        else{
            Me[i-1].style.animation=''
            Me[i-1].style.visibility='hidden'
        }
    }
}








