document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.complete-checkbox');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('click', function() {
        handleCompleteClick(this);
      });
    });
  });
  
  // Handle the completion click and trigger flower animation
  function handleCompleteClick(checkbox) {
    const row = checkbox.closest('li'); // Get the row of the clicked checkbox
    const flower = document.createElement('div');
    flower.classList.add('flower-pop');
    row.appendChild(flower);
  
    // Position the flower at the location of the checkbox
    const checkboxRect = checkbox.getBoundingClientRect();
    flower.style.left = `${checkboxRect.left + window.scrollX}px`;
    flower.style.top = `${checkboxRect.top + window.scrollY - 10}px`;
  
    // Remove flower after animation is done
    setTimeout(() => {
      flower.remove();
    }, 1000);
  }
  