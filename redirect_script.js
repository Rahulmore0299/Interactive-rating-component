const display = localStorage.getItem("valuekey");

let heading = document.getElementById("dynNum")

heading.innerText = `You selected ${display} out of 5`
