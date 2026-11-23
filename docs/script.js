const searchInput = document.querySelector('[data-doc-search]');
const cards = [...document.querySelectorAll('[data-search-card]')];
const empty = document.querySelector('[data-search-empty]');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach((card) => {
      const matches = card.textContent.toLowerCase().includes(query);
      card.hidden = query !== '' && !matches;
      if (!card.hidden) visible += 1;
    });

    if (empty) empty.classList.toggle('visible', visible === 0);
  });
}

const menuButton = document.querySelector('[data-menu-button]');
const sidebar = document.querySelector('[data-sidebar]');

if (menuButton && sidebar) {
  menuButton.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}
