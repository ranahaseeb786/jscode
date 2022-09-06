// const body = document.body;
// // body.append("hhhhhh");
// const div = document.createElement("div");
// body.append(div);

const div = document.querySelector("div");
console.log(div.innerText);
console.log(div.textContent);


const yes = () =>{
    const x = 9;
    console.log(x,"in function");
    for(var i=0; i<5; i++){
        console.log(i);
    }
}

yes();
const myArr = Array.from("ABCDEFG");
console.log(myArr);
const x = 10;
console.log(x,"bahar");