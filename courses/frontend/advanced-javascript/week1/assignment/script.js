// task: 1 doubling of number
let  numbers = [1, 2, 3, 4 ]

let newNumbers = numbers.filter(number => number % 2 !== 0).map(number => number * 2)
// console.log(newNumbers)

// task: 3 working with movies

document.addEventListener('DOMContentLoaded', () => {
  const shortTitleMovies    = movies.filter(m => m.title.length <= 5);
  const longTitleMovies     = movies.filter(m => m.title.length >= 10);
  const eightiesMovies      = movies.filter(m => m.year >= 1980 && m.year <= 1989);
  const moviesWithTag       = movies.map(m => ({
    ...m,
    tag: m.rating >= 7 ? 'Good' : m.rating >= 4 ? 'Average' : 'Bad'
  }));
  const aboveSixMovies  = movies.filter(m => m.rating > 6);  
  const aboveSixRatings = aboveSixMovies.map(m => m.rating); 
  const keywordMovies       = movies.filter(m =>
    ['Surfer', 'Alien', 'Benjamin'].some(kw => m.title.includes(kw))
  );
  const duplicateWordMovies = movies.filter(movie => {
    const words = movie.title.toLowerCase().match(/\b\w+\b/g) || [];
    const seen  = new Set();
    return words.some(w => { if (seen.has(w)) return true; seen.add(w); return false; });
  });
  const averageRating = movies.reduce((acc, m) => acc + m.rating, 0) / movies.length;
  const movieStats    = movies.reduce((acc, m) => {
    m.rating >= 7 ? acc.goodMovies++ : m.rating >= 4 ? acc.averageMovies++ : acc.badMovies++;
    return acc;
  }, { goodMovies: 0, averageMovies: 0, badMovies: 0 });

  function tagColorClass(tag) {
    if (tag === 'Good')    return 'tag-good';
    if (tag === 'Average') return 'tag-average';
    return 'tag-bad';
  }

  function makeMovieCard(m, showTag = false) {
    const tagHtml = showTag
      ? `<span class="${tagColorClass(m.tag)}" style="font-size:.68rem;margin-left:auto">${m.tag}</span>`
      : '';
    return `
      <div class="movie-card">
        <div class="card-title">${m.title}</div>
        <div class="card-meta">
          <span class="rating-badge">★ ${m.rating}</span>
          <span>${m.year}</span>
          ${tagHtml}
        </div>
      </div>`;
  }

  function populateGrid(id, arr, showTag = false, limit = 200) {
    document.getElementById(id).innerHTML =
      arr.slice(0, limit).map(m => makeMovieCard(m, showTag)).join('');
  }

  function setResultCount(id, arr) {
    document.getElementById(id).textContent = arr.length.toLocaleString() + ' results';
  }

  document.getElementById('total-count').textContent = movies.length.toLocaleString();
  document.getElementById('avg-chip').textContent    = averageRating.toFixed(1);

  const years = movies.map(m => m.year);
  document.getElementById('year-range').textContent  =
    Math.min(...years) + '–' + Math.max(...years);

  document.getElementById('cnt-short').textContent  = shortTitleMovies.length;
  document.getElementById('cnt-long').textContent   = longTitleMovies.length;
  document.getElementById('cnt-80s').textContent    = eightiesMovies.length;
  document.getElementById('cnt-tagged').textContent = moviesWithTag.length;
  document.getElementById('cnt-above6').textContent = aboveSixRatings.length;
  document.getElementById('cnt-dup').textContent    = duplicateWordMovies.length;

  document.getElementById('stat-good').textContent = movieStats.goodMovies.toLocaleString();
  document.getElementById('stat-avg').textContent  = movieStats.averageMovies.toLocaleString();
  document.getElementById('stat-bad').textContent  = movieStats.badMovies.toLocaleString();

  setResultCount('rc-short', shortTitleMovies);
  populateGrid('grid-short', shortTitleMovies);

  setResultCount('rc-long', longTitleMovies);
  populateGrid('grid-long', longTitleMovies);

  setResultCount('rc-80s', eightiesMovies);
  populateGrid('grid-eighties', eightiesMovies);

  setResultCount('rc-tagged', moviesWithTag);
  populateGrid('grid-tagged', moviesWithTag, true);

  setResultCount('rc-above6', aboveSixMovies);

  const maxR = Math.max(...aboveSixMovies);
  document.getElementById('list-above6').innerHTML =
    aboveSixMovies.slice(0, 120).map((m, i) => `
      <div class="rating-bar-row">
        <span class="idx">${i + 1}</span>
        <span class="bar-title">${m.title}</span>
        
        <span class="val">${m.rating}</span>
      </div>`).join('');

  const kwWords  = ['Surfer', 'Alien', 'Benjamin'];
  const kwCounts = kwWords.map(kw => ({
    kw,
    count: movies.filter(m => m.title.includes(kw)).length
  }));

  document.getElementById('kw-summary').innerHTML =
    kwCounts.map(k => `
      <div class="kw-chip">
        <div class="kw-word">${k.kw}</div>
        <div class="kw-count">${k.count}</div>
      </div>`).join('') +
    `<div class="kw-chip total">
      <div class="kw-word">Total Combined</div>
      <div class="kw-count">${keywordMovies.length}</div>
    </div>`;

  populateGrid('grid-keywords', keywordMovies);


  setResultCount('rc-dup', duplicateWordMovies);

  const stopWords = new Set(['the','a','an','and','of','in','to','is','at','or','for','it','on','by','as']);

  document.getElementById('tbody-dup').innerHTML =
    duplicateWordMovies.slice(0, 80).map((m, i) => {
      const words = m.title.toLowerCase().match(/\b\w+\b/g) || [];
      const seen  = new Set();
      const dups  = new Set();
      words.forEach(w => {
        if (!stopWords.has(w)) {
          if (seen.has(w)) dups.add(w);
          seen.add(w);
        }
      });
      const dupHtml = dups.size > 0
        ? [...dups].map(d => `<span class="dup-word">${d}</span>`).join('')
        : '<span class="dup-stopword-note">stopword only</span>';

      return `
        <tr>
          <td class="row-num">${i + 1}</td>
          <td class="row-title">${m.title}</td>
          <td>${m.year}</td>
          <td><span class="rating-badge">★ ${m.rating}</span></td>
          <td>${dupHtml}</td>
        </tr>`;
    }).join('');

  document.getElementById('avg-big').textContent = averageRating.toFixed(2);

  const decades = {};
  movies.forEach(m => {
    const d = Math.floor(m.year / 10) * 10;
    if (!decades[d]) decades[d] = { count: 0, ratingSum: 0 };
    decades[d].count++;
    decades[d].ratingSum += m.rating;
  });

  const decadeRows = Object.entries(decades)
    .sort((a, b) => a[0] - b[0])
    .map(([d, v]) => `
      <tr>
        <td class="decade-label">${d}s</td>
        <td>${v.count}</td>
        <td><span class="rating-badge">★ ${(v.ratingSum / v.count).toFixed(2)}</span></td>
        <td>
          <div class="decade-bar-track bar-track">
            <div class="bar-fill" style="width:${(v.count / movies.length * 100).toFixed(1)}%"></div>
          </div>
        </td>
      </tr>`).join('');

  document.getElementById('decade-section').innerHTML = `
    <p class="decade-section-title">Avg Rating by Decade</p>
    <table class="decade-table">
      <thead>
        <tr>
          <th>Decade</th>
          <th>Films</th>
          <th>Avg Rating</th>
          <th>Share</th>
        </tr>
      </thead>
      <tbody>${decadeRows}</tbody>
    </table>`;

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('panel-' + btn.dataset.panel).classList.add('active');
    });
  });

}); 