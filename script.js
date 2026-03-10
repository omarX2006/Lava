function toggleDropdown() {
      const menu = document.getElementById("dropdownMenu");
      const arrow = document.getElementById("arrowIcon");
      menu.classList.toggle("show");
      arrow.classList.toggle("rotate");
    }

    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown')) {
        const menu = document.getElementById("dropdownMenu");
        const arrow = document.getElementById("arrowIcon");
        menu.classList.remove("show");
        arrow.classList.remove("rotate");
      }
    }