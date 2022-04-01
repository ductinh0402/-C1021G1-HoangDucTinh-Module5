

let money=10000;
const buyACar=(car: any)=>{
    return new Promise(((resolve,reject) =>{
        setTimeout(()=>{
            if (money>=10000){
                resolve("can buy " +car);
            }else {
                reject("Do not enough money");
            }
        },100)
    }))
}

money=1000001;
const promise=buyACar("  Vinfast").then(value => {
    console.log(value);
},error =>{
    console.log(error);
})
// let x = 0;
// async function r5() {
//     x += 1;
//     console.log(x);
//     return 5;
// }
// (async () => {
//     x += await r5();
//     console.log(x);
// })();
