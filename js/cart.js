
const progress=document.querySelector('.progress');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const circles=document.querySelectorAll('.circle');
const label=document.querySelector('#label');
const shoppingCart=document.getElementById('shopping-cart');
const btn=document.querySelector('.btn');
const address=document.querySelector('.address');
const done=document.querySelector('.done');
const shoppingCartAll=document.querySelector('.shopping-cart-all');
const total_name=document.querySelector('.total-name');
const total=document.querySelector('.total');
const title=document.querySelector('#title');

const form=document.getElementById('form');


let numberPurchases=JSON.parse(localStorage.getItem("purchase")) || 1005;



let currentActive=1;

next.addEventListener('click',()=>{
  
  currentActive++;
  
  if(currentActive >circles.length){
    currentActive=circles.length;
    
  }
 
update();

})


prev.addEventListener('click',()=>{
  currentActive--;
  
  update();
 
 
});






function update(){
  
   if(currentActive===1){
   prev.disabled=true;
   for(let [idx,circle] of circles.entries()){
    if(idx<currentActive){
      circle.classList.add('active');
    }else{
      circle.classList.remove('active');
    }
   }const actives=document.querySelectorAll('.active');

   progress.style.width=((actives.length-1)/(circles.length-1)*100 +'%');

   

   next.innerHTML=`بعدی`;
    address.classList.add('hidden');
   generateCartItem();
   calculation();

   }else if(currentActive===circles.length ){

    for(let [idx,circle] of circles.entries()){
      if(idx<currentActive){
        circle.classList.add('active');
      }else{
        circle.classList.remove('active');
      }
     }
     const actives=document.querySelectorAll('.active');
    progress.style.width=((actives.length-1)/(circles.length-1)*100 +'%');
    
    sendEmail();

    let basket=[];
    localStorage.setItem("data",JSON.stringify(basket));
    prev.classList.add('hidden');
    next.classList.add('hidden');
   title.classList.add('hidden');
   total_name.classList.add('hidden');
    shoppingCart.classList.add('hidden');
    done.classList.remove('hidden');
    address.classList.add('hidden');
    numberPurchases = numberPurchases + 1;
    localStorage.setItem("purchase",JSON.stringify(numberPurchases));
    done.innerHTML=`
       <h1 class="receipt-1">سفارش شما ثبت شد</h1>
       <h3 class="receipt-2">کد رهگیری:  ${numberPurchases} </h3>
       <h3 class="receipt-3">با شما تماس خواهیم گرفت.</h3>
      <h4 class="receipt-4">باتشکر از خرید شما</h4>
     
          `;
   
   
   }else{


    for(let [idx,circle] of circles.entries()){
      if(idx<currentActive){
        circle.classList.add('active');
      }else{
        circle.classList.remove('active');
      }
     }
     const actives=document.querySelectorAll('.active');
    progress.style.width=((actives.length-1)/(circles.length-1)*100 +'%');

   prev.disabled=false;
   next.disabled=true;
   prev.classList.remove('hidden');
   next.classList.remove('hidden');
   title.classList.remove('hidden');
   total_name.classList.remove('hidden');
   done.classList.add('hidden');
   next.innerHTML=`ثبت سفارش`;
     address.classList.remove('hidden');
     shoppingCart.classList.remove('hidden');
  shoppingCart.innerHTML= basket.map((x)=>{
    let{id,item}=x; 
    let search=products.find((y)=>y.id === id) || [];
    return `
    
    <div class=" receipt-item " >  
      <div  class="title-price-item">
      
       <p id="p-title">${search.title}</p>
       <p id="p-item">${item}</p>
       <p id="p-price">${(search.price* item).toLocaleString()} تومان</p>

      </div>  
 </div>
    `}).join("");
    
    address.innerHTML= `
         <form id="form"  ">
            <h4>صورت حساب و حمل و نقل</h4>
            <div class="name-family"> <div id="name" >
               <h5>نام *</h5>
               <input  id="name-input" type="text" placeholder="" > 
            </div>
            <div id="family" >
              <h5>نام خانوادگی * </h5>
              <input id="family-input" type="text" placeholder="" >
            </div>
            
         </div>
         <div id="phone" >  <h5 >تلفن همراه  *</h5>
         <input type="tel" id="phone-input" >
         </div>
       <div id="address">
        <h5>آدرس شما در شهر تهران *</h5>
         <input id="address-input" type="text"  >
       </div>
       <div class="buttons">
         <button class="btn" id="submit" onclick="validateInputs()" type="button">ثبت نام</button>
       </div>

        </form>
           
         
`;
   }
   
}





function validateInputs(){   
  const nameInput=document.getElementById('name-input').value.trim();
  const familyInput=document.getElementById('family-input').value.trim();
  const phoneInput=document.getElementById('phone-input').value.trim();
  const deliveryAddressInput=document.getElementById('address-input').value.trim();

  const name=document.getElementById('name');
  const family=document.getElementById('family');
  const phone=document.getElementById('phone');
  const deliveryAddress=document.getElementById('address');
  

  
  
  if(nameInput === ''){
   
    name.classList.add('error');
    name.classList.remove('success');

    
  }else{
    name.classList.remove('error');
    name.classList.add('success');

    if(familyInput !== ''){
      if(phoneInput !== ''){
        if(deliveryAddressInput !== ''){
          next.disabled=false;

        }
      }
    }
    


  }

  if(familyInput === ''){
   
    family.classList.add('error');
    family.classList.remove('success');

    
  }else{
    family.classList.remove('error');
    family.classList.add('success');

  }

  if(phoneInput === ''){
   
    phone.classList.add('error');
    phone.classList.remove('success');

    
  }else{
    phone.classList.remove('error');
    phone.classList.add('success');
  }
  if(deliveryAddressInput === ''){
   
    deliveryAddress.classList.add('error');
    deliveryAddress.classList.remove('success');

    
  }else{
    deliveryAddress.classList.remove('error');
    deliveryAddress.classList.add('success');
  }
  
  }





let basket=JSON.parse(localStorage.getItem("data")) || [];
let calculation=()=>{
  let cartIcon=document.querySelector(".quantity");
  cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
   

 }

 calculation();

let generateCartItem=()=>{
  if(basket.length !== 0){
    return (
     

      shoppingCart.innerHTML= basket.map((x)=>{
      let{id,item}=x; 
      let search=products.find((y)=>y.id === id) || [];
      title.classList.remove('hidden');
      total.classList.remove('hidden');
      return `
      
      <div class=" cart-item " >
      <img width="100" src=${search.image} alt=""/>
      <div class="details">
      <div  class="title-price-x">
        <h4>
         <p>${search.title}</p>
         
         <div class="cart-buttons">

         <i onclick="increment(${id})" class="bi bi-plus"></i>
         <div id=${id} >${item}</div>
         <i  onclick="decrement(${id})" class="bi bi-dash"></i>
         </div>

         <p>${search.price.toLocaleString()} تومان</p>
        </h4>  
        <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
      </div>  

      </div>
      
   </div>
      `
     
    }).join(""));
    
  }else{
    prev.classList.add('hidden');
    next.classList.add('hidden');
    
    shoppingCart.remove();
    shoppingCartAll.innerHTML= `
     <div class="empty">سبد خرید شما در حال حاضر خالی است.</div>
     <a href="batteries.html"><button class="btn" id="store">بازگشت به فروشگاه</button></a>
    `;
   
  }
}

  generateCartItem();





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
   generateCartItem();
   
   updateQuantity(selectedItem);
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
  
  
   updateQuantity(selectedItem);

   basket= basket.filter((x)=>x.item !== 0);
   
   generateCartItem();
   
   localStorage.setItem("data",JSON.stringify(basket));
 };
 let updateQuantity = (id) => {
     
  let search=basket.find((x)=> x.id === id); 
  
  document.getElementById(id).innerHTML= search.item; 
  calculation();
  totalAmount();
};

let removeItem=(id)=>{
  let selectedItem=id;
  basket= basket.filter((x)=> x.id !== selectedItem);
  generateCartItem();
  totalAmount();
  calculation();
  localStorage.setItem("data",JSON.stringify(basket));
  
};

let totalAmount=()=>{
  if(basket.length !== 0){
    let amount=basket.map((x)=>{
      let{item,id}=x;
      let search=products.find((y)=>y.id === id) || [];
      return item * search.price;
    })
    .reduce((x,y)=> x + y , 0);
    label.innerHTML= `
      <h3 class="total">${amount.toLocaleString()} تومان </h3>
      
    `;
  
  }else return;
  
};

totalAmount();


function sendEmail(){
  
  basket.map((x)=>{
    let{id,item}=x; 
    let search=products.find((y)=>y.id === id) || [];
    let battery=search.title;
    let price=search.price* item.toLocaleString();
    let items=item;
    let params ={
      name:document.getElementById('name-input').value,
      family:document.getElementById('family-input'),
      phone:document.getElementById('phone-input').value,
      address:document.getElementById('address-input').value,
      title:battery,
      item:items,
      price:price
    };

    const serviceID="service_ysh5f3d";
    const templateID="template_zkhta54";


  emailjs.send(serviceID,templateID,params);

  })
    
 

    
};

