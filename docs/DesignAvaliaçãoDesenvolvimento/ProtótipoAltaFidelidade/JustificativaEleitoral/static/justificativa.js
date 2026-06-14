document.addEventListener('DOMContentLoaded', () => {

    // Pages
    const pageHome      = document.getElementById('page-home');
    const pageLogin     = document.getElementById('page-login');
    const pageStep1     = document.getElementById('page-form-step1');
    const pageStep2     = document.getElementById('page-form-step2');
    const pageConfirm   = document.getElementById('page-confirmacao');
    const pageSucesso   = document.getElementById('page-sucesso');

    function showPage(page) {
        [pageHome, pageLogin, pageStep1, pageStep2, pageConfirm, pageSucesso]
            .forEach(p => p.classList.add('hidden'));
        page.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    // Home → Login (click no card de justificativa)
    document.getElementById('card-justificativa').addEventListener('click', () => {
        showPage(pageLogin);
    });

    // Login → Step1
    document.getElementById('btn-entrar').addEventListener('click', () => {
        const cpf   = document.getElementById('input-cpf').value.trim();
        const senha = document.getElementById('input-senha').value.trim();
        if (!cpf || !senha) {
            alert('Por favor, preencha o CPF e a senha para continuar.');
            return;
        }
        showPage(pageStep1);
    });

    // Login back
    document.getElementById('btn-back-login').addEventListener('click', () => {
        showPage(pageHome);
    });

    // Step1 breadcrumb
    document.getElementById('bread-home-step1').addEventListener('click', () => showPage(pageHome));

    // Step1 cancelar
    document.getElementById('btn-cancelar-step1').addEventListener('click', () => showPage(pageHome));

    // Step1 → Step2
    document.getElementById('btn-prox-step1').addEventListener('click', () => {
        const eleicao   = document.getElementById('select-eleicao').value;
        const motivo    = document.getElementById('select-motivo').value;
        const descricao = document.getElementById('input-descricao').value.trim();

        if (!eleicao || !motivo || !descricao) {
            alert('Por favor, preencha todos os campos obrigatórios antes de continuar.');
            return;
        }
        showPage(pageStep2);
    });

    // Step2 breadcrumb
    document.getElementById('bread-home-step2').addEventListener('click', () => showPage(pageHome));

    // Step2 voltar
    document.getElementById('btn-voltar-step2').addEventListener('click', () => showPage(pageStep1));

    // Upload logic
    const uploadArea   = document.getElementById('upload-area');
    const fileInput    = document.getElementById('file-input');
    const uploadDone   = document.getElementById('upload-done');
    const uploadFilename = document.getElementById('upload-filename');

    uploadArea.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            uploadFilename.textContent = fileInput.files[0].name;
            uploadArea.classList.add('hidden');
            uploadDone.classList.remove('hidden');
        }
    });

    document.getElementById('btn-remover-arquivo').addEventListener('click', () => {
        fileInput.value = '';
        uploadDone.classList.add('hidden');
        uploadArea.classList.remove('hidden');
    });

    // Step2 → Confirmação
    document.getElementById('btn-prox-step2').addEventListener('click', () => {
        if (fileInput.files.length === 0) {
            alert('Por favor, anexe um documento comprobatório antes de continuar.');
            return;
        }

        // Populate review data
        const eleicaoEl = document.getElementById('select-eleicao');
        const motivoEl  = document.getElementById('select-motivo');
        const descEl    = document.getElementById('input-descricao');

        const motivoTexto = {
            doenca:   'Doença ou acidente',
            trabalho: 'Exercício de trabalho ou serviço',
            viagem:   'Viagem ou deslocamento',
            familiar: 'Falecimento ou urgência familiar',
            outro:    'Outro motivo'
        };

        document.getElementById('rev-eleicao').textContent   = eleicaoEl.options[eleicaoEl.selectedIndex].text;
        document.getElementById('rev-motivo').textContent    = motivoTexto[motivoEl.value] || motivoEl.value;
        document.getElementById('rev-descricao').textContent = descEl.value;
        document.getElementById('rev-arquivo').textContent   = fileInput.files[0].name;

        showPage(pageConfirm);
    });

    // Confirmação breadcrumb
    document.getElementById('bread-home-confirm').addEventListener('click', () => showPage(pageHome));

    // Confirmação voltar
    document.getElementById('btn-voltar-confirm').addEventListener('click', () => showPage(pageStep2));

    // Confirmação → Sucesso
    document.getElementById('btn-enviar').addEventListener('click', () => {
        // Gera número de protocolo fictício
        const protocolo = 'JE-2026-' + String(Math.floor(Math.random() * 900000) + 100000);
        document.getElementById('num-protocolo').textContent = protocolo;
        showPage(pageSucesso);
    });

    // Botão baixar PDF (simulado)
    document.getElementById('btn-baixar-pdf').addEventListener('click', () => {
        alert('Em um sistema real, o comprovante em PDF seria gerado e baixado aqui.\n\nProtótipo de alta fidelidade — IHC UnB 2026.');
    });

    // Voltar ao home a partir do sucesso
    document.getElementById('btn-voltar-home').addEventListener('click', () => {
        // Reset form fields
        document.getElementById('input-cpf').value       = '';
        document.getElementById('input-senha').value     = '';
        document.getElementById('select-eleicao').value  = '';
        document.getElementById('select-motivo').value   = '';
        document.getElementById('input-descricao').value = '';
        fileInput.value = '';
        uploadDone.classList.add('hidden');
        uploadArea.classList.remove('hidden');
        showPage(pageHome);
    });
});
