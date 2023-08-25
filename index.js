const colorInput = document.getElementById("color-input")
const getSchemeBtn = document.getElementById("get-scheme-btn")
const schemeContainer = document.getElementById("scheme-container")

let fetchedData = ''

colorInput.addEventListener('input', function(){
    const inputValue = colorInput.value.replace('#', '')
    const colorSelectValue = document.getElementById("color-select").value

    fetch(`https://www.thecolorapi.com/scheme?hex=${inputValue}&mode=${colorSelectValue}`)  
    .then(res => res.json())
    .then(data => fetchedData = data)

})


getSchemeBtn.addEventListener('click', function(){
    console.log(fetchedData.colors)
    const schemeColors = fetchedData.colors
    schemeContainer.innerHTML = ''

    const colorHtml = schemeColors.map(color => `
        <div class="scheme-el">
            <div class="color" style="background-color: ${color.hex.value};" id="${color.hex.value}"></div>
            <p>${color.hex.value}</p>
        </div>`).join('')
    // ADD HTML HERE using fetchedData
    schemeContainer.innerHTML = colorHtml
})

document.getElementsByClassName("color").addEventListener('click', function(){

})











