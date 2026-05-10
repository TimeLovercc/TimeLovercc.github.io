document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('dark-mode-toggle');
  if (!toggle) return;
  var saved = localStorage.getItem('theme');
  if (saved) toggle.mode = saved;
  toggle.addEventListener('colorschemechange', function(e) {
    var theme = e.detail.colorScheme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
});
