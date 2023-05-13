const loadingBar1 = document.querySelector('.loading-bar');

function animateOnScroll1() {
  const elementTop = loadingBar1.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementTop <= windowHeight) {
    loadingBar1.classList.add('animate');
    window.removeEventListener('scroll', animateOnScroll1);
  }
}

window.addEventListener('scroll', animateOnScroll1);

// 2
const loadingBar2 = document.querySelector('.loading-bar2');

function animateOnScroll2() {
  const elementTop = loadingBar2.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementTop <= windowHeight) {
    loadingBar2.classList.add('animate');
    window.removeEventListener('scroll', animateOnScroll2);
  }
}

window.addEventListener('scroll', animateOnScroll2);

// 3
const loadingBar3 = document.querySelector('.loading-bar3');

function animateOnScroll3() {
  const elementTop = loadingBar2.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementTop <= windowHeight) {
    loadingBar3.classList.add('animate');
    window.removeEventListener('scroll', animateOnScroll3);
  }
}

window.addEventListener('scroll', animateOnScroll3);

// 4
const loadingBar4 = document.querySelector('.loading-bar4');

function animateOnScroll4() {
  const elementTop = loadingBar2.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementTop <= windowHeight) {
    loadingBar4.classList.add('animate');
    window.removeEventListener('scroll', animateOnScroll4);
  }
}

window.addEventListener('scroll', animateOnScroll4);

// 5
const loadingBar5 = document.querySelector('.loading-bar5');

function animateOnScroll5() {
  const elementTop = loadingBar2.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementTop <= windowHeight) {
    loadingBar5.classList.add('animate');
    window.removeEventListener('scroll', animateOnScroll5);
  }
}

window.addEventListener('scroll', animateOnScroll5);

// 6
const loadingBar6 = document.querySelector('.loading-bar6');

function animateOnScroll6() {
  const elementTop = loadingBar2.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementTop <= windowHeight) {
    loadingBar6.classList.add('animate');
    window.removeEventListener('scroll', animateOnScroll6);
  }
}

window.addEventListener('scroll', animateOnScroll6);

// navbar
let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector('nav').classList.remove('hide-nav');
  } else {
    document.querySelector('nav').classList.add('hide-nav');
  }
  prevScrollPos = currentScrollPos;
};

// subscribe
// saat dokumen selesai dimuat
$(document).ready(function () {
  // saat tombol "Subscribe" di klik
  $('#subscribe-btn').click(function (event) {
    // mencegah perilaku bawaan browser
    event.preventDefault();

    // mendapatkan tujuan scroll
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

    // jika tujuan scroll ditemukan
    if (target.length) {
      // menghitung posisi scroll tujuan
      var scrollTo = target.offset().top;

      // menambahkan animasi scroll
      $('html, body').animate(
        {
          scrollTop: scrollTo,
        },
        1000
      );
    }
  });
});



