(() => {
  const filters = [...document.querySelectorAll('[data-genre-filter]')];
  const cards = [...document.querySelectorAll('.v2-library [data-song-card]')];
  const groups = [...document.querySelectorAll('[data-genre-group]')];
  const search = document.querySelector('#v2-search');
  const count = document.querySelector('#v2-results');
  const empty = document.querySelector('#v2-empty');
  let activeGenre = 'all';

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
    });
  }
  search.addEventListener('input', () => {
    if (search.value.trim()) selectGenre('all');
    update();
  });
})();
