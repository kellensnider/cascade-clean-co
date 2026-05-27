'use strict';

/* =========================================
   CASCADE CLEAN CO. — main.js
   Tier 1 Landing Page (no navigation)
   Sower Creative
========================================= */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initScrollAnimations();
  initContactForm();
  initFooterYear();
});


/* =========================================
   STICKY HEADER — adds .is-scrolled shadow on scroll
========================================= */

function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  }, { passive: true });
}


/* =========================================
   SCROLL ANIMATIONS — IntersectionObserver on .animate-fade-up
========================================= */

function initScrollAnimations() {
  const els = document.querySelectorAll('.animate-fade-up');
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach(el => observer.observe(el));
}


/* =========================================
   CONTACT FORM — validation + Web3Forms fetch submit
   Fields: fieldName, fieldEmail, fieldPhone (optional),
           fieldService, fieldMessage
========================================= */

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const submitBtn   = document.getElementById('formSubmitBtn');
  const formFields  = form.querySelector('.form-fields');
  const formSuccess = document.getElementById('formSuccess');
  const submitError = document.getElementById('formSubmitError');

  form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(field => {
    field.addEventListener('input', () => clearFieldError(field));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    if (submitError) submitError.classList.remove('is-visible');

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        if (formFields) formFields.style.display = 'none';
        if (formSuccess) {
          formSuccess.classList.add('is-visible');
          formSuccess.focus();
        }
      } else {
        throw new Error('Server error');
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send My Request';
      if (submitError) submitError.classList.add('is-visible');
    }
  });
}

function validateForm(form) {
  let valid = true;

  const name = document.getElementById('fieldName');
  if (name && name.value.trim().length < 2) {
    setFieldError(name, 'errorName');
    valid = false;
  }

  const email = document.getElementById('fieldEmail');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    setFieldError(email, 'errorEmail');
    valid = false;
  }

  const phone = document.getElementById('fieldPhone');
  if (phone && phone.value.trim() && phone.value.replace(/\D/g, '').length < 10) {
    setFieldError(phone, 'errorPhone');
    valid = false;
  }

  const service = document.getElementById('fieldService');
  if (service && !service.value) {
    setFieldError(service, 'errorService');
    valid = false;
  }

  const message = document.getElementById('fieldMessage');
  if (message && message.value.trim().length < 10) {
    setFieldError(message, 'errorMessage');
    valid = false;
  }

  if (!valid) {
    const first = form.querySelector('.is-invalid');
    if (first) first.focus();
  }

  return valid;
}

function setFieldError(field, errorId) {
  field.classList.add('is-invalid');
  field.setAttribute('aria-invalid', 'true');
  const err = document.getElementById(errorId);
  if (err) err.classList.add('is-visible');
}

function clearFieldError(field) {
  field.classList.remove('is-invalid');
  field.removeAttribute('aria-invalid');
  const errorId = field.getAttribute('aria-describedby');
  const err = errorId ? document.getElementById(errorId) : null;
  if (err) err.classList.remove('is-visible');
}


/* =========================================
   FOOTER YEAR — auto-updates copyright year
========================================= */

function initFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}
