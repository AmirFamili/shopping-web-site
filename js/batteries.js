const batterySearch=document.getElementById('ty-search');

const battery=document.querySelectorAll('.battery');

const batteries=document.querySelector('#batteries');


/**
 * !search products
 **/

  batterySearch.addEventListener('keyup', e =>{

   let currentValue= e.target.value.toLowerCase();

   let titleBatterys=document.querySelectorAll('#h1-bettery');
   titleBatterys.forEach(title =>{
     if(title.textContent.toLowerCase().includes(currentValue)){
     title.parentNode.style.display='block';
     }else{
     title.parentNode.style.display='none';
     }
   });

  });
 


/**
 * ! generate shop
 **/

  let basket=JSON.parse(localStorage.getItem("data")) || [];

  let generateShop=()=>{
    return (batteries.innerHTML=products.map((x)=>{
      let {id,category,amper,image,title,price}=x;
      let search=basket.find((x)=> x.id === id) || [];
      return `
       <div id=product-id-${id} class="battery ${category} ${amper}">
          <a href="#"><img id="bat-img" src="${image}" ></a>
          <h6>سپاهان باتری</h6>
          <h1 id="h1-bettery">${title}</h1>
          <h3 id="price" class="${price}"> ${price.toLocaleString()} تومان</h3>
          <button onclick="increment(${id})" class="button-battery" >افزودن به سبد خرید</button>
          <div id=${id} class="quantit hidden">${search.item === undefined? 0: search.item}</div>
       </div>   
      `
    }).join(""))
  };
  
  generateShop();
  
 /**
 * ! increment and decrement product
 **/


  
    let increment = (id) => {
     let selectedItem = id;
     
        let search=basket.find((x)=> x.id === selectedItem);
  
  
        if(search === undefined){
      basket.push({
        id:selectedItem,
        item:1,
  
      });
      }else{
        search.item += 1 ;
      }
      
       update(selectedItem);
       localStorage.setItem("data",JSON.stringify(basket));
    };
    let decrement = (id) => {
      let selectedItem = id;
     
        let search=basket.find((x)=> x.id === selectedItem);
      if(search === undefined)return
      else if(search.item === 0) return;
       else{
        search.item -= 1 ;
      }
     
     
      update(selectedItem);
  
      basket= basket.filter((x)=>x.item !== 0);
      localStorage.setItem("data",JSON.stringify(basket));
    };
    let update = (id) => {
     
      let search=basket.find((x)=> x.id === id); 
      
      document.getElementById(id).innerHTML= search.item; 
       calculation();
    };
   
   let calculation=()=>{
    let cartIcon=document.querySelector(".quantity");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
     
  
   }
  
  
   calculation();




 /**
 * !filter price
 **/

 const inputMin=document.querySelector('.input-min');
 const inputMax=document.querySelector('.input-max');
 const rangeInput=document.querySelectorAll(".range-input input");
 const progressRange=document.querySelector('.min-max-range .progress');
 const price=document.querySelectorAll('.min-max input');
 
  /**
 * !problem
 **/ 
//  function filterProductPrice(){
  
//    const batteryPrice=document.querySelectorAll('#price');
 
   
//    batteryPrice.forEach(element=> {

//       if(element.textContent > inputMin.value){
//         console.log(true);
//         element.parentNode.style.display='none';
//       }else{
//         console.log(false);
//         element.parentNode.style.display='block';
//       }
      
//      })
   
//  };

 let priceGap=1000;

 rangeInput.forEach(input=>{
  input.addEventListener("input",(e)=>{

    let minVal=parseInt(rangeInput[0].value), maxVal=parseInt(rangeInput[1].value);

    if(maxVal-minVal<priceGap){
      if(e.target.class=== "range-min"){
        rangeInput[0].value=maxVal-priceGap;
      }else{
        rangeInput[1].value=minVal+priceGap;
      }
      

    }else{
      price[1].value=minVal;
      price[0].value=maxVal;
      progressRange.style.left =((minVal/rangeInput[0].max) * 100)-11  + "%";
      progressRange.style.right=(100-(maxVal/rangeInput[1].max)*100)+5 + "%";
    }
   
      });
  });


/**
 * !filter brand
 **/
 

 function filterProduct(value){
  
  
  const battery=document.querySelectorAll('.battery');
  
  battery.forEach(element=> {
   
    if(value== 'all'){
      element.classList.remove('hidden');
    }else
      if(element.className.toLowerCase().includes(value)){
       element.classList.remove('hidden');
         
      }else{
        element.classList.add('hidden');
      }
     })
    
    
  };

 
 