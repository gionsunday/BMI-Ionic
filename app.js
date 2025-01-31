const calculateBtn = document.getElementById("calculator")
const resetBtn = document.getElementById("reset")

const heightInput = document.getElementById("height-input")
const weightInput = document.getElementById("weight-input")

const resultFeild = document.querySelector(".result")

const calculatorBMI = () =>{
    const enteredHeight = +heightInput.value
    const enteredWeight = +weightInput.value

    const BMI = enteredWeight / (enteredHeight * enteredHeight)
    console.log(BMI)
    if(isNaN(BMI)){
        alert("Not a number, please check your input!")
        return
    }
    // resultFeild.textContent = BMI.toFixed(2)

    const resultElement = document.createElement("ion-card")
    resultElement.innerHTML = `
        <ion-card-content>
           <h2>${BMI.toFixed(4)}</h2>
        </ion-card-content>
    `
    resultFeild.innerHTML = ""
    resultFeild.appendChild(resultElement)
}

const bmiReseter = () =>{
    heightInput.value = ""
    weightInput.value = ""
    resultFeild.textContent =""
}

calculateBtn.addEventListener("click", calculatorBMI)
resetBtn.addEventListener("click", bmiReseter)