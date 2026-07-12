// ===== CONFIGURAÇÃO DAS CONVERSÕES DISPONÍVEIS POR TIPO =====
const conversoes = {
  docx: {
    icone: '📄',
    nome: 'Word (.docx)',
    opcoes: ['PDF', 'TXT']
  },
  md: {
    icone: '📝',
    nome: 'Markdown (.md)',
    opcoes: ['PDF', 'HTML', 'TXT']
  },
  txt: {
    icone: '📃',
    nome: 'Texto (.txt)',
    opcoes: ['PDF']
  },
  csv: {
    icone: '📊',
    nome: 'Planilha (.csv)',
    opcoes: ['JSON']
  },
  json: {
    icone: '🔧',
    nome: 'JSON (.json)',
    opcoes: ['CSV']
  },
  jpg: {
    icone: '🖼️',
    nome: 'Imagem (.jpg)',
    opcoes: ['PDF']
  },
  jpeg: {
    icone: '🖼️',
    nome: 'Imagem (.jpeg)',
    opcoes: ['PDF']
  },
  png: {
    icone: '🖼️',
    nome: 'Imagem (.png)',
    opcoes: ['PDF']
  }
};

// ===== VARIÁVEIS GLOBAIS =====
let arquivoAtual = null;
let extensaoAtual = null;
let formatoSelecionado = null;
let conteudoArquivo = null;

// ===== ELEMENTOS =====
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const conversionSection = document.getElementById('conversionSection');
const fileInfo = document.getElementById('fileInfo');
const optionsButtons = document.getElementById('optionsButtons');
const previewBox = document.getElementById('previewBox');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');

// ===== CLIQUE NA DROP ZONE ABRE O SELETOR =====
dropZone.addEventListener('click', (e) => {
  if (e.target.tagName !== 'LABEL' && e.target.tagName !== 'INPUT') {
    fileInput.click();
  }
});
// ===== DRAG AND DROP =====
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  const files = Array.from(e.dataTransfer.files);
  if (files.length > 1) {
    processarMultiplosArquivos(files);
  } else if (files.length === 1) {
    processarArquivo(files[0]);
  }
});

// ===== CLIQUE PARA SELECIONAR =====
fileInput.addEventListener('change', (e) => {
  const files = Array.from(e.target.files);
  if (files.length > 1) {
    processarMultiplosArquivos(files);
  } else if (files.length === 1) {
    processarArquivo(files[0]);
  }
});

// ===== PROCESSA O ARQUIVO =====
async function processarArquivo(file) {
  const nomeArquivo = file.name;
  const extensao = nomeArquivo.split('.').pop().toLowerCase();
  const tamanho = (file.size / 1024).toFixed(1);

  if (!conversoes[extensao]) {
    alert('Formato não suportado. Use: .docx, .md, .txt, .csv, .json, .jpg, .png');
    return;
  }

  arquivoAtual = file;
  extensaoAtual = extensao;
  formatoSelecionado = null;

  // Mostra seção de conversão
  document.querySelector('.upload-section').style.display = 'none';
  conversionSection.classList.remove('hidden');

  // Info do arquivo
  const config = conversoes[extensao];
  fileInfo.innerHTML = `
    <div class="file-icon">${config.icone}</div>
    <div class="file-details">
      <h3>${nomeArquivo}</h3>
      <p>${config.nome} · ${tamanho} KB</p>
    </div>
  `;

  // Opções de conversão
  optionsButtons.innerHTML = '';
  config.opcoes.forEach(opcao => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = `→ ${opcao}`;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      formatoSelecionado = opcao;
      convertBtn.textContent = `⬇️ Converter para ${opcao}`;
      convertBtn.disabled = false;
    });
    optionsButtons.appendChild(btn);
  });

  // Gera preview
  await gerarPreview(file, extensao);
}

// ===== GERA PREVIEW =====
async function gerarPreview(file, extensao) {
  previewBox.innerHTML = '<p style="opacity:0.5">Carregando preview...</p>';

  try {
    if (extensao === 'docx') {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      conteudoArquivo = result.value;
      previewBox.innerHTML = conteudoArquivo;

    } else if (extensao === 'md' || extensao === 'txt') {
      const texto = await file.text();
      conteudoArquivo = texto;
      if (extensao === 'md') {
        previewBox.innerHTML = marked.parse(texto);
      } else {
        previewBox.innerHTML = `<pre style="white-space:pre-wrap">${texto}</pre>`;
      }

    } else if (extensao === 'csv') {
      const texto = await file.text();
      conteudoArquivo = texto;
      const resultado = Papa.parse(texto, { header: true });
      const dados = resultado.data;
      const colunas = resultado.meta.fields;

      let tabela = '<table><thead><tr>';
      colunas.forEach(col => tabela += `<th>${col}</th>`);
      tabela += '</tr></thead><tbody>';
      dados.slice(0, 10).forEach(linha => {
        tabela += '<tr>';
        colunas.forEach(col => tabela += `<td>${linha[col] || ''}</td>`);
        tabela += '</tr>';
      });
      tabela += '</tbody></table>';
      if (dados.length > 10) {
        tabela += `<p style="opacity:0.5;margin-top:0.5rem;font-size:0.8rem">Mostrando 10 de ${dados.length} linhas</p>`;
      }
      previewBox.innerHTML = tabela;

    } else if (extensao === 'json') {
      const texto = await file.text();
      conteudoArquivo = texto;
      const json = JSON.parse(texto);
      previewBox.innerHTML = `<pre style="white-space:pre-wrap;font-size:0.8rem">${JSON.stringify(json, null, 2)}</pre>`;

    } else if (['jpg', 'jpeg', 'png'].includes(extensao)) {
      const url = URL.createObjectURL(file);
      conteudoArquivo = url;
      previewBox.innerHTML = `<img src="${url}" alt="Preview" />`;
    }

  } catch (err) {
    previewBox.innerHTML = '<p style="opacity:0.5">Não foi possível gerar o preview.</p>';
  }
}

// ===== CONVERTE O ARQUIVO =====
convertBtn.addEventListener('click', async () => {
  if (!formatoSelecionado || !arquivoAtual) return;

  convertBtn.textContent = '⏳ Convertendo...';
  convertBtn.disabled = true;

  try {
    await executarConversao(extensaoAtual, formatoSelecionado);
  } catch (err) {
    alert('Erro ao converter. Tente novamente.');
    console.error(err);
  }

  convertBtn.textContent = `✅ Convertido! Baixar novamente`;
  convertBtn.disabled = false;
});

// ===== EXECUTA A CONVERSÃO =====
async function executarConversao(de, para) {
  const nomeBase = arquivoAtual.name.replace(/\.[^/.]+$/, '');

  // WORD → PDF
  if (de === 'docx' && para === 'PDF') {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const texto = await extrairTextoDocx(arquivoAtual);
    const linhas = doc.splitTextToSize(texto, 180);
    let y = 20;
    linhas.forEach(linha => {
      if (y > 280) { doc.addPage(); y = 20; }
      doc.text(linha, 15, y);
      y += 7;
    });
    doc.save(`${nomeBase}.pdf`);
  }

  // WORD → TXT
  else if (de === 'docx' && para === 'TXT') {
    const texto = await extrairTextoDocx(arquivoAtual);
    baixarArquivo(texto, `${nomeBase}.txt`, 'text/plain');
  }

  // MARKDOWN → PDF
  else if (de === 'md' && para === 'PDF') {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const linhas = doc.splitTextToSize(conteudoArquivo, 180);
    let y = 20;
    linhas.forEach(linha => {
      if (y > 280) { doc.addPage(); y = 20; }
      doc.text(linha, 15, y);
      y += 7;
    });
    doc.save(`${nomeBase}.pdf`);
  }

  // MARKDOWN → HTML
  else if (de === 'md' && para === 'HTML') {
    const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>${nomeBase}</title>
  <style>
    body { font-family: 'Segoe UI', sans-serif; max-width: 800px; margin: 2rem auto; padding: 0 1rem; line-height: 1.7; }
    h1,h2,h3 { color: #1a73e8; }
    code { background: #f0f4ff; padding: 0.2rem 0.4rem; border-radius: 4px; }
    pre { background: #f0f4ff; padding: 1rem; border-radius: 8px; overflow-x: auto; }
  </style>
</head>
<body>${marked.parse(conteudoArquivo)}</body>
</html>`;
    baixarArquivo(html, `${nomeBase}.html`, 'text/html');
  }

  // MARKDOWN → TXT
  else if (de === 'md' && para === 'TXT') {
    baixarArquivo(conteudoArquivo, `${nomeBase}.txt`, 'text/plain');
  }

  // TXT → PDF
  else if (de === 'txt' && para === 'PDF') {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const linhas = doc.splitTextToSize(conteudoArquivo, 180);
    let y = 20;
    linhas.forEach(linha => {
      if (y > 280) { doc.addPage(); y = 20; }
      doc.text(linha, 15, y);
      y += 7;
    });
    doc.save(`${nomeBase}.pdf`);
  }

  // CSV → JSON
  else if (de === 'csv' && para === 'JSON') {
    const resultado = Papa.parse(conteudoArquivo, { header: true });
    const json = JSON.stringify(resultado.data, null, 2);
    baixarArquivo(json, `${nomeBase}.json`, 'application/json');
  }
  // JSON → CSV
  else if (de === 'json' && para === 'CSV') {
    const json = JSON.parse(conteudoArquivo);
    const csv = Papa.unparse(json);
    baixarArquivo(csv, `${nomeBase}.csv`, 'text/csv');
  }

  // IMAGEM → PDF
  else if (['jpg', 'jpeg', 'png'].includes(de) && para === 'PDF') {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const imgData = await imagemParaBase64(arquivoAtual);
    const formato = de === 'png' ? 'PNG' : 'JPEG';
    doc.addImage(imgData, formato, 10, 10, 190, 0);
    doc.save(`${nomeBase}.pdf`);
  }
}

// ===== FUNÇÕES AUXILIARES =====
async function extrairTextoDocx(file) {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value;
}

function baixarArquivo(conteudo, nome, tipo) {
  const blob = new Blob([conteudo], { type: tipo });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nome;
  a.click();
  URL.revokeObjectURL(url);
}

async function imagemParaBase64(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(file);
  });
}

// ===== RESETAR =====
resetBtn.addEventListener('click', () => {
  arquivoAtual = null;
  extensaoAtual = null;
  formatoSelecionado = null;
  conteudoArquivo = null;
  fileInput.value = '';
  conversionSection.classList.add('hidden');
  document.querySelector('.upload-section').style.display = 'block';
  convertBtn.textContent = 'Selecione um formato acima';
  convertBtn.disabled = true;
});