import { testModule } from "./file2.js";

//timer for 10 seconds
const timerFunction = (() => {
    let count = 10;
    const timer = setInterval(() => {
        console.log(count);
        count--;
        if(count < 0){
            clearInterval(timer);
            setTimeout(() => {
                console.log("Timed out!");
            },1000)
        }
    },1000)
})();

//using module feature
testModule();

//callback function
const add = (a, b, callback) => {
    let c = a+b;
    console.log(`Addition of ${a} and ${b} is ${c}`);
    callback(c, 8);
    return
}
const multiply = (x,y) => {
    console.log(`Multiplty of ${x} and ${y} is ${x*y}`);
}

add(2,3,multiply);


//API calling
const getData = async() => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/name/eesti"); //This is GET method
        const data = await response.json();
        console.log(`
            Name: ${data[0].name.common},
            Capital: ${data[0].capital[0]},
            Region: ${data[0].region},
        `);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
getData();
