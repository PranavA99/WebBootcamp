function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step1 done")
        }, 3000)
    })
}

async function step2(){
    console.log("Step2 done");
    let result = await step1();
    console.log(result);
}

step2();