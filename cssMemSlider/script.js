let sortBnt = document.querySelectorAll('.small-dot');
let sortImage = document.querySelectorAll('.var');
let sortBtnBig = document.querySelectorAll('.big-dot');
let active = document.querySelector('.active');

for (let i = 0; i < sortBnt.length; i++) {
    sortBtnBig[i].addEventListener('click', function () {
        for(let bt = 0; bt < sortBnt.length; bt++) {
            sortBnt[bt].classList.remove('current');
            sortImage[bt].classList.remove('active');
            sortImage[bt].style.maxHeight = null;
        }
            sortBnt[i].classList.add('current');
            sortImage[i].classList.add('active');
            let height = sortImage[i].clientHeight;
            console.log(height);
            sortImage[i].style.maxHeight = "93vh";
        
    })
}

