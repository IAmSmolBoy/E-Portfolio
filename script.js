const achievements=document.getElementsByClassName('achievements')
const Me=document.getElementsByClassName('AboutMe')
const Content=document.getElementById("content")








function AboutMe(){
    for(i=1;i<=Me.length;i++){
        if(Me[i-1].style.display==='none'){
            Me[i-1].style.display='block'
        }
        else{
            Me[i-1].style.display='none'
        }
    }
}







