function headerListener() {
  let scrollpos = window.scrollY;
  const header = document.getElementById('header');

  function add_class_on_scroll() {
    header.classList.add('header-active');
  }

  function remove_class_on_scroll() {
    header.classList.remove('header-active');
  }

  window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos > 450) add_class_on_scroll();
    if (scrollpos < 450) remove_class_on_scroll();
  });
}

export default headerListener;
