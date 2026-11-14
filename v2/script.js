// Builds the page from content.js. You normally do not need to edit this file.
const C = CONTENT;
const $ = (id) => document.getElementById(id);

function h(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}
function highlight(text) {                 // *word* becomes a highlighted word
  const frag = document.createDocumentFragment();
  text.split('*').forEach((part, i) => {
    if (!part) return;
    if (i % 2) frag.append(h('span', 'hl', part)); else frag.append(part);
  });
  return frag;
}
function link(cls, label, href) {
  const a = h('a', cls, label);
  a.href = href;
  if (/^https?:/.test(href)) { a.target = '_blank'; a.rel = 'noopener'; }
  if (href.endsWith('.pdf')) a.setAttribute('download', '');
  return a;
}

document.title = C.siteTitle;
$('mark').textContent = C.initial;
$('brand-name').textContent = C.name;
$('badge').textContent = C.badge;
$('hello').textContent = C.hello;
$('headline').append(highlight(C.headline));
$('intro').append(highlight(C.intro));
C.buttons.forEach((b) => $('btns').append(link('btn ' + b.style, b.label, b.href)));

$('initials').textContent = C.initial;
$('avatar').classList.add(C.photoShape === 'circle' ? 'circle' : 'cutout');
if (C.photo) {
  const img = h('img');
  img.src = C.photo; img.alt = 'Portrait of ' + C.name;
  img.onerror = () => img.remove();        // no photo yet: the initial stays visible
  $('avatar').append(img);
}

C.stats.forEach((s) => {
  const d = h('div', 'stat'); d.append(h('strong', '', s.number), h('span', '', s.label)); $('stats').append(d);
});

$('summary-title').textContent = C.summary.title;
C.summary.points.forEach((p) => $('points').append(h('li', '', p)));

$('what-title').textContent = C.what.title;
$('what-sub').textContent = C.what.subtitle;
C.what.items.forEach((w) => {
  const d = h('article', 'what-card');
  const tools = h('div', 'tools');
  w.tools.forEach((t) => tools.append(h('span', '', t)));
  d.append(h('span', 'pill-label', w.label), h('h3', '', w.headline), h('p', '', w.text), tools);
  $('what-grid').append(d);
});

$('work-title').textContent = C.work.title;
C.work.items.forEach((p) => {
  const card = h('article', 'card');
  const thumb = h('div', 'thumb');
  if (p.image) thumb.style.backgroundImage = 'url("' + p.image + '")';
  thumb.append(h('span', 'tag', p.tag));
  const body = h('div', 'card-body');
  body.append(h('h3', '', p.title), h('p', '', p.text));
  if (p.points) {
    const ul = h('ul', 'card-points');
    p.points.forEach((t) => ul.append(h('li', '', t)));
    body.append(ul);
    card.classList.add('featured');
  }
  if (p.stack) body.append(h('p', 'stack', p.stack));
  if (p.demo) body.append(link('more demo-link', 'Try live demo ↗', p.demo));
  body.append(link('more', p.label + ' ↗', p.href));
  card.append(thumb, body); $('cards').append(card);
});

$('contact-title').textContent = C.contact.title;
$('contact-text').textContent = C.contact.text;
$('contact-btns').append(
  link('btn primary', C.contact.email, 'mailto:' + C.contact.email),
  link('btn', 'Resume', C.contact.resume),
  link('btn', 'GitHub', C.contact.github)
);
$('footer').textContent = C.footer;

const dockLinks = C.dock.map((d) => { const a = link('', d.label, '#' + d.target); $('dock').append(a); return a; });
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) dockLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
C.dock.forEach((d) => { const s = $(d.target); if (s) observer.observe(s); });
