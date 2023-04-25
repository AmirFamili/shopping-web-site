const header_bottom=document.getElementById('header-bottom');
const header_top=document.getElementById('header-up');

const button_buy_with_model=document.getElementById('but-buy-with-model');
const button_articles=document.getElementById('but-articles');
const button_about_allopower=document.getElementById('but-about-allopower');
const sticky = header_bottom.offsetTop;

const menuButton=document.querySelector('#menu-button');






  menuButton.addEventListener("click",()=>{

    window.location.reload();
  })
 





window.addEventListener("resize",()=>{
 
  if(window.innerWidth <= "770"){
          
    header_top.classList.add("sticky"); 
    starter.style.marginTop="80px" ;

   }else{
    header_top.classList.remove("sticky");
    starter.style.marginTop="0px" ;

   }
 })





window.onscroll=()=>{

  if(window.innerWidth <= "770"){
    
    header_top.classList.add("sticky"); 
       
   }else if (window.pageYOffset > sticky) {
          
     header_bottom.classList.add("sticky"); 
      if(window.innerWidth > "770"){
      header_top.classList.remove("sticky");
       
        }
         
       } else {
         header_bottom.classList.remove("sticky");
         
       }
 }






button_buy_with_model.addEventListener('click',()=>{
  header_bottom.style.marginBottom="-50px";

})

button_about_allopower.addEventListener('click',()=>{
  header_bottom.style.marginBottom="-100px";

})
button_articles.addEventListener('click',()=>{
  header_bottom.style.marginBottom="-120px";
  
})

let basket=JSON.parse(localStorage.getItem("data")) || [];

let calculation=()=>{
  let cartIcon=document.querySelector(".quantity");
  cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
   

 }

 calculation();



  const articleImages=document.getElementById('article-image');
  const paragraphs=document.getElementById('article-paragragh');
  const titles=document.getElementById('article-title');
  const articles=document.getElementById('articles');
  const shortArticles=document.querySelector('#shortArticles');


  let articleList=()=>{
   
  
    let num=13;
    return (articles.innerHTML=articlesData.map((x)=>{
      let {image,title,paragraph}=x;
      num -= 1;
      return `
      <div id="box-article">
      <img id="article-image" src="${image}">
      <h4 id="article-title">${title}</h4>
      <p id="article-paragragh">${paragraph} </p>
      <p id="btn-article"><a href="article${num}.html">خواندن مقاله --></a></p>
   </div>

      `
      
    }).join(""))
  };
  
  articleList();



  let articletitle=()=>{
    return (shortArticles.innerHTML=threeLastOneArticle.map((x)=>{
      let {title,link}=x;
      
      return `
      <p><a href="${link}">${title}<a></p>
      
      `
    }).join(""))
  };

  articletitle();