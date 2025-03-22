const exp = require('express');

const app = exp();

function tsum(n) {
    let ans = 0;
    for (let i=1 ; i<=n ; i++)
        ans += i;
    return ans;
}

app.get("/", (req,res) => {
    const n = req.query.n;
    let ans = tsum(n);
    console.log(ans);
})

app.listen(3000);