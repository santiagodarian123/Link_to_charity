const input = document.getElementById('storeSearch');
const resultsBox = document.getElementById('storeResults');

input.addEventListener('input', () => {
  const term = input.value.toLowerCase();
  resultsBox.innerHTML = '';
  if (!term) { resultsBox.style.display = 'none'; return; }
  const matches = stores.filter(s => s.name.toLowerCase().includes(term));
  if (!matches.length) { resultsBox.style.display = 'none'; return; }
  matches.forEach(s => {
    const a = document.createElement('a');
    a.href = s.url;
    a.textContent = s.name;
    a.target = '_blank';
    resultsBox.appendChild(a);
  });
  resultsBox.style.display = 'block';
});

document.addEventListener('click', e => {
  if (!e.target.closest('#storeSearch')) resultsBox.style.display = 'none';
});
