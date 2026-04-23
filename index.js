const products = [
    {ürün: "iphone 13", fiyat: 35000, satici: "Apple", resim: "./iphone13.jpg" },
    {ürün: "iphone 17", fiyat: 80000, satici: "Apple", resim: "./iphone17.jpg" },
    {ürün: "iphone 15", fiyat: 50000, satici: "Apple", resim: "./iphone 15.jpg" },
    {ürün: "iphone 15", fiyat: 50000, satici: "Apple", resim: "./iphone 15.jpg" },
]

const productList = document.getElementById("products-list");

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<img src="${product.resim}"/>
    <h3>${product.ürün}</h3>
    <p>${product.fiyat}</p>
    <p>${product.satici}</p>
    <button class="ürünbtn" type="submit">Sepete Ekle</button>
    `
    productList.appendChild(card)
})

