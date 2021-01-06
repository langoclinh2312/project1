// header

// bắt sự kiện bấm onclok
language_btn.onclick = function() {
    language_list.classList.toggle('language-open');
}

var list = document.getElementsByClassName("option");

//  khởi tạo ra oncilck ẩn 
for (let i = 0; i < list.length; i++) {
    // gán oncilck bằng fuction
    list[i].onclick = function() {
        // lấy dữ liệu người dùng chọn gán lại lên dữ liệu cũ ()
        language_btn.innerHTML = this.textContent;
        // remove lại phần tử cũ
        for (let j = 0; j < list.length; j++) {
            // remove xóa calss 
            list[j].classList.remove('color');
        }
        // add thêm calss vào phần tử 
        this.classList.add('color');
        // toggle ko có thêm  class vào phần tử , có thì cắt 
        language_list.classList.toggle('language-open');

    }
}
// header
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('header-fixed');
        Headertop.style.display = "none";
    } else {
        Headertop.style.display = "block";
        header.classList.remove('header-fixed');
    }
}
// banner-product-detils
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
// section
window.onscroll = function() {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("myImg").className = "slideUp";
    }
}