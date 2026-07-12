// ===== DARK MODE =====
// Seleciona o botão de dark mode que criamos no HTML
const darkToggle = document.querySelector('.dark-toggle');

// Quando o usuário clicar no botão...
darkToggle.addEventListener('click', () => {
  // Adiciona ou remove a classe 'dark' no body
  // Se tiver dark, remove. Se não tiver, adiciona.
  document.body.classList.toggle('dark');

  // Muda o ícone do botão dependendo do modo atual
  if (document.body.classList.contains('dark')) {
    darkToggle.textContent = '☀️';
  } else {
    darkToggle.textContent = '🌙';
  }

  // Salva a preferência do usuário no navegador
  // Assim quando ele voltar ao site, lembra o modo escolhido
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// ===== CARREGA PREFERÊNCIA SALVA =====
// Quando a página abre, verifica se o usuário já tinha escolhido um tema
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  darkToggle.textContent = '☀️';
}