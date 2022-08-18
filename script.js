const newPAGE = () => {
    window.location.href = "redirect.html";
}

const allNumbersDiv = document.querySelectorAll(".numbers")

allNumbersDiv.forEach(a => {
    a.onclick = () => {
        localStorage.setItem("valuekey", a.innerHTML)
        
        a.style.backgroundColor = "hsl(217, 12%, 63%)"
        
    }
})
