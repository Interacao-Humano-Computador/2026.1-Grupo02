document.addEventListener('DOMContentLoaded', () => {

    // ===== Pages =====
    const pageHome    = document.getElementById('page-home');
    const pageAuth    = document.getElementById('page-auth');
    const pageWizard  = document.getElementById('page-wizard');
    const pageSucesso = document.getElementById('page-sucesso');

    const modalTipo    = document.getElementById('modal-tipo-atualizacao');
    const modalCamera  = document.getElementById('modal-camera');
    const modalConfirm = document.getElementById('modal-confirmacao');

    function showOnly(page) {
        [pageHome, pageAuth, pageWizard, pageSucesso].forEach(p => p.classList.add('hidden'));
        page.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    // ===== Home -> Modal "O que você deseja atualizar?" =====
    document.getElementById('card-trocar-local').addEventListener('click', () => {
        modalTipo.classList.remove('hidden');
    });

    document.querySelectorAll('.close-modal-tipo').forEach(btn => {
        btn.addEventListener('click', () => modalTipo.classList.add('hidden'));
    });

    const opcaoLocal = document.getElementById('opcao-local');
    const btnContinuarTipo = document.getElementById('btn-continuar-tipo');
    let localOptionSelected = false;

    opcaoLocal.addEventListener('click', () => {
        localOptionSelected = !localOptionSelected;
        opcaoLocal.classList.toggle('selected', localOptionSelected);
        btnContinuarTipo.disabled = !localOptionSelected;
    });

    // Outras opções (Dados pessoais, Endereço) — apenas alternância visual no protótipo
    document.querySelectorAll('.tipo-opcao:not(#opcao-local)').forEach(el => {
        el.addEventListener('click', () => el.classList.toggle('selected'));
    });

    btnContinuarTipo.addEventListener('click', () => {
        modalTipo.classList.add('hidden');
        showOnly(pageAuth);
    });

    // ===== Página de Autenticação =====
    document.getElementById('btn-close-auth').addEventListener('click', () => showOnly(pageHome));
    document.getElementById('btn-voltar-auth').addEventListener('click', () => showOnly(pageHome));

    // ----- Máscaras de formatação -----
    function formatCPF(value) {
        const digits = value.replace(/\D/g, '').slice(0, 11);
        if (digits.length > 9) return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
        if (digits.length > 6) return digits.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
        if (digits.length > 3) return digits.replace(/(\d{3})(\d{1,3})/, '$1.$2');
        return digits;
    }

    function formatDate(value) {
        const digits = value.replace(/\D/g, '').slice(0, 8);
        if (digits.length > 4) return digits.replace(/(\d{2})(\d{2})(\d{1,4})/, '$1/$2/$3');
        if (digits.length > 2) return digits.replace(/(\d{2})(\d{1,2})/, '$1/$2');
        return digits;
    }

    function formatPhone(value) {
        const digits = value.replace(/\D/g, '').slice(0, 11);
        if (digits.length > 6) return digits.replace(/(\d{2})(\d{5})(\d{1,4})/, '($1) $2-$3');
        if (digits.length > 2) return digits.replace(/(\d{2})(\d{1,5})/, '($1) $2');
        if (digits.length > 0) return digits.replace(/(\d{1,2})/, '($1');
        return digits;
    }

    function applyMask(input, formatter) {
        input.addEventListener('input', () => {
            const cursorFromEnd = input.value.length - input.selectionStart;
            input.value = formatter(input.value);
            const pos = Math.max(0, input.value.length - cursorFromEnd);
            input.setSelectionRange(pos, pos);
        });
    }

    const inputCPF = document.getElementById('input-identificacao');
    const inputNascimento = document.getElementById('input-nascimento');
    const inputTelefone = document.getElementById('input-telefone');

    applyMask(inputCPF, formatCPF);
    applyMask(inputNascimento, formatDate);
    applyMask(inputTelefone, formatPhone);

    // ----- Credenciais válidas para esta sessão de teste -----
    const CREDENCIAIS_VALIDAS = {
        cpf: '857.338.850-17',
        nascimento: '10/03/2004',
        filiacao: 'NOME DE MÃE E NOME DE PAI',
        mae: 'MARIA SILVA',
        pai: 'MARIO SILVA'
    };

    const authError = document.getElementById('auth-error');

    function showAuthError(msg) {
        authError.textContent = msg;
        authError.classList.remove('hidden');
    }

    function hideAuthError() {
        authError.classList.add('hidden');
    }

    document.getElementById('btn-entrar-auth').addEventListener('click', () => {
        const cpf = inputCPF.value.trim();
        const nasc = inputNascimento.value.trim();
        const filiacao = document.getElementById('select-filiacao').value.trim().toUpperCase();
        const mae = document.getElementById('input-mae').value.trim().toUpperCase();
        const pai = document.getElementById('input-pai').value.trim().toUpperCase();

        if (!cpf || !nasc || !mae || !pai) {
            showAuthError('Por favor, preencha o CPF, a data de nascimento, o nome da mãe e o nome do pai para continuar.');
            return;
        }

        if (
            cpf !== CREDENCIAIS_VALIDAS.cpf ||
            nasc !== CREDENCIAIS_VALIDAS.nascimento ||
            filiacao !== CREDENCIAIS_VALIDAS.filiacao ||
            mae !== CREDENCIAIS_VALIDAS.mae ||
            pai !== CREDENCIAIS_VALIDAS.pai
        ) {
            showAuthError('Não foi possível confirmar os seus dados. Verifique o CPF, a data de nascimento, o nome da mãe e o nome do pai informados e tente novamente.');
            return;
        }

        hideAuthError();
        showOnly(pageWizard);
        showStep(1);
    });

    document.getElementById('btn-etitulo').addEventListener('click', () => {
        alert('Esta forma de autenticação não está disponível neste protótipo de teste. Utilize o formulário acima com os dados informados pelo aplicador da pesquisa.');
    });

    // ===== Wizard / Steps =====
    const stepLabels = ['Documentos', 'Local de votação', 'Dados complementares', 'Contatos'];
    const breadcrumbStep = document.getElementById('breadcrumb-step');

    function showStep(n) {
        for (let i = 1; i <= 4; i++) {
            document.getElementById('step-content-' + i).classList.toggle('hidden', i !== n);
            const ind = document.getElementById('step-ind-' + i);
            ind.classList.remove('active', 'done');
            if (i < n) ind.classList.add('done');
            if (i === n) ind.classList.add('active');
        }
        breadcrumbStep.textContent = stepLabels[n - 1];
        window.scrollTo(0, 0);
    }

    // ===== Etapa 1: Documentos =====
    const attached = { selfie: false, documento: false };
    const btnProximo1 = document.getElementById('btn-proximo-1');

    function updateBtnProximo1() {
        btnProximo1.disabled = !(attached.selfie && attached.documento);
    }

    function markAttached(key, filename) {
        attached[key] = true;
        const status = document.getElementById('status-' + key);
        status.innerHTML =
            '<i class="fas fa-check-circle" style="color: var(--color-success);"></i> ' +
            filename +
            ' <a href="#" class="remover-anexo" data-key="' + key + '">Remover</a>';

        status.querySelector('.remover-anexo').addEventListener('click', (e) => {
            e.preventDefault();
            attached[key] = false;
            status.innerHTML = '';
            updateBtnProximo1();
        });

        updateBtnProximo1();
    }

    window.handleFileAttach = function (input, key) {
        if (input.files && input.files.length > 0) {
            const names = Array.from(input.files).map(f => f.name).join(', ');
            markAttached(key, names);
        }
    };

    document.getElementById('btn-cancelar-1').addEventListener('click', () => showOnly(pageHome));
    btnProximo1.addEventListener('click', () => showStep(2));

    // ===== Câmera (selfie / documento) =====
    let cameraStream = null;
    let cameraTarget = null;
    const video = document.getElementById('camera-video');
    const canvas = document.getElementById('camera-canvas');
    const btnCapture = document.getElementById('btn-capture');
    const btnRetake = document.getElementById('btn-retake');
    const btnUsePhoto = document.getElementById('btn-use-photo');
    const cameraHint = document.getElementById('camera-hint');

    const cameraHints = {
        selfie: 'Posicione seu rosto e o documento de identificação dentro do quadro e clique em capturar.',
        documento: 'Posicione o documento de identificação dentro do quadro, garantindo que os dados estejam legíveis.'
    };

    window.openCamera = function (target) {
        cameraTarget = target;
        cameraHint.textContent = cameraHints[target] || 'Posicione o item dentro do quadro e clique em capturar.';
        modalCamera.classList.remove('hidden');
        resetCameraUI();

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    cameraStream = stream;
                    video.srcObject = stream;
                })
                .catch(() => {
                    alert('Não foi possível acessar a câmera. Verifique as permissões do navegador para este site.');
                    closeCamera();
                });
        } else {
            alert('Seu navegador não tem suporte ao acesso de câmera neste protótipo.');
            closeCamera();
        }
    };

    function resetCameraUI() {
        video.classList.remove('hidden');
        canvas.classList.add('hidden');
        btnCapture.classList.remove('hidden');
        btnRetake.classList.add('hidden');
        btnUsePhoto.classList.add('hidden');
    }

    function closeCamera() {
        if (cameraStream) {
            cameraStream.getTracks().forEach(t => t.stop());
            cameraStream = null;
        }
        modalCamera.classList.add('hidden');
    }

    document.getElementById('btn-close-camera').addEventListener('click', closeCamera);

    btnCapture.addEventListener('click', () => {
        canvas.width = video.videoWidth || 480;
        canvas.height = video.videoHeight || 360;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        video.classList.add('hidden');
        canvas.classList.remove('hidden');
        btnCapture.classList.add('hidden');
        btnRetake.classList.remove('hidden');
        btnUsePhoto.classList.remove('hidden');
    });

    btnRetake.addEventListener('click', resetCameraUI);

    btnUsePhoto.addEventListener('click', () => {
        const filename = (cameraTarget === 'selfie' ? 'selfie_documento.png' : 'foto_documento_identificacao.png');
        markAttached(cameraTarget, filename);
        closeCamera();
    });

    // ===== Etapa 2: Local de votação =====
    let localSelecionado = null;
    const btnProximo2 = document.getElementById('btn-proximo-2');

    document.querySelectorAll('input[name="local-votacao"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            document.querySelectorAll('#local-table tbody tr').forEach(r => r.classList.remove('selected-row'));
            const row = e.target.closest('tr');
            row.classList.add('selected-row');

            localSelecionado = {
                nome: row.dataset.nome,
                endereco: row.dataset.endereco,
                bairro: row.dataset.bairro,
                distancia: row.dataset.distancia
            };
            btnProximo2.disabled = false;
        });
    });

    document.getElementById('pesquisar-local').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        document.querySelectorAll('#local-table tbody tr').forEach(row => {
            const match = row.dataset.nome.toLowerCase().includes(term) ||
                           row.dataset.bairro.toLowerCase().includes(term) ||
                           row.dataset.endereco.toLowerCase().includes(term);
            row.classList.toggle('hidden', !match);
        });
    });

    document.getElementById('btn-cancelar-2').addEventListener('click', () => showOnly(pageHome));
    document.getElementById('btn-anterior-2').addEventListener('click', () => showStep(1));
    btnProximo2.addEventListener('click', () => {
        if (!localSelecionado) {
            alert('Selecione um local de votação na lista para continuar.');
            return;
        }
        showStep(3);
    });

    // ===== Etapa 3: Dados complementares =====
    document.getElementById('btn-cancelar-3').addEventListener('click', () => showOnly(pageHome));
    document.getElementById('btn-anterior-3').addEventListener('click', () => showStep(2));
    document.getElementById('btn-proximo-3').addEventListener('click', () => showStep(4));

    // ===== Etapa 4: Contatos -> Modal de confirmação =====
    document.getElementById('btn-cancelar-4').addEventListener('click', () => showOnly(pageHome));
    document.getElementById('btn-anterior-4').addEventListener('click', () => showStep(3));

    document.getElementById('btn-enviar-4').addEventListener('click', () => {
        const tel = document.getElementById('input-telefone').value.trim();
        const email = document.getElementById('input-email').value.trim();

        if (!tel || !email) {
            alert('Por favor, informe um telefone e um e-mail de contato para continuar.');
            return;
        }
        if (!localSelecionado) {
            alert('É necessário selecionar um local de votação na etapa 2 antes de enviar a solicitação.');
            showStep(2);
            return;
        }

        document.getElementById('resumo-nome').textContent = localSelecionado.nome;
        document.getElementById('resumo-endereco').textContent = localSelecionado.endereco;
        document.getElementById('resumo-bairro').textContent = 'Bairro: ' + localSelecionado.bairro;
        document.getElementById('resumo-distancia').textContent =
            'Aproximadamente ' + localSelecionado.distancia + ' km do seu endereço atual';

        modalConfirm.classList.remove('hidden');
    });

    document.getElementById('btn-cancelar-confirm').addEventListener('click', () => modalConfirm.classList.add('hidden'));
    document.getElementById('btn-close-confirm').addEventListener('click', () => modalConfirm.classList.add('hidden'));

    document.getElementById('btn-confirmar-final').addEventListener('click', () => {
        modalConfirm.classList.add('hidden');
        const protocolo = 'ALV-2026-' + String(Math.floor(Math.random() * 900000) + 100000);
        document.getElementById('num-protocolo').textContent = protocolo;
        showOnly(pageSucesso);
    });

    // ===== Botão de Ajuda Flutuante =====
    const modalAjuda = document.getElementById('modal-ajuda');

    document.getElementById('btn-ajuda-flutuante').addEventListener('click', () => {
        modalAjuda.classList.remove('hidden');
    });

    function closeAjuda() { modalAjuda.classList.add('hidden'); }

    document.getElementById('btn-close-ajuda').addEventListener('click', closeAjuda);
    document.getElementById('btn-fechar-ajuda').addEventListener('click', closeAjuda);

    modalAjuda.addEventListener('click', (e) => {
        if (e.target === modalAjuda) closeAjuda();
    });

    // ===== Voltar ao portal a partir da página de sucesso =====
    document.getElementById('btn-voltar-home').addEventListener('click', () => {
        location.reload();
    });
});