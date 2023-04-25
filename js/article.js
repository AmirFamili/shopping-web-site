const boxes=document.querySelectorAll('.box'); 
const title=document.getElementById('title').textContent;
const articleImg=document.getElementById('article-img').src;  
const paragraph=document.getElementById('important').textContent; 

window.addEventListener('scroll',() =>{
    const windowBottom = window.innerHeight /1.3;

    boxes.forEach(box=>{
        const boxTop =box.getBoundingClientRect().top; 
        
        if(boxTop<windowBottom){
            box.classList.add('show');
        }
    })
    
   
})




// function getArticle(){
   
//    localStorage.setItem("title", title);
//    localStorage.setItem("img",articleImg);
//    localStorage.setItem("paragraph",paragraph);
   
// }
// getArticle();