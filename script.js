let day = document.querySelector("#day")
let month = document.querySelector("#month")
let year = document.querySelector("#year")
let yTxt = document.querySelector("#y")
let mTxt = document.querySelector("#m")
let dTxt = document.querySelector("#d")
let form = document.querySelector("form")
let alrt = document.querySelector(".alert")
let bg = document.querySelector(".bg")
let back = document.querySelector(".back")
let input = document.querySelectorAll("input")
let alrtTxt = document.querySelector(".alrt-txt")
function calcAge() {
    let date = new Date()
    let currYr = date.getFullYear()
    let currMth = date.getMonth()  + 1
    let currDay = date.getDay()

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let currAgeYear = currYr - year.value
    let currAgeMonth = currMth - month.value
    let currAgeDay = currDay - day.value
    let mArr = String(currAgeMonth).split("")
    let dArr = String(currAgeDay).split("")

 

    if (day.value !== "" && month.value !== '' && year.value !== '') {
    if (year.value > currYr ) {
        alrt.classList.add("active")
        bg.style.display = 'block'

    }
    else{
    yTxt.innerHTML = currAgeYear
    if (mArr.indexOf("-") || dArr.indexOf("-")) {
        let posMonth = mArr.shift()
        dArr.shift()
        mTxt.innerHTML = posMonth
        dTxt.innerHTML = dArr
    }
    else{
        if (month.value > currMth) {
            let currAgeYear = (currYr - year.value) - 1
            let currAgeMonth = month.value - currMth
            let remainingMnth = 12 - currAgeMonth
            let currAgeDay = day.value - currDay
            let remainingDay = 30 - currAgeDay
    
            yTxt.innerHTML = currAgeYear
            mTxt.innerHTML = remainingMnth
            dTxt.innerHTML = remainingDay
        }

    }

    }
    console.log(currMth)
}
else{
    alrt.classList.add("active")
alrtTxt.innerHTML = "Kindly complete the form"
}
})

back.addEventListener("click", ()=>{
    alrt.classList.remove("active")
    bg.style.display = 'none'

    input.forEach(el =>{
        el.value = ''
    })
})

}

calcAge()

