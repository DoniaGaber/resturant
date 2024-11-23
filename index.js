const menu = document.querySelector(".menu")
const list = document.querySelector("nav .nav__links ul")

menu.addEventListener("click" , ()=>{
    list.classList.toggle("toggle")

})
const BASE_URL= "http://localhost:3000"
async function getAllCategories(){
    const res = await fetch(`${BASE_URL}/products`)
    const finalRes =await res.json()
    console.log(finalRes)
}

getAllCategories()
