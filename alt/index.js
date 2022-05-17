
function worker_function() {
    // 

    console.log("Worker Started")
    
    onmessage = function (e) {
        p.greet("asd")
    }
}

const worker = new Worker(URL.createObjectURL(new Blob(["(" + "import * as p from \"hello.js\"" +worker_function.toString()+")()"], {type: 'module'})));

worker.addEventListener("message", async ({ data }) => {
    console.log(data);
});

worker.onerror = function (event) {
    throw new Error(event.message + " (" + event.filename + ":" + event.lineno + ")");
}

window.sendMessage = function (args) {
    worker.postMessage(args);
};

