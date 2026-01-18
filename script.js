let input = document.getElementById('input');
let parentDiv = document.querySelector('.main');

let btn =document.getElementById('toggleBtn');

btn.addEventListener(`click`,()=>{
    document.body.classList.toggle('dark');
    if(
        document.body.classList.contains("dark")
    ){
        btn.textContent = "Light On";
    }else{
        btn.textContent = "Light Off";
    }
})