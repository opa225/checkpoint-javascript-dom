let carts = document.querySelectorAll('.add-cart');



  let products = [
    {
        name: 'montre rose 1',
        tag:'montrerose1',
        price: 300,
        incart: 0
    },
    {
        name: 'montre rose 2',
        tag:'montrerose2',
        price: 500,
        incart: 0
    },    
    {
        name: 'montre noire',
        tag:'montrenoire',
        price: 800,
        incart: 0
    },
    {
        name: 'montre noire2',
        tag:'montrenoie2',
        price: 400,
        incart: 0
    },
    ];

    for(let i=0; i < carts.length; i++ ) {
      carts[i].addEventListener('click',() => {
         cartNumbers(products[i]);
         totalcost(products[i]);
      
      })
  }
  function onLoadcartNumbers(){
      let productNumbers = localStorage.getItem('cartNumbers');
  
      if(productNumbers){
          document.querySelector('.cart span').textContent = productNumbers
      }
  }
  function cartNumbers(product){
      console.log("je suis cartNumbers");
      let productNumbers = localStorage.getItem('cartNumbers');
      productNumbers = parseInt(productNumbers);
      
  if(productNumbers){
      localStorage.setItem('cartNumbers', productNumbers + 1);
      document.querySelector('.cart span').textContent = productNumbers +1;
  }else{
      localStorage.setItem('cartNumbers', 1);
      document.querySelector('.cart span').textContent = 1;
  }
  setItem(products)
  }
  function setItem(products){
  
     let cartItems = localStorage.getItem('productsInCart');
     cartItems = JSON.parse(cartItems);
        
  
  if (cartItems != null){
  
     if(cartItems[products.tag] == undefined){
         cartItems = {
             ...cartItems,
             [products.tag]:products
         }
     }
  
      cartItems[products.tag].incart += 1 ;
  }else{
      products.incart = 1 ;
      cartItems = {
         [products.tag]: products 
  }
  
  }
  
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  
  
  }
  
  function totalcost(products){
      let cartcost = localStorage.getItem ('totalcost');
      cartcost = JSON.parse(cartcost);
  if (cartcost != null){
      cartcost = parseInt(cartcost);
      localStorage.setItem("totalcost", cartcost + products.price);
  }else{
      localStorage.setItem("totalcost", products.price);
  } 
   

   }   
  onLoadcartNumbers();