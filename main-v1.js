document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('fashionModal');
  const closeBtn = document.getElementById('closeModal');
  const triggers = document.querySelectorAll('.popup-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.preventDefault();
      if (window.innerWidth > 768) {
        // Desktop: show modal
        modal.style.display = 'flex';
      } else {
        // Mobile: go to mobile page
        window.location.href = "mobile-v1.html";
      }
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => modal.style.display = 'none');

  // Click outside modal to close
  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
