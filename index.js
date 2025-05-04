// Create empty containers
const state = {
  bank: [],
  evenNum: [],
  oddNum: [],
};



// create all functions

function renderNumBank() {
  const output = document.querySelector("#numberBank output");
  output.innerHTML=state.bank;

  };

function getSortedNumAll() {
state.bank.forEach((num) => {
  if (num %2 == 0){
    state.evenNum.push(num)
  }else{
    state.oddNum.push(num)
  }
})
state.bank.length=0;
render();
}
 
function getSortedNum() {
 const num= state.bank[0];
    if (num %2 == 0){
      state.evenNum.push(num)
    }else{
      state.oddNum.push(num)
    }
  
  state.bank.shift();
  render();
}

function renderOddNum() {
  const output = document.querySelector("#odds output");
    output.innerHTML=state.oddNum;
  
};

function renderEvenNum() {
  const output = document.querySelector("#evens output");
  output.innerHTML= state.evenNum;
};



function render() {
  renderEvenNum();
  renderOddNum();
  renderNumBank();
};


// grab "form" from HTML and give it somethig to do
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data= new FormData(event.target);
  state.bank.push(data.get("number"));
  console.log(state.bank);
  render();
  number.value="";
});



const sortAll = document.querySelector("#sortAll");
sortAll.addEventListener("click", (Event) => {
  getSortedNumAll();
})

const sortOne = document.querySelector("#sortOne");
sortOne.addEventListener("click", (Event) => {
  getSortedNum();
})

