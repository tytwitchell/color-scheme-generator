const colorInput = document.getElementById("color-input")
const colorSelect = document.getElementById("color-select")
const getSchemeBtn = document.getElementById("get-scheme-btn")
const schemeContainer = document.getElementById("scheme-container")
let fetchedData = ''

colorInput.addEventListener('input', () => fetchApi())
colorSelect.addEventListener('change', () => fetchApi())

function fetchApi(){
    const inputValue = colorInput.value.replace('#', '')
    const colorSelectValue = colorSelect.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${inputValue}&mode=${colorSelectValue}`)  
    .then(res => res.json())
    .then(data => fetchedData = data)
}


getSchemeBtn.addEventListener('click', function(){
    console.log(fetchedData.colors)
    const schemeColors = fetchedData.colors
    schemeContainer.innerHTML = ''

    const colorHtml = schemeColors.map(color => `
        <div class="scheme-el">
            <div class="color" style="background-color: ${color.hex.value};" id="${color.hex.value}"></div>
            <p>${color.hex.value}</p>
        </div>`).join('')

    schemeContainer.innerHTML = colorHtml
})












