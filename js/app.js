// ========== FORMULARIO SIMPLE + TOAST FEEDBACK ==========
// (JS vanilla, sin dependencias externas)
const form = document.getElementById('contactForm');
const toast = document.getElementById('toastMessage');
let toastTimeout = null;

function showToast(message, isError = false) {
  if (toastTimeout) clearTimeout(toastTimeout);
  toast.textContent = message || (isError ? '❌ Ocurrió un error, inténtalo de nuevo' : '✨ ¡Gracias! Pronto uno de nuestros IA experts se comunicará.');
  toast.style.backgroundColor = isError ? '#B91C1C' : 'var(--color-primary)';
  toast.style.opacity = '1';
  setTimeout(() => {
    toast.style.opacity = '0';
  }, 4000);
  toastTimeout = setTimeout(() => {
    toast.style.opacity = '0';
  }, 4000);
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validación muy simple (campos requeridos)
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nombre || !email) {
      showToast('⚠️ Por favor completa nombre y correo electrónico.', true);
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      showToast('📧 Ingresa un correo electrónico válido.', true);
      return;
    }

    // Simulación de envío exitoso (sin backend, pero UX profesional)
    const formData = {
      nombre: nombre,
      email: email,
      empresa: document.getElementById('empresa').value.trim(),
      mensaje: document.getElementById('mensaje').value.trim()
    };

    const submitBtn = form.querySelector('.form-btn');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
      console.log('Formulario enviado (demo):', formData);
      form.reset();
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
      showToast('✅ ¡Listo! Revisaremos tu solicitud y te contactaremos.', false);
    }, 800);
  });
}

// smooth scroll para enlaces internos (anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
