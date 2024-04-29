
//menu hamburguer
const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener('click', () => {
    navbar.classList.toggle("show-menu");
});

//carrinho

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const spanItensCart = document.querySelector('.itens-cart');
const btnAddItemCart = document.querySelector('.add-item-cart');
let totItemCart = parseInt(spanItensCart.textContent);

btnAddItemCart.addEventListener('click', function() {
  totItemCart++;
  spanItensCart.textContent = totItemCart;
});
