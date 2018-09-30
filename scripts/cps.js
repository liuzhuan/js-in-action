// What is Continuation-passing Style(CPS)?
// http://matt.might.net/articles/by-example-continuation-passing-style/

function fact(n, ret) {
    if (n === 0) {
        ret(1);
    } else {
        fact(n-1, function(t0) {
            ret(n * t0);
        })
    }
}

fact(4, function(n) {
    console.log("fact = " + n);
})