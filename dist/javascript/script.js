function dropDown() {
    document.querySelector('#submenu').classList.toggle('hidden')
    document.querySelector('#arrow').classList.toggle('rotate-0')
  }
  dropDown()

  function Openbar() {
    document.querySelector('.sidebar').classList.toggle('left-[0]')
    document.querySelector('.section').classList.toggle('md:pl-[300px]')
    document.querySelector('.sidebar').classList.toggle('shadow-[2px_0_5px_rgba(0,0,0,0.3)]')
  }

  