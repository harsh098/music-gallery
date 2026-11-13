(() => {
  const filters = [...document.querySelectorAll('[data-genre-filter]')];
  const cards = [...document.querySelectorAll('.collection [data-song-card]')];
  const groups = [...document.querySelectorAll('[data-genre-group]')];
  const search = document.querySelector('#song-search');
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#empty-state');
  let activeGenre = 'all';

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

  filters.forEach((button) => button.addEventListener('click', () => {
    activeGenre = button.dataset.genreFilter;
    filters.forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle('is-active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    update();
  }));
  search.addEventListener('input', update);
})();

