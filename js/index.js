console.log("Hello");


  fetch("header.html")
    .then(r => r.text())
    .then(d => document.getElementById("header").innerHTML = d);

  fetch("footer.html")
    .then(r => r.text())
    .then(d => document.getElementById("footer").innerHTML = d);
