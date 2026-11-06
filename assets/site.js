const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('#nav-links');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  nav?.classList.toggle('open', open);
});
nav?.addEventListener('click', event => {
  if (event.target.closest('a')) { nav.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false'); toggle?.setAttribute('aria-label', 'Open menu'); }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') { nav?.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false'); toggle?.setAttribute('aria-label', 'Open menu'); }
});
const modeButtons = [...document.querySelectorAll('[data-mode]')];
function selectMode(button) {
  const server = button.dataset.mode === 'server';
  modeButtons.forEach(item => { item.setAttribute('aria-selected', String(item === button)); item.tabIndex = item === button ? 0 : -1; });
  document.querySelector('#connection-panel').setAttribute('aria-labelledby', button.id);
  document.querySelector('#node-title').textContent = server ? 'Scrawl Server' : 'Scrawl Desktop';
  document.querySelector('#node-subtitle').textContent = server ? 'HTTPS · Shared workspace' : 'Local · Personal workspace';
  document.querySelector('#mode-note').textContent = server ? 'Connect local tools, supported cloud clients, and always-on bots to a shared workspace over HTTPS.' : 'Connect local MCP tools like Codex, Claude Code, or Antigravity to your personal Scrawl workspace on your machine. Cloud connections require Server.';
  document.querySelector('#diagram-badge').textContent = server ? 'SERVER / MULTI-USER' : 'DESKTOP / SINGLE USER';
  document.querySelectorAll('.cloud-node').forEach(item => item.classList.toggle('off', !server));
}
modeButtons.forEach((button, index) => {
  button.addEventListener('click', () => selectMode(button));
  button.addEventListener('keydown', event => {
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      const next = event.key === 'Home' ? modeButtons[0] : event.key === 'End' ? modeButtons.at(-1) : modeButtons[(index + 1) % modeButtons.length];
      next.focus(); selectMode(next);
    }
  });
});
document.querySelectorAll('.copy-button').forEach(button => button.addEventListener('click', async () => {
  const content = button.parentElement.querySelector('pre').textContent;
  try { await navigator.clipboard.writeText(content); button.textContent = 'Copied ✓'; setTimeout(() => button.textContent = 'Copy', 2000); }
  catch { button.textContent = 'Select text to copy'; }
}));
if (document.querySelector('.docs-nav')) {
  const sections = [...document.querySelectorAll('.doc-article section')];
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) document.querySelectorAll('.docs-nav a').forEach(a => a.classList.toggle('current', a.hash === '#' + entry.target.id));
  }), {rootMargin: '-100px 0px -60% 0px'});
  sections.forEach(section => observer.observe(section));
}
