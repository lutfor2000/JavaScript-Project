// console.log(document)
// console.log(document.head)

// const url = document.URL;
// console.log(url)



//==============Part Two============

// const todo_id = document.getElementById('todu_id');

// const texC = todo_id.textContent
// const innText = todo_id.innerText

// console.log(texC)
// console.log(innText)

//=========Select Class===========
// const productList = document.getElementsByClassName('Product_list')
// console.log(productList)

//=======QuerySelector======
const inputPart = document.querySelector('#input_part');

inputPart.addEventListener('mouseover',()=>{
    inputPart.style.background ="red";
    inputPart.style.padding ="10px";
})

inputPart.addEventListener('mouseout', () => {
    inputPart.style.background = "";
    inputPart.style.padding = "";
});

//------------------querySelectorAll--------

const inputFill = document.querySelectorAll('.in_item');

inputFill.forEach(item =>{
   item.addEventListener('click',()=>{
    item.style.background = "green";
    item.style.color = "red";
   })
})

// console.log(inputPart)