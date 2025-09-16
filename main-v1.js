document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.popup-trigger');
  const modal = document.getElementById('fashionModal');
  const closeBtn = document.getElementById('closeModal');

  // ✅ Detect if mobile (user agent + screen width fallback)
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;

  // ✅ Redirect to mobile HTML if on mobile AND not already there
  if (isMobile && !window.location.href.includes("mobile-v1.html")) {
    window.location.href = "mobile-v1.html";
    return; // stop script execution after redirect
  }

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
