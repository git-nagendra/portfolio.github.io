const bar = document.querySelector(".circle-shape");
const pointer = document.querySelector(".pointer");
console.log(bar);

bar.addEventListener("mousemove", function (event) {
  pointer.style.left = event.x + "px";
  pointer.style.top = event.y + "px";
  pointer.style.display = "block";
  pointer.style.width = "120px";
  pointer.style.height = "120px";
});
bar.addEventListener("mouseleave", function () {
  pointer.style.display = "none";
});

const btnList = document.querySelectorAll('.btn_list li');
const contant = document.querySelectorAll('.content');

btnList.forEach((tabBtn,index) => {
  
  tabBtn.addEventListener('click', () => {
    btnList.forEach(item => item.classList.remove('active'));
    tabBtn.classList.add('active');
    contant.forEach(items => items.classList.remove('show'));
    contant[index].classList.add('show');
   

  });
});

const ham_btn =document.querySelector('.ham_btn');
const nav_list =document.querySelector('.nav_list');
ham_btn.addEventListener('click',()=>{
  nav_list.classList.toggle('mobile')
})


// const select_btn = document.querySelector(".select_btn");
// const option_wrapper = document.querySelector(".option_wrapper");
// select_btn.addEventListener("click", function () {
//   option_wrapper.classList.toggle("show_option");
// });

// let State = [
//   "Alabama",
//   "Alaska",
//   "Arizona",
//   "Arkansas",
//   "California",
//   "Colorado",
//   "Connecticut",
//   "Delaware",
//   "Florida",
//   "Georgia",
//   "Hawaii",
//   "Idaho",
//   "Illinois",
//   "Indiana",
//   "Iowa",
//   "Kansas",
//   "Kentucky",
//   "Louisiana",
//   "Maine",
//   "Maryland",
//   "Massachusetts",
//   "Michigan",
//   "Minnesota",
//   "Mississippi",
//   "Missouri",
//   "Montana",
//   "Nebraska",
//   "Nevada",
//   "New Hampshire",
//   "New Jersey",
//   "New Mexico",
//   "New York",
//   "North Carolina",
//   "North Dakota",
//   "Ohio",
//   "Oklahoma",
//   "Oregon",
//   "Pennsylvania",
//   "Rhode Island",
//   "South Carolina",
//   "South Dakota",
//   "Tennessee",
//   "Texas",
//   "Utah",
//   "Vermont",
//   "Virginia",
//   "Washington",
//   "West Virginia",
//   "Wisconsin",
//   "Wyoming",
// ];

// const option_list = document.querySelector(".option");
// const select_span = document.querySelector(".select_btn span");
// console.log(select_span);

// function addCountry() {
//   State.forEach((country) => {
//     let li = `<li onclick='updateName(this)'>${country}</li>`;
//     option_list.insertAdjacentHTML("beforeend", li);
//   });
// }
// addCountry();

// function updateName(selectedli) {
//   select_span.innerText = selectedli.innerHTML;
//   option_wrapper.classList.remove("show_option");
// }
// updateName();
