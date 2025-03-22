function step1(callback){
    setTimeout(() => {
        console.log("Step-1 done");
        callback();
    }, 3000)
}

function step2(callback){
    setTimeout(() => {
        console.log("Step-2 done");
        callback();
    }, 3000)
}

function step3(callback){
    setTimeout(() => {
        console.log("Step-3 done");
        callback();
    }, 3000)
}

function step4(callback){
    setTimeout(() => {
        console.log("Step-4 done");
        callback();
    }, 3000)
}

step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                console.log("All steps completed")
            })
        })
    })
})