const p1 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("promise is resolved");
    }, 10000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("promise is resolved");
    }, 5000)
})


async function handlePromise() {
    console.log("Hello world 1")
    // here JS engine wait for promise to reslove
    const value = await p1
    console.log("Hello world 2");
    console.log(`Value1: ${value}`);

    const val2 = await p2;
    console.log("Hello world 3");
    console.log(`Value2: ${val2}`);
    
}

handlePromise();

const API_URL = "https://somerandomurl";

async function handleFetch() {

    try{
        const data = await fetch(API_URL);
        const value = await data.json();
        console.log(value)
    } catch (err) {
        console.log(err)
    }

    // fetch('https://api.github.com/users/PrinceSachan')
    //     .then(res => res.json())
    //     .then(result => console.log(result))

    // fetch() => Response.json() => jsonValue
}

handleFetch();

// function getData() {
//     p.then((res) => console.log(`Promise resolved from getData: ${res}`));
//     console.log("Hello world from getData");
// }

// getData();