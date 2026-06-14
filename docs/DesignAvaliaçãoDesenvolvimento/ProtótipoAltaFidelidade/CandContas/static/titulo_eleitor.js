// ── Navegação entre páginas ──
function goTo(pageId) {
    document.querySelectorAll('[id^="page-"]').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    window.scrollTo(0, 0);
    if (pageId === 'page-confirmacao') preencherSumario();
}

// ── Lógica da tela de multa ──
function handleMulta(val) {
    document.getElementById('multa-result-nao').classList.add('hidden');
    document.getElementById('multa-result-sim').classList.add('hidden');
    if (val === 'nao') document.getElementById('multa-result-nao').classList.remove('hidden');
    if (val === 'sim') document.getElementById('multa-result-sim').classList.remove('hidden');
}

function avancarDaMulta() {
    const sel = document.querySelector('input[name="multa"]:checked');
    if (!sel) { alert('Por favor, responda se você já completou 19 anos antes de continuar.'); return; }
    if (sel.value === 'sim') {
        const compOk = !document.getElementById('comprovante-ok').classList.contains('hidden');
        if (!compOk) { alert('É necessário quitar a multa e inserir o comprovante de pagamento antes de prosseguir.'); return; }
    }
    goTo('page-identificacao');
}

function selectPay(btn) {
    document.querySelectorAll('.pay-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

function jaPagei() {
    document.getElementById('comprovante-area').classList.remove('hidden');
}

function simularPagamento() {
    alert('Em um sistema real, aqui seria aberta a página de pagamento da GRU. Para este protótipo, clique em "Já paguei" para simular a inserção do comprovante.');
}

// ── Upload simulado ──
function simulateUpload(area, okId) {
    setTimeout(() => {
        area.classList.add('uploaded');
        area.innerHTML = '<i class="fas fa-check-circle" style="color:var(--color-green)"></i><p style="color:var(--color-green);font-weight:600;">Arquivo carregado</p><small>Clique para substituir</small>';
        document.getElementById(okId).classList.remove('hidden');
    }, 600);
}

// ── Busca CEP simulada ──
function buscarCEP() {
    const cep = document.getElementById('cep').value.replace(/\D/g,'');
    if (cep.length < 8) { alert('Digite um CEP válido.'); return; }
    // Simula preenchimento
    document.getElementById('logradouro').value = 'SQN 210 Bloco G';
    document.getElementById('bairro').value = 'Asa Norte';
    document.getElementById('municipio').value = 'Brasília';
    document.getElementById('uf-end').value = 'DF';
}

// ── Sumário na confirmação ──
function preencherSumario() {
    const v = (id) => document.getElementById(id)?.value || '—';
    document.getElementById('s-nome').textContent  = v('nome') || '—';
    document.getElementById('s-nasc').textContent  = v('nascimento') || '—';
    document.getElementById('s-cpf').textContent   = v('cpf') || '—';
    document.getElementById('s-mae').textContent   = v('mae') || '—';
    document.getElementById('s-cep').textContent   = v('cep') || '—';
    document.getElementById('s-log').textContent   = (v('logradouro') + ', ' + v('numero')).replace(', —','') || '—';
    document.getElementById('s-bairro').textContent= v('bairro') || '—';
    document.getElementById('s-mun').textContent   = (v('municipio') + ' / ' + v('uf-end')).replace(' / —','') || '—';
    document.getElementById('s-email').textContent = v('email') || '—';
    document.getElementById('s-tel').textContent   = v('tel') || '—';
}

// ── Confirmação final ──
function confirmar() {
    if (!document.getElementById('check-declaro').checked) {
        alert('É necessário marcar a declaração de veracidade das informações para prosseguir.');
        return;
    }
    // Protocolo fixo do fluxo
    document.getElementById('num-protocolo').textContent = 'TRE-2026-000001';
    goTo('page-protocolo');
}

// ── Máscaras ──
function maskCPF(el) {
    let v = el.value.replace(/\D/g,'');
    if (v.length > 11) v = v.slice(0,11);
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    el.value = v;
}
function maskCEP(el) {
    let v = el.value.replace(/\D/g,'');
    if (v.length > 8) v = v.slice(0,8);
    v = v.replace(/(\d{5})(\d)/, '$1-$2');
    el.value = v;
}
function maskTel(el) {
    let v = el.value.replace(/\D/g,'');
    if (v.length > 11) v = v.slice(0,11);
    v = v.replace(/(\d{2})(\d)/, '($1) $2');
    v = v.replace(/(\d{5})(\d)/, '$1-$2');
    el.value = v;
}

// ── Card home ──
document.getElementById('card-titulo-novo').addEventListener('click', () => goTo('page-documentos'));

// ── Avançar da tela de upload de documentos para a verificação simulada ──
function avancarDocumentos() {
    const okSelfie = !document.getElementById('ok-selfie').classList.contains('hidden');
    const okRg = !document.getElementById('ok-rg').classList.contains('hidden');
    const okComp = !document.getElementById('ok-comp').classList.contains('hidden');
    if (!okSelfie || !okRg || !okComp) {
        alert('Anexe todos os documentos obrigatórios antes de avançar.');
        return;
    }
    goTo('page-verificando');
    iniciarVerificacaoDocumentos();
}

// ── Animação fictícia de análise/verificação dos documentos ──
function iniciarVerificacaoDocumentos() {
    // Reseta estado da tela
    document.getElementById('verify-loading').classList.remove('hidden');
    document.getElementById('verify-success').classList.add('hidden');
    ['vchk-1','vchk-2','vchk-3'].forEach(id => {
        const li = document.getElementById(id);
        li.classList.remove('checked');
        li.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> ' + li.textContent.trim();
    });

    const itens = ['vchk-1','vchk-2','vchk-3'];
    itens.forEach((id, i) => {
        setTimeout(() => {
            const li = document.getElementById(id);
            li.classList.add('checked');
            li.innerHTML = '<i class="fas fa-check-circle"></i> ' + li.textContent.trim();
        }, 700 * (i + 1));
    });

    // Após a "análise", exibe a confirmação de sucesso
    setTimeout(() => {
        document.getElementById('verify-loading').classList.add('hidden');
        document.getElementById('verify-success').classList.remove('hidden');
    }, 700 * itens.length + 700);
}
