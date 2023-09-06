let buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', function () {
    let target = this.dataset.target;
    let targetElement = document.getElementById(target);
    targetElement.classList.toggle('open');



    document.addEventListener('click', (e) => {
      if (!e.target.closest('.marker')) {
        targetElement.classList.remove('open');
      }
    });

  })


})
