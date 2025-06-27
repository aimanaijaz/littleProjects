const goodCheck = document.getElementById("good");
const fastCheck = document.getElementById("fast");
const cheapCheck = document.getElementById("cheap");

const checkOrder = []; 

function handleCheck(e){
      const checkbox = e.target;
 if (checkbox.checked) {
    checkOrder.push(checkbox);
  } else {
    const index = checkOrder.indexOf(checkbox);
    if (index > -1) checkOrder.splice(index, 1);
  }

  if (checkOrder.length > 2) {
    const toDisable = checkOrder[0]; 
    toDisable.checked = false;
    checkOrder.shift(); 
  }

}


[goodCheck, fastCheck, cheapCheck].forEach(cb =>
  cb.addEventListener("change", handleCheck)
);
