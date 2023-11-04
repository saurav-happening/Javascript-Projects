// when i click the calculate button it will show result
// had to caputre value in input fields
// have to showresult in result field using innerhtml
// calculate using formula
// formula - wight(in kg) / height * heights (in meters)


// my way

const form = document.querySelector("form")
const result = document.querySelector("#result")


form.addEventListener("submit",function(e){
    e.preventDefault()

    // should declare variable inside because user will give input

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    // console.log(weight);


    if(height === '' || height <= 0 || isNaN(height) ){
        result.innerHTML = `Please enter valid height ${height}`

    } else if(weight === '' || weight <= 0 || isNaN(weight) ){
        result.innerHTML = `Please enter valid weight ${weight}`

    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            if(bmi < 18.6){
                result.innerHTML = `Your BMI is ${bmi} (Under Weight)`
            }else if(bmi >=18.6 && bmi<=24.9){
                result.innerHTML = `Your BMI is ${bmi} (Normal)`
            }else {
                result.innerHTML = `Your BMI is ${bmi} (Overweight)`
            }
        
    }

})







