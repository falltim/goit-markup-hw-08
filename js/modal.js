(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  const toggleModal = () => {
    const isMenuOpen =
      refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openModalBtn.setAttribute('aria-expanded', !isMenuOpen);
    refs.modal.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);

    refs.modal.classList.toggle('is-hidden');
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
})();