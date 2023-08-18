let y = 1

function navbar() {
    if (y == 1) {
        document.getElementById('header-nav').style.position ='fixed'
        document.getElementById('header-nav').style.animation ='navbar .4s linear'
        

    }
    let m = window.pageYOffset
    if (m == 0) {
        document.getElementById('header-nav').style.position ='relative'
        document.getElementById('header-nav').style.animation ='none'
    }
}