import * as p from "hello.js"

console.log("Worker Started")

onmessage = function (e) {
    p.greet(e.data)
}