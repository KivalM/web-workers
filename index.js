const worker = new Worker("./worker.js", {type: "module"})

worker.addEventListener("message", async ({ data }) => {
    console.log(data);
});

worker.onerror = function (event) {
    throw new Error(event.message + " (" + event.filename + ":" + event.lineno + ")");
}

async function onclick() {
    sendMessage("World")
}

document.getElementById("btn").addEventListener("click", onclick, false);