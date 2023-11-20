const empName = document.getElementById("emp_name");
const empEmail = document.getElementById("emp_email");
const empNum = document.getElementById("emp_number");
const skill = document.getElementById("skill");
const error2 = document.getElementById("error2");
const valdNum = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
const valdEmail = /^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/;
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


contact.addEventListener("submit", (e) => {

    e.preventDefault();
    let message = []
    if (empName.value === "" || empName.value === undefined) {
        message.push(" Your Name is required");
    }

    if (empNum.value === "" || empNum.value === undefined) {
        message.push(" Your Number is required");
    } else if (!valdNum.test(empNum.value)) {
        message.push(" Your Number is Not Vaild");
    }

    if (empEmail.value === "" || empEmail.value === undefined) {
        message.push(" Your Email is required");
    } else if (!valdEmail.test(empEmail.value)) {
        message.push(" Your Email is Not Valid");
    }

    if (message.length > 0) {


        error2.innerText = message;
    }
}) 