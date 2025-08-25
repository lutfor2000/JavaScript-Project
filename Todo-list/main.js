// const divId = document.getElementById('table');
// console.log(divId)

// console.log(document.URL)
// console.log(document.all)

document.title = 'This is DOM'

// const headerElement = document.getElementById('header2');
// console.log(headerElement.textContent)
// console.log(headerElement.innerText)
// headerElement.style.border = '10px solid red';

const headerInput = document.getElementsByClassName('h_input');

Array.from(headerInput).forEach(lutfor =>{
    lutfor.addEventListener('click',()=>{
        lutfor.style.background = "red";
    })
})


// const headerInput = document.querySelectorAll('.h_input');

// headerInput.forEach(input => {
//     input.addEventListener('click', () => {
//         input.style.background = "red";
//     });
// });


// const headerInput = document.getElementsByClassName('h_input');
// for(let i=0; i<=headerInput.length; i++){

//     headerInput[i].addEventListener('click',()=>{
//         headerInput[i].style.background = "red";
//     })
//     console.log(headerInput)
// }
