const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'ChocoChips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}]

const cart = []

// SECTION Functions

function drawParlor(){
    // SECTION Draw Toppings
    let toppingElm = document.getElementById('topping-cards')
    let templateTopping = ''

    for(let i = 0; i < toppings.length; i++){
        const topping = toppings[i];
        templateTopping +=  `
                    <div class="col-md-3 my-3">
                    <button class="btn" onclick="addToCartTopping('${topping.name}')">
                        <div class="card product-card card-height">
                            <img class="parlor-card" src="${topping.image}"
                                alt="icecream">
                            <div class="card-body">
                                <div class="d-flex flex-row align-items-center justify-content-between">
                                    <p><b>${topping.name}</b></p>
                                    <p>$${topping.price}</p>
                                </div>
                                
                                    
                                </div>
                        </div>
                    </button>          
                    </div>
                    `
    }

    // SECTION Draw Cones
    let conesElm = document.getElementById('cone-cards')
    let templateCones = ''

    for(let i = 0; i < containers.length; i++){
        const cone = containers[i];
        templateCones +=  `
                <div class="col-md-3 my-3">
                    <button class="btn" title="Add To Cart" onclick="addToCartCones('${cone.name}')">
                        <div class="card product-card card-height">
                            <img class="parlor-card" src="${cone.image}"
                                alt="icecream">
                            <div class="card-body">
                                <div class="d-flex flex-row align-items-center justify-content-between">
                                    <p><b>${cone.name}</b></p>
                                    <p>$${cone.price}</p>
                                </div>                                
                            </div>
                        </div>
                    </button>    
                </div>
        
        `
    }

    // SECTION Draw IceCream
    let parlorElm = document.getElementById('item-cards-ic')
    let template = ''

    for(let i = 0; i < iceCream.length; i++){
        const iC = iceCream[i];
        template +=  `
                <div class="col-md-3 my-3">
                    <button class="btn" title="Add To Cart" onclick="addToCart('${iC.name}')">
                        <div class="card product-card card-height">
                            <img class="parlor-card" src="${iC.image}"
                                alt="icecream">
                            <div class="card-body">
                                <div class="d-flex flex-row align-items-center justify-content-between">
                                    <p><b>${iC.name}</b></p>
                                    <p>$${iC.price}</p>
                                </div>                                
                            </div>
                        </div>
                    </button>
                </div>
        `
    }

    toppingElm.innerHTML = templateTopping
    conesElm.innerHTML = templateCones
    parlorElm.innerHTML = template


    console.log('DRAW PARLOR')
}


function drawCart(){
    let cartElm = document.getElementById('cart')
    let cartTotalElm = document.getElementById('cart-total')

    let template =''

    cart.forEach(item => {
        template += `
    <div class="row">
        <div class="col-6">
            <h6>${item.name}</h6>
        </div>
        <div class="col-6">
            <h6>${item.quantity}</h6>
        </div>
    </div>`
    })
    let total = cartTotal()
    cartElm.innerHTML = template
    cartTotalElm.innerHTML = total
}

// SECTION ADD TO CART FUNCTIONS FOR EACH []
function addToCartTopping(name){
    let itemAdd = toppings.find(p => p.name == name)
    let productInCart = cart.find(p => p.name == name)

    if(productInCart){
        productInCart.quantity++
    }else{
        cart.push({
            name: itemAdd.name,
            image: itemAdd.image,
            price: itemAdd.price,
            quantity: 1
        })
    }

    drawCart()
}

function addToCartCones(name){
    let itemAdd = containers.find(p => p.name == name)
    let productInCart = cart.find(p => p.name == name)

    if(productInCart){
        productInCart.quantity++
    }else{
        cart.push({
            name: itemAdd.name,
            image: itemAdd.image,
            price: itemAdd.price,
            quantity: 1
        })
    }

    drawCart()
}

function addToCart(name){
    let itemAdd = iceCream.find(p => p.name == name)
    console.log(itemAdd)

    let productInCart = cart.find(p => p.name == name)

    if(productInCart){
        productInCart.quantity++
    }else{
        cart.push({
            name: itemAdd.name,
            image: itemAdd.image,
            price: itemAdd.price,
            quantity: 1
        })
        
    }
    
    drawCart()
}

function cartTotal(){
    let total = 0

    cart.forEach(p =>{
        total += p.price * p.quantity
    })

    return total
}

drawParlor()
