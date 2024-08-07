
document.addEventListener('DOMContentLoaded',()=>{

    const plus=document.querySelector(".plus");
    const minus=document.querySelector(".minus");
    const quantity=document.querySelector(".quantity");
    const cartCount=document.querySelector(".cart-count")
    const addToCart=document.querySelector("#addToCart")
    const alert=document.querySelector(".alert-success");
    const price=parseFloat(document.querySelector(".price").value);//fiyatı alıyoruz


    //artı butonu işleyişi
    plus.addEventListener("click",()=>{
        quantity.value=parseInt(quantity.value)+1;
    })

    //- butonunun işleyişi
    minus.addEventListener("click",()=>{
        if(quantity.value>0)
    {
        quantity.value=parseInt(quantity.value)-1;
    }
    })


    //Sepete ekle butonunun işleyişi
    addToCart.addEventListener("click",()=>{

        //sepetteki mevcut sayıyı al
        let cartCounValue=parseInt(cartCount.textContent) //gönderdiğimiz parametreyi tam sayıya çevirir.

        //quantity değerini al
        let addedQuantity=parseInt(quantity.value);

        cartCount.textContent=cartCounValue+addedQuantity//bir html öğesindeki metin içeriğini almak veya ayarlamak için kullanılır.
        showAlert();

        quantity.value=0;
    });

    function showAlert(){
        if(alert.style.display==='none' || alert.style.display === ''){
            alert.style.display='block';
        }
        setTimeout(()=>{
            alert.style.display='none';
        },2000);
      }

    //Yerel depolamadaki sepeti getiren fonksiyon
    function getCartsFromStorage() {
        return JSON.parse(localStorage.getItem('carts')) || {};
    }
    
    //Sepeti yerel depolamaya ekleyen fonksiyon ve günceller
    function updateCartStorage(quantity, price) {
        const carts = getCartsFromStorage();
        const productId = 'product_1'; // Ürün ID'sini ayarlayın

        if (!carts[productId]) {
            carts[productId] = {
                quantity: 0,
                price: price
            };
        }
        
        carts[productId].quantity += quantity;

        // Sepeti yerel depolamaya kaydet
        localStorage.setItem('carts', JSON.stringify(carts));
    }

});
