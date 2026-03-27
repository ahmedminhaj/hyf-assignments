console.log("Script loaded");

const products = getAvailableProducts();

// This should create the ul and the li's with the individual products details
function renderProducts(products) {

  const productList = document.querySelector("#product-list");

  productList.innerHTML = "";

  products.forEach(product => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${product.name}</strong><br>
      Price: ${product.price}<br>
      Rating: ${product.rating}/10
    `;

    productList.appendChild(li);
  });
}

renderProducts(products); 
