(() => {
  const entry = document.querySelector('#v2-entry');
  const enter = document.querySelector('#v2-enter');
  const library = document.querySelector('#library');
  const main = document.querySelector('.v2-shell > main');
  const header = document.querySelector('.v2-header');
  const footer = document.querySelector('.v2-footer');
  const filters = [...document.querySelectorAll('[data-genre-filter]')];
  const cards = [...document.querySelectorAll('.v2-library [data-song-card]')];
  const groups = [...document.querySelectorAll('[data-genre-group]')];
  const search = document.querySelector('#v2-search');
  const count = document.querySelector('#v2-results');
  const empty = document.querySelector('#v2-empty');
  let activeGenre = 'all';

  function dismissEntry() {
    entry.hidden = true;
    document.documentElement.classList.remove('v2-entry-open');
    main.removeAttribute('inert');
    header.removeAttribute('inert');
    footer.removeAttribute('inert');
    main.focus({ preventScroll: true });
  }

  document.documentElement.classList.add('v2-entry-open');
  main.setAttribute('inert', '');
  header.setAttribute('inert', '');
  footer.setAttribute('inert', '');
  enter.focus();
  enter.addEventListener('click', dismissEntry);
  entry.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') dismissEntry();
    if (event.key === 'Tab') {
      event.preventDefault();
      enter.focus();
    }
  });

  function selectGenre(genre) {
    activeGenre = genre;
    for (const filter of filters) {
      const selected = filter.dataset.genreFilter === genre;
      filter.classList.toggle('is-active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    }
  }

  function update() {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    for (const card of cards) {
      const matches = (activeGenre === 'all' || card.dataset.genre === activeGenre) && card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) visible++;
    }
    for (const group of groups) {
      group.hidden = !group.querySelector('[data-song-card]:not([hidden])');
    }
    count.textContent = `SHOWING ${visible} ${visible === 1 ? 'TRACK' : 'TRACKS'}`;
    empty.hidden = visible !== 0;
  }

  for (const filter of filters) {
    filter.addEventListener('click', () => {
      selectGenre(filter.dataset.genreFilter);
      update();
      library.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  search.addEventListener('input', () => {
    if (search.value.trim()) selectGenre('all');
    update();
  });
})();
