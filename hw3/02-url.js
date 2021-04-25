// Enter your code here

function manipulate() {
    var temp = "";
    let resultDiv = document.createElement("div");
    resultDiv.className = "bg-light border rounded w-50 mx-auto mt-5 p-3";
    var input = document.getElementById("comments").value;
    var url = decodeURIComponent(input);
    if(url.indexOf("?") === -1) {
        let heading = document.createElement("div");
        heading.innerHTML = ('<h1>Results</h1>'+'<h4>URL</h4>' +url);
        resultDiv.append(heading);
    } else {
        var website = url.split("?");
        let heading = document.createElement("div");
        heading.innerHTML = ('<h1>Results</h1>'+'<h4>URL</h4>' + website[0]+ '<br><br>' + '<h4>Query Parameters</h4>');
        resultDiv.append(heading);
        var temp = website[1];
        var params = temp.split("&");
        params.forEach( element => {
            var split = element.split("=");
            let div = document.createElement("div");
            div.innerHTML = split[0] + ": " + split[1];
            resultDiv.append(div);
        })
    }
    document.querySelector(".bg-info").append(resultDiv)
}

// Test Input #1:
// http://www.example.com

// Test Output
// http://www.example.com

// Test Input #2:
// http://www.example.com?name=r2d2

// Output
// http://www.example.com
// name: r2d2

// Test Input #3:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
