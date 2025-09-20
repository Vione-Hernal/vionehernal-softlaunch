document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.popup-trigger');
  const modal = document.getElementById('fashionModal');
  const closeBtn = document.getElementById('closeModal');

  // ✅ Trigger modal on click (works on both desktop + mobile HTML)
  triggers.forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.preventDefault();
      if (modal) modal.style.display = 'flex';
    });
  });

  // ✅ Close modal
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  // ✅ Click outside modal to close
  window.addEventListener('click', e => {
    if (modal && e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
