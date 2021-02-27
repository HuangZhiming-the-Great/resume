const businessCards = document.querySelectorAll(".business-card");

window.onload=()=>{
  for(let i=1;i<businessCards.length;i++){
    businessCards[i].style.display="none";
  }  
}

let clickedTime=0;

for(let i=0;i<businessCards.length;i++){
  businessCards[i].addEventListener("click",()=>{
    businessCards[clickedTime].style.display="none";
    
    clickedTime+=1;
    if(clickedTime == businessCards.length){
      clickedTime=0;
    }
    
    businessCards[clickedTime].style.display="block";
  })
}