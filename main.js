let buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
  let vertically = btn.querySelector('.vertically');
  btn.addEventListener('click', function () {
    let target = this.dataset.target;
    let targetElement = document.getElementById(target);

    targetElement.classList.toggle('open');

    if (targetElement.classList.contains('open')) {
      vertically.style.opacity = '0';
    } else {
      vertically.style.opacity = '1';
    }

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.marker')) {
        targetElement.classList.remove('open');
        vertically.style.opacity = '1';
      }
    });

  })


})
