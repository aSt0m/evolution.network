const accordion = document.getElementsByClassName("contentBx");


for(i = 0; i<accordion.length; i++){
  accordion[i].addEventListener('click',function(){
    this.classList.toggle('active')
    
  })
}



const tabTitle = document.querySelectorAll(".tabs__title");
const tabBloque = document.querySelectorAll(".tabs__bloque");


tabTitle.forEach((element,i)=>{
  tabBloque[0].classList.add("active");
  tabTitle[0].classList.add("active");
  tabTitle[i].addEventListener("click",()=>{

    tabTitle.forEach((element,i)=> {
      tabTitle[i].classList.remove("active")
      tabBloque[i].classList.remove("active");
      
    })
    
    tabTitle[i].classList.add("active");
    tabBloque[i].classList.add("active");
  })
})