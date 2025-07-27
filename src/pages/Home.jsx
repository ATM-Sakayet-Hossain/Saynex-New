import React from 'react'
import Chatlist from '../components/Chatlist'

const Home = () => {
//   let heading = document.querySelector("h1");
// heading.innerHTML = "Any Numta Generator";
// let input = document.querySelector(".input");
// let submit_btn = document.querySelector(".submit");
// let reset_btn = document.querySelector(".reset");
// let resultDiv = document.querySelector(".result");

// submit_btn.addEventListener("click", () => {
//     let namtanumber = parseInt(input.value);
//     let i = 1;
//     if (isNaN(namtanumber)) {
//         alert('Please enter a valid number.');
//     } else {
//         resultDiv.innerHTML = '';
//         while (i <= 10) {
//             resultDiv.innerHTML += `${namtanumber} x ${i} = ${namtanumber * i}<br>`;
//             i++;
//         }
//     }
// });

// reset_btn.addEventListener("click", () => {
//     input.value = '';
//     resultDiv.innerHTML = '';
//     console.log("Input reset");
// });
  return (
    <div className='pl-27 bg-gray-100'>
      <Chatlist />
    </div>
  )
}

export default Home
