const cart = ['shoes', 'pants', 'watches'];

// callback bad part
// api.createOrder(cart, function() {

//     api.proceedToPayments(function() {

//         api.showOrderSummary(function() {

//             api.updateWallet()

//         })

//     })

// })

// whenever we chaining the promise we need to return the data from one chain to down 




// const JSON_API = 'https://jsonplaceholder.typicode.com/users';
// Promise is an object which represents the eventual compliction of an async operation.
// const users = fetch(JSON_API);

// console.log(users)

// createOrder(cart)
//     .then((orderId) => proceedToPayments(orderId))
//     .then((paymentInfo) => showOrderSummary(paymentInfo))
//     .then((orderDetails) => updateWalletBalance(orderDetails));

//Producer

// function createOrder(cart) {
    
//     const pr = new Promise(function(resolve, reject) {
//         // createOrder
//         // validateCart
//         // orderId
//         if(!validateCart(cart)) {
//             const err = new Error('cart is not valid');
//             reject(err);
//         }
//         // logic for createOrder
//         const orderId = '12345';
//         if(orderId) {
//             setTimeout(function(){
//                 resolve(orderId)
//                 // console.log(promise);
//             }, 5000);
//         }
//     })
//     // console.log(pr)
//     return pr;
// }

// function proceedToPayment(orderId) {
//     // some logic
//     return new Promise(function(resolve, reject) {
//         resolve("Proceed to payments")
//     })
// }

// function validateCart(cart) {
//     return true;
// }
// createOrder(cart)
//     .then(function(orderId) {
//         console.log(orderId);
//         return orderId
//     })
//     // .catch(function(err) {
//     //     alert(err.message);
//     // })
//     .then(function(orderId) {
//         return proceedToPayment(orderId)
//     })
//     .then(function(paymentInfo) {
//         console.log(paymentInfo)
//     })
//     .catch(function(err) {
//         alert(err.message);
//     });

// function createOrder(cart) {
//     // new promise
//     const pr = new Promise((resolve, reject) => {
//         if(!validateCart(cart)) {
//             const err = new Error('cart is not validate');
//             reject(err)
//         }
//         const orderId = '12345'
//         if(orderId) {
//             setTimeout((orderId) => {
//                 resolve(orderId);
                
//             }, 0);
//         }
//     })
//     console.log(pr)
// }

// function validateCart(cart) {
//     return true;
// }

// createOrder(cart).then(function(orderId){
//         console.log(orderId);
//         return orderId
//     })

// createOrder(cart)
//     .then((orderId) => {
//         console.log(orderId);
//         return orderId
//     })

// const JSON_API = 'https://jsonplaceholder.typicode.com/users'

// function fetchApi() {
//     const pr = new Promise((resolve, reject) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch((err) => {
//             // const err = new Error('Api is incorrect');
//             reject(err);
//         })
//     })
//     return pr
// }

// fetchApi()
// .then(result => console.log('Promise Method:', result))
// .catch(err => console.log(err))

async function fetchApi() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        return data
    }
    catch(error){
        throw error;
    }
}

fetchApi()
.then(res => console.log(res))
.catch(err => console.log(err))