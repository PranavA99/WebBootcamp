function step1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step-1 done");
            resolve();
        }, 3000)
    })   
}

function step2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step-2 done");
            resolve();
        }, 3000)
    })   
}

function step3(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step-3 done");
            resolve();
        }, 3000)
    })   
}

step1()
.then(step2)
.then(step3)
.then(() => console.log("All done"));