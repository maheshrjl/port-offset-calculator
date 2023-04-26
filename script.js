function calculateOffset() {
    let port = parseInt(document.getElementById("port").value);
    let offset = parseInt(document.getElementById("offset").value);

    let result = port + offset;

    document.getElementById("result").innerHTML = "Result: " + result;
}
