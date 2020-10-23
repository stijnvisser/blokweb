/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/*bron: https://www.youtube.com/watch?v=k8yJCeuP6I8*/

let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Hardloopschoen',
        tag: 'Hardloopschoen',
        price: 15,
        inCart: 0
    },
    {
        name: 'Hardloopschoen',
        tag: 'Hardloopschoen',
        price: 15,
        inCart: 0
    },
    {
        name: 'Hardloopschoen',
        tag: 'Hardloopschoen',
        price: 15,
        inCart: 0
    },
    {
        name: 'Hardloopschoen',
        tag: 'Hardloopschoen',
        price: 15,
        inCart: 0
    },
    {
        name: 'Hardloopschoen',
        tag: 'Hardloopschoen',
        price: 15,
        inCart: 0
    },
    {
        name: 'Hardloopschoen',
        tag: 'Hardloopschoen',
        price: 15,
        inCart: 0
    },
    {
        name: 'Hardloopschoen',
        tag: 'Hardloopschoen',
        price: 15,
        inCart: 0
    },
    {
        name: 'Hardloopschoen',
        tag: 'Hardloopschoen',
        price: 15,
        inCart: 0
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

function onloadCardNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
    if (productNumbers) {
        document.querySelector('.cart img').style ="2em";
    }

}


function cartNumbers(product) {
    console.log("the product clicked is", product)
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let productNumbers = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null) {
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    product.inCart = 1;

    cartItems = {
        [product.tag]: product
    }

    local.setItem("productsInCart", JSON.stringify
    (cartItems));
}

onloadCardNumbers();
