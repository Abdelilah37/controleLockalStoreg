// select Elements 
let thisInput = document.querySelector('#thisInput')
let buttons = document.querySelectorAll('.button')
let results = document.querySelector('.results span')

buttons.forEach(span => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }
    if (e.target.classList.contains("add-item")) {
      addItem();
    }
    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }
    if (e.target.classList.contains("show-item")) {
      showItems();
    }
  })
})


function checkItem() {
  if (thisInput.value.trim() !== "") {
    if (localStorage.getItem(thisInput.value)) {
      results.innerHTML = ` fonde local storage item called <span>${thisInput.value}</span>`
    } else {
      results.innerHTML = `no local storage item with the name <span> ${thisInput.value}</span>`

    }
    thisInput.value = "";
  } else {
    results.innerHTML = "input cant be empty"
  }

}

function addItem() {
  if (thisInput.value.trim() !== '') {
    localStorage.setItem(thisInput.value, "test1");
    results.innerHTML = `local storage item <span> ${thisInput.value} </span> added`;
    thisInput.value = "";
  } else {
    results.innerHTML = "input cant be empty"
  }
}

function deleteItem() {
  if (thisInput.value.trim() !== "") {
    if (localStorage.getItem(thisInput.value)) {
      localStorage.removeItem(thisInput.value);
      results.innerHTML = ` local storage item <span> ${thisInput.value} </span>deleted`
    } else {
      results.innerHTML = `no local storage item with the name <span> ${thisInput.value}</span>`
    }
  }
  else {
    results.innerHTML = "input cant be empty";
  }
  thisInput.value = "";
}
function showItems() {
  if (localStorage.length) {
    results.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      results.innerHTML += `<span class="show">${key}</span>`;
    }
  } else {
    results.innerHTML = "local storage is empty";
  }
}