//BUDGET OBJ
const budget = {
    citySelect: "",
    incomeRange: "" 
}

//cities   (C=city - R=radio-box #=number of radio box)
var LA = document.getElementById("C-R1");
var San_D = document.getElementById("C-R2");
var Sac = document.getElementById("C-R3");
var San_J = document.getElementById("C-R4");
var San_F = document.getElementById("C-R5");

//income ranges   (IR=Income Range - R=radio-box #=number of radio box)
var ir_1 = document.getElementById("IR-R1");
var ir_2 = document.getElementById("IR-R2");
var ir_3 = document.getElementById("IR-R3");
var ir_4 = document.getElementById("IR-R4");
var ir_5 = document.getElementById("IR-R5");



 //this checks what radio button (city) was selected
var city = function() { 

    if(LA.checked){ //LA IS SELECTED
     budget.citySelect = "Los Angeles";
    }
    else if(San_D.checked) { //SAN DIEGO IS SELECTED
     budget.citySelect = "San Diego";
    }
    else if(Sac.checked) { //SACRAMENTO IS SELECTED
        budget.citySelect = "Sacramento";
       }
    else if(San_J.checked) { //SAN JOSE IS SELECTED
        budget.citySelect = "San Jose";
       }
    else if (San_F.checked) { //SAN FRANCISCO IS SELECTED
        budget.citySelect = "San Francisco";
    }    

    console.log(budget);
}



 //this checks what radio button (income range) was selected
 var incomeRange = function() { 

    if(ir_1.checked){ //BUDGET BETWEEN:$ 60,000 - 70,000 WAS SELECTED
     budget.incomeRange = "60,000 - 70,000";
    }
    else if(ir_2.checked) { //BUDGET BETWEEN:$ 70,000 - 80,000 WAS SELECTED
     budget.incomeRange = "70,000 - 80,000";
    }
    else if(ir_3.checked) { //BUDGET BETWEEN:$ 80,000 - 90,000 WAS SELECTED
        budget.incomeRange = "80,000 - 90,000";
       }
    else if(ir_4.checked) { //BUDGET BETWEEN:$ 90,000 - 100,000 WAS SELECTED
        budget.incomeRange = "90,000 - 100,000";
       }
    else if (ir_5.checked) { //BUDGET BETWEEN:$ 100,000 - 150,000 WAS SELECTED
        budget.incomeRange = "100,000 - 150,000";
    }    

    console.log(budget);
}

//event listeners
document.getElementById("city").addEventListener("click", city);
document.getElementById("income-Range").addEventListener("click", incomeRange);

