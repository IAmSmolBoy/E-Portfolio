const achievements=document.getElementById('achievements')
const Me=document.getElementsByClassName('AboutMe')
const Content=document.getElementById("content")
const Myself=document.getElementById('Myself')








function AboutMe(){
    for(i=1;i<=Me.length;i++){
        if(Me[i-1].style.visibility==='hidden'){
            Me[i-1].style.visibility='visible'
            Me[i-1].style.animationTimingFunction='linear'
            Me[i-1].style.animationDuration='1s'
            Me[i-1].style.animationName='SizeUp'
        }
        else{
            Me[i-1].style.visibility='hidden'
        }
    }
}








