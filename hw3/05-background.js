// Enter your code here

function backgr(input) {
    console.log(document.body.form)
    if(input.value === "Stop") {
        input.value = "Start";
        input.style.backgroundColor = "blue";
        document.getElementById("interval").disabled = false;
        stop();
    }
    else if(input.value === "Start") {
        input.value = "Stop";
        input.style.backgroundColor = "red";
        document.getElementById("interval").disabled = true;
        start();
    }
}
var interval;

function start() {
  var time = document.getElementById("interval").value;
  interval = setInterval((time) => {
    document.body.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${(Math.random())})`;
  }, (time*1000));
}

function stop() {
  clearInterval(interval);
}
start();
