let shop = document.getElementById("shop") ;

let shopItemsData = [{
    id : "id",
     name : "Casual Jacket",
     price : 100,
      desc : "Lorem ipsum dolor sit amet",
      img : "images/img-1.jpg" 
},
{id : "id1",
name : "Black Suit",
price : 350,
 desc : "Lorem ipsum dolor sit amet",
 img : "images/img-2.jpg"},
 {
    id : "id2",
    name : "Oversize Longsleeve",
    price : 70,
     desc : "Lorem ipsum dolor sit amet",
     img : "images/img-3.jpg"
 },
 {
    id : "id3",
    name : "Baggy Y2K Jeans",
    price : 120,
     desc : "Lorem ipsum dolor sit amet",
     img : "images/img-4.jpg"
 },
];




 let basket = [{id: "id1",item : 1}];

let generateShop = () => { 
    
    return  (shop.innerHTML = shopItemsData.map ((x)=> {
        let {id,name,price,desc,img} = x;
    return` 
    <div id=product-id-${id} class = "item">
    <img width="220" src=${img} alt="">
    <div class="details">
        <h3> ${name} </h3>
        <p> ${desc}</p>
        <div class="price-quantity">
            <h2> ${price}</h2>
            <div class="buttons">
                <i  onclick="increment()" class="bi bi-plus-lg"></i>
                <div id=${id} class="quantity"> 0 </div>
                <i onclick="decrement()" class="bi bi-dash-lg"></i>
            </div>
        </div>
    </div>
</div>
`;}).join(""));
};
generateShop()
let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefined) {
        basket.push({
            id:selectedItem.id,
            item:1, 
        });

    } else {
        search.item += 1;
    }
    localStorage.setItem("data",JSON.stringify(basket));
//console.log(basket);
update (selectedItem.id);
};
let decrement = (id) => { 
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search.item === 0) return ;
        else {
        search.item -= 1;
    }
//console.log(basket);
update (selectedItem.id);
    };
let update = (id) => {
    let search = basket.find ((x)=> x.id === id)
    //console.log(search.item);
    document.getElementById(id).innerHTML = search.item; 
    calculation()
};
let calculation = () => {
    let cartIcon = document.getElementById ("cartAmount")
    console.log (basket.map ((x)=> x.item).reduce  ((x,y)=>x+y,0));
};