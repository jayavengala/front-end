// Enter your code here
console.log('Enter your code here');
var input = document.getElementById('userinput');
var output = document.getElementById('intro');
function find() {
    let reg = new RegExp("\\b" + input.value + "\\b","ig");
    let inn = output.innerText.replace(reg, (same) => {
        return `<span style="background-color:yellow;">${same}</span>`;
    });
    output.innerHTML = inn;
}
input.addEventListener('keyup', find, false);
input.addEventListener('keydown', find, false);


