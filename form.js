document.addEventListener("DOMContentLoaded", () => {
  const btnClose = document.querySelector("#popupclose")
  const popup = document.querySelector("#popup")
  btnClose.addEventListener("click", closePopup)

  function closePopup() {
    popup.style.display = "none"
  }
})

document.getElementById("myForm").addEventListener("submit", function (e) {
  let regex = []
  regex["name"] = /^[A-Za-zÀ-ÖØ-öø-ÿ -'\.]+$/
  regex["fname"] = /^[A-Za-zÀ-ÖØ-öø-ÿ -'\.]+$/
  regex["message"] = /^[^<>]+$/
  regex["phone"] = /^(02|03|04|07|08)([0-9]{8})$/
  regex["email"] =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

  const allInput = ["name", "fname", "phone", "email", "message"]

  let isValid = false

  validateForm()

  if (isValid === true) {
    document.querySelector("#popup").style.display = "block"
    resetValue();
  }

  e.preventDefault()

  function validateForm() {
    let iNput, txtErr, tick
    let isMatch

    for (let i in allInput) {
      iNput = document.querySelector("#" + allInput[i])
      txtErr = document.querySelector("#err" + iNput.id)
      iNput.value = iNput.value.trim()

      if (iNput.value == "" && iNput.id != "phone") {
        txtErr.innerHTML = "Please fill out this field!"
        console.log(iNput.id + ": " + txtErr.innerHTML)
        isValid = false
      } else {
        if (iNput.id != "phone" || (iNput.id == "phone" && iNput.value != "")) {
          isMatch = matchRegex(iNput, regex[iNput.id])
          if (isMatch == false) {
            txtErr.innerHTML = "Invalid input!"
            console.log(iNput.id + ": " + txtErr.innerHTML)
            isValid = false
          } else {
            txtErr.innerHTML = "&check;"
            console.log(iNput.id + ": " + iNput.value)
            isValid = true
          }
        }
      }
    }
  }

  function matchRegex(input, regex) {
    return regex.test(input.value)
  }

  function resetValue(){
    document.querySelector("#myForm").reset();

    for(let i in allInput){
      txtErr = document.querySelector("#err" + allInput[i])
      txtErr.innerHTML = "";
    }
  }
})
