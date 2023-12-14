// const p1 = new Promise((resolve, reject) => {
//     // setTimeout(() => (
//     //     resolve('P1 success')
//     // ), 3000);
//     setTimeout(() => (
//         reject('P1 Fail')
//     ), 3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     // setTimeout(() => (
//     //     resolve('P2 success')
//     // ), 5000);
//     setTimeout(() => (
//         reject('P2 Fail')
//     ), 5000);
// })

// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => (
//     //     resolve('P3 success')
//     // ), 2000);
//     setTimeout(() => (
//         reject('P3 Fail')
//     ), 2000);
// })

// Promise.all([p1, p2, p3]).then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.error(err)
// })

// Promise.allSettled([p1, p2, p3]).then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.error(err)
// })

// Promise.race([p1, p2, p3]).then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.error(err)
// })

// Promise.any([p1, p2, p3]).then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.error(err);
//     console.log(err.errors)
// })

async function fetchApi() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!data.ok){
            throw new Error(`HTTP error! Status: ${data.status}`)
        }
        const result = await data.json()
        return result
    }
    catch(err) {
        console.log(err)
        throw err
    }
}

const pr = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('PR success');
    // }, 3000)
    setTimeout(() => {
        reject('PR fail');
    }, 3000)
})

function fetchApi2() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')

            .then((response) => {
                if(!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                }
                return response.json();
            })
            .then((data) => resolve(data))
            .catch((err) => reject(err))
    })
}

Promise.race([fetchApi(), pr, fetchApi2()])
.then(res => {
    console.log(res)
})
.catch(err => {
    console.error('Error fetching data:', err);
})