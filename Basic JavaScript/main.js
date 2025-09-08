const btn = document.getElementById("btn");
const menuList = document.querySelector(".Product_list")

// btn.addEventListener("click",() => {
//     menuList.classList.toggle('.list_block');
//     menuList.classList.remove('list_block')
// }

btn.addEventListener("click", (e) => {
    e.stopPropagation();
    menuList.classList.toggle("list_block");
});
// const url = document.URL;
// console.log(url)

// let leng = "Bangla";

// function learn(topic){
//     topic=leng;
//     console.log(topic);
// }

// learn("English")

// //==============Part Two============

// const todo_id = document.getElementById('todu_id');

// const texC = todo_id.textContent
// const innText = todo_id.innerText

// console.log(texC)
// console.log(innText)

// //=========Select Class===========
// const productList = document.getElementsByClassName('Product_list')
// console.log(productList)

// //=======QuerySelector======
// const inputPart = document.querySelector('#input_part');

// inputPart.addEventListener('mouseover',()=>{
//     inputPart.style.background ="red";
//     inputPart.style.padding ="10px";
// })

// inputPart.addEventListener('mouseout', () => {
//     inputPart.style.background = "";
//     inputPart.style.padding = "";
// });

// //------------------querySelectorAll--------

// const inputFill = document.querySelectorAll('.in_item');

// inputFill.forEach(item =>{
//    item.addEventListener('click',()=>{
//     item.style.background = "green";
//     item.style.color = "red";
//    })
// })

// console.log(inputPart)