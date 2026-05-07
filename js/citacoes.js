// ===== FORMULÁRIOS POR TIPO DE CITAÇÃO =====
// Cada tipo tem campos diferentes — aqui definimos quais campos aparecem em cada um
const forms = {
  livro: [
    { id: 'autor', label: 'Autor(es) (ex: SILVA, João)' },
    { id: 'titulo', label: 'Título do livro' },
    { id: 'edicao', label: 'Edição (ex: 2. ed.)' },
    { id: 'local', label: 'Local de publicação (cidade)' },
    { id: 'editora', label: 'Editora' },
    { id: 'ano', label: 'Ano de publicação' },
    { id: 'trecho', label: 'Trecho do autor para citação direta (opcional)' },
    { id: 'pagina', label: 'Página do trecho (opcional, ex: 45)' },
  ],
  site: [
    { id: 'autor', label: 'Autor(es) ou organização (opcional)' },
    { id: 'titulo', label: 'Título da página' },
    { id: 'site', label: 'Nome do site' },
    { id: 'url', label: 'URL completa' },
    { id: 'acesso', label: 'Data de acesso (ex: 10 maio 2025)' },
  ],
  artigo: [
    { id: 'autor', label: 'Autor(es) (ex: SILVA, João)' },
    { id: 'titulo', label: 'Título do artigo' },
    { id: 'revista', label: 'Nome da revista/jornal' },
    { id: 'local', label: 'Local de publicação' },
    { id: 'volume', label: 'Volume (ex: v. 10)' },
    { id: 'numero', label: 'Número (ex: n. 2)' },
    { id: 'paginas', label: 'Páginas (ex: p. 45-60)' },
    { id: 'ano', label: 'Ano de publicação' },
    { id: 'trecho', label: 'Trecho do autor para citação direta (opcional)' },
    { id: 'pagina', label: 'Página do trecho (opcional, ex: 45)' },
  ],
  cientifico: [
    { id: 'autor', label: 'Autor(es) (ex: SILVA, João)' },
    { id: 'titulo', label: 'Título do artigo' },
    { id: 'revista', label: 'Nome da revista científica' },
    { id: 'volume', label: 'Volume (ex: v. 10)' },
    { id: 'numero', label: 'Número (ex: n. 2)' },
    { id: 'paginas', label: 'Páginas (ex: p. 45-60)' },
    { id: 'ano', label: 'Ano de publicação' },
    { id: 'doi', label: 'DOI (opcional)' },
    { id: 'trecho', label: 'Trecho do autor para citação direta (opcional)' },
    { id: 'pagina', label: 'Página do trecho (opcional, ex: 45)' },
  ],
  capitulo: [
    { id: 'autor', label: 'Autor(es) do capítulo' },
    { id: 'titulo', label: 'Título do capítulo' },
    { id: 'organizador', label: 'Organizador(es) do livro (ex: SOUZA, M.)' },
    { id: 'livro', label: 'Título do livro' },
    { id: 'edicao', label: 'Edição (ex: 2. ed.)' },
    { id: 'local', label: 'Local de publicação' },
    { id: 'editora', label: 'Editora' },
    { id: 'ano', label: 'Ano de publicação' },
    { id: 'paginas', label: 'Páginas do capítulo (ex: p. 45-60)' },
    { id: 'trecho', label: 'Trecho do autor para citação direta (opcional)' },
    { id: 'pagina', label: 'Página do trecho (opcional, ex: 45)' },
  ],
  tcc: [
    { id: 'autor', label: 'Autor (ex: SILVA, João)' },
    { id: 'titulo', label: 'Título do trabalho' },
    { id: 'tipo', label: 'Tipo (ex: Dissertação, Tese, TCC)' },
    { id: 'curso', label: 'Curso / Programa' },
    { id: 'instituicao', label: 'Instituição' },
    { id: 'local', label: 'Cidade' },
    { id: 'ano', label: 'Ano' },
    { id: 'paginas', label: 'Total de páginas (ex: 120 f.)' },
    { id: 'trecho', label: 'Trecho do autor para citação direta (opcional)' },
    { id: 'pagina', label: 'Página do trecho (opcional, ex: 45)' },
  ],
};

// ===== RENDERIZA O FORMULÁRIO =====
// Quando o usuário clica em um tipo, essa função cria os campos na tela
function renderForm(type) {
  const container = document.getElementById('citationForm');
  container.innerHTML = '';

  forms[type].forEach(field => {
    const group = document.createElement('div');
    group.className = 'form-group';
    group.innerHTML = `
      <label for="${field.id}">${field.label}</label>
      <input type="text" id="${field.id}" placeholder="${field.label}" />
    `;
    container.appendChild(group);
  });
}

// ===== GERA A CITAÇÃO ABNT =====
// Cada tipo tem uma regra diferente de formatação ABNT
function generateCitation(type) {
  const get = id => {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
  };

  switch (type) {
    case 'livro': {
      const autor = get('autor');
      const titulo = get('titulo');
      const edicao = get('edicao');
      const local = get('local');
      const editora = get('editora');
      const ano = get('ano');
      if (!autor || !titulo || !local || !editora || !ano) return null;
      const edicaoStr = edicao ? ` ${edicao}.` : '';
      return `${autor}. <strong>${titulo}</strong>.${edicaoStr} ${local}: ${editora}, ${ano}.`;
    }

    case 'site': {
      const autor = get('autor');
      const titulo = get('titulo');
      const site = get('site');
      const url = get('url');
      const acesso = get('acesso');
      if (!titulo || !url || !acesso) return null;
      const autorStr = autor ? `${autor}. ` : '';
      const siteStr = site ? ` <strong>${site}</strong>.` : '';
      return `${autorStr}<strong>${titulo}</strong>.${siteStr} Disponível em: ${url}. Acesso em: ${acesso}.`;
    }

    case 'artigo': {
      const autor = get('autor');
      const titulo = get('titulo');
      const revista = get('revista');
      const local = get('local');
      const volume = get('volume');
      const numero = get('numero');
      const paginas = get('paginas');
      const ano = get('ano');
      if (!autor || !titulo || !revista || !ano) return null;
      const detalhes = [volume, numero, paginas].filter(Boolean).join(', ');
      return `${autor}. ${titulo}. <strong>${revista}</strong>, ${local ? local + ', ' : ''}${detalhes}${detalhes ? ', ' : ''}${ano}.`;
    }

    case 'cientifico': {
      const autor = get('autor');
      const titulo = get('titulo');
      const revista = get('revista');
      const volume = get('volume');
      const numero = get('numero');
      const paginas = get('paginas');
      const ano = get('ano');
      const doi = get('doi');
      if (!autor || !titulo || !revista || !ano) return null;
      const detalhes = [volume, numero, paginas].filter(Boolean).join(', ');
      const doiStr = doi ? ` DOI: ${doi}.` : '';
      return `${autor}. ${titulo}. <strong>${revista}</strong>, ${detalhes}${detalhes ? ', ' : ''}${ano}.${doiStr}`;
    }

    case 'capitulo': {
      const autor = get('autor');
      const titulo = get('titulo');
      const organizador = get('organizador');
      const livro = get('livro');
      const edicao = get('edicao');
      const local = get('local');
      const editora = get('editora');
      const ano = get('ano');
      const paginas = get('paginas');
      if (!autor || !titulo || !livro || !local || !editora || !ano) return null;
      const edicaoStr = edicao ? ` ${edicao}.` : '';
      const orgStr = organizador ? ` In: ${organizador} (org.).` : ' In:';
      return `${autor}. ${titulo}.${orgStr} <strong>${livro}</strong>.${edicaoStr} ${local}: ${editora}, ${ano}. ${paginas}.`;
    }

    case 'tcc': {
      const autor = get('autor');
      const titulo = get('titulo');
      const tipo = get('tipo');
      const curso = get('curso');
      const instituicao = get('instituicao');
      const local = get('local');
      const ano = get('ano');
      const paginas = get('paginas');
      if (!autor || !titulo || !tipo || !instituicao || !local || !ano) return null;
      const paginasStr = paginas ? ` ${paginas}.` : '';
      return `${autor}. <strong>${titulo}</strong>. ${ano}.${paginasStr} ${tipo} (${curso}) — ${instituicao}, ${local}, ${ano}.`;
    }

    default:
      return null;
  }
}

// ===== BUSCA NA API =====
// Busca livros na Google Books API pelo termo digitado
async function searchBooks(query) {
  const resultsDiv = document.getElementById('searchResults');
  resultsDiv.innerHTML = '<p style="opacity:0.6; font-size:0.9rem;">Buscando...</p>';
  resultsDiv.classList.remove('hidden');

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=8`
    );
    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      resultsDiv.innerHTML = '<p style="opacity:0.6; font-size:0.9rem;">Nenhum resultado encontrado.</p>';
      return;
    }

    resultsDiv.innerHTML = '';

    data.items.forEach(item => {
      const info = item.volumeInfo;
      const titulo = info.title || 'Sem título';
      const autores = info.authors ? info.authors.join(', ') : 'Autor desconhecido';
      const ano = info.publishedDate ? info.publishedDate.substring(0, 4) : '';
      const editora = info.publisher || '';

      const div = document.createElement('div');
      div.className = 'result-item';
      div.innerHTML = `
        <h4>${titulo}</h4>
        <p>${autores} ${ano ? '· ' + ano : ''} ${editora ? '· ' + editora : ''}</p>
      `;

      // Quando clicar no resultado, preenche o formulário automaticamente
      div.addEventListener('click', () => {
        // Ativa o tipo livro
        document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-type="livro"]').classList.add('active');
        currentType = 'livro';
        renderForm('livro');

        // Formata o autor no padrão ABNT: SOBRENOME, Nome
        let autorFormatado = '';
        if (info.authors && info.authors.length > 0) {
          autorFormatado = info.authors.map(a => {
            const partes = a.trim().split(' ');
            if (partes.length === 1) return partes[0].toUpperCase();
            const sobrenome = partes[partes.length - 1].toUpperCase();
            const nomes = partes.slice(0, -1).join(' ');
            return `${sobrenome}, ${nomes}`;
          }).join('; ');
        }

        // Preenche os campos
        document.getElementById('autor').value = autorFormatado;
        document.getElementById('titulo').value = titulo;
        document.getElementById('editora').value = editora;
        document.getElementById('ano').value = ano;
        document.getElementById('local').value = '';
        document.getElementById('edicao').value = '';

        // Esconde os resultados
        resultsDiv.classList.add('hidden');
        resultsDiv.innerHTML = '';
      });

      resultsDiv.appendChild(div);
    });

  } catch (error) {
    resultsDiv.innerHTML = '<p style="opacity:0.6; font-size:0.9rem;">Erro ao buscar. Verifique sua conexão.</p>';
  }
}

// ===== INICIALIZAÇÃO =====
let currentType = 'livro';
renderForm('livro');

// Troca de tipo ao clicar nos botões
document.querySelectorAll('.type-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentType = btn.dataset.type;
    renderForm(currentType);
    document.getElementById('resultSection').classList.add('hidden');
  });
});

// Botão de busca
document.getElementById('searchBtn').addEventListener('click', () => {
  const query = document.getElementById('searchInput').value.trim();
  if (query) searchBooks(query);
});

// Busca ao pressionar Enter
document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const query = e.target.value.trim();
    if (query) searchBooks(query);
  }
});

// Gerar citação
document.getElementById('generateBtn').addEventListener('click', () => {
  const citation = generateCitation(currentType);
  const resultSection = document.getElementById('resultSection');
  const resultDiv = document.getElementById('citationResult');

  if (!citation) {
    alert('Preencha os campos obrigatórios antes de gerar a citação.');
    return;
  }

  resultDiv.innerHTML = citation;
  resultSection.classList.remove('hidden');
  resultSection.scrollIntoView({ behavior: 'smooth' });
});

// Copiar citação
document.getElementById('copyBtn').addEventListener('click', () => {
  const text = document.getElementById('citationResult').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.textContent = '✅ Copiado!';
    setTimeout(() => btn.textContent = '📋 Copiar citação', 2000);
  });
});