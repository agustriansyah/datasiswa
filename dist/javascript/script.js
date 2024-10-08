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

  function confirmDelete() {
    const result = confirm("Are you sure you want to delete this item?");
    if (result) {
      // Logic untuk delete di sini
      alert("Item deleted successfully!");
    } else {
      alert("Item not deleted.");
    }
  }
 
  