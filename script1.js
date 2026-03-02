
//promise 
/*const promise = new Promise((resolve, reject) => {
    var success = true; // Simulating a successful task
    if (success) {
        resolve("Task completed successfully");
    }
    else {
        reject("Task failed");
    }
});
    promise.then((message) => {
        console.log(message);
    }).catch((err) => {
        console.error(err);
    })

const promise = new Promise((resolve, reject) => {
    var success = true; // Simulating a successful task
    if(success){
        setTimeout(() => {
            resolve("Task completed successfully");
        }, 2000);
    }
    else{
        reject("Task failed");
    }
    })
    promise.then((message) =>console.log(message))
        .catch((err) => console.log(err));

//setInterval
var count = 0;
var IntervalCounter = setInterval(() => {
    console.log("Count: " + count);
    count++;
    if (count > 5) {
        clearInterval(IntervalCounter);
    }
}, 2000);

const getData=() => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
}
getData().then((response) => response.json())
.then((data) => console.log(data))
.catch((err) => console.error(err));
*/
//async await
const getData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
getData();

