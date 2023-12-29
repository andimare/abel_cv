function funcrun(){
    let bur = document.getElementById('burger')
    let menu = document.getElementById('menu')

   // menu.style.display = "block"
    if(menu.classList.contains('hidden')){
    menu.classList.remove('hidden')
    }else{
    menu.classList.add('hidden')
    }
 }