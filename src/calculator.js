let app1 = document.querySelector(".app-body");
const billAmt = document.getElementById("bill-amount");
const feedback = document.getElementById("feedback");
let noOfPeople = document.getElementById("no-of-people");
function calculate() {
      const answer = document.createElement("div");
    //   if (!isNaN(billAmt.innerText.value) && !isNaN(billAmt.noOfPeople.value) ) {
        if(document.querySelector(".extra") != null)
        document.querySelector(".extra").remove();
        billValue = document.getElementById("bill-amount").value;
        feedbackValue = document.getElementById("feedback").value;
        noOfPeopleValue = document.getElementById("no-of-people").value > 0 ? document.getElementById("no-of-people").value : 1;
        var tips = (billValue * feedbackValue)/ noOfPeopleValue;
        let tipsContainer = document.createElement("div");
        if(!isNaN(tips)) {   
            tipsContainer.innerText = noOfPeopleValue > 1 ? tips + " each" : tips;
        } else {
            tipsContainer.innerText = "Enter valid input";
        } 
        tipsContainer.classList.add("extra");
        app1.appendChild(tipsContainer)
        //   }


}