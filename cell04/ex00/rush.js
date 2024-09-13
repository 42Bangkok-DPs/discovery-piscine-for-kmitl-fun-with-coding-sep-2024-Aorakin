tailwind.config = {
     theme: {
       extend: {
         screens: {
              'sm': '390px',
              'md': '960px',
              'lg': '1440px',
         },
       }
     }
   }

    function navigateToPage() {
        window.location.href = './portfolio.html';
    }
 document.addEventListener('DOMContentLoaded', () => {
 const cardPon = document.getElementById('pon-card');
 const img = document.getElementById('Pon');
 const OakImg = document.getElementById('Oak')
 const cardOak = document.getElementById('oak-card')
 const BgCNX = document.getElementById('cnx')
 if (cardPon && img) { // Ensure both elements exist
   cardPon.addEventListener('mouseover', () => {
     img.classList.remove('invisible');
     img.classList.add('showImage')
     
   });

   cardPon.addEventListener('mouseout', () => {
     img.classList.add('invisible');
     img.classList.remove('showImage');
    
   });
 } 
 else {
   console.error('Element(s) not found');
 }
 if (OakImg&&cardOak){
    cardOak.addEventListener('mouseover', () => {
     OakImg.classList.remove('invisible');
     OakImg.classList.add('showImage')
   });

   cardOak.addEventListener('mouseout', () => {
     OakImg.classList.add('invisible');
     OakImg.classList.remove('showImage');
   });
 }
 else {
   console.error('Element(s) not found');
 }
});
    