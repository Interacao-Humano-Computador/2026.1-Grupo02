document.addEventListener('DOMContentLoaded', () => {

    // ---------- Utilitários ----------
    const $ = (id) => document.getElementById(id);

    const modalAgendar    = $('modal-agendar');
    const modalAcompanhar = $('modal-acompanhar');

    function openModal(modal) {
        modal.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    function closeModal(modal) {
        modal.classList.add('hidden');
    }

    // Mostra apenas o "passo" informado dentro de um modal
    function showStep(stepToShow, allSteps) {
        allSteps.forEach(s => s.classList.add('hidden'));
        stepToShow.classList.remove('hidden');
    }

    // Simula o comportamento de um reCAPTCHA (loading -> checked)
    function setupRecaptcha(checkbox) {
        const state = { verified: false };
        checkbox.addEventListener('click', () => {
            if (state.verified || checkbox.classList.contains('loading')) return;
            checkbox.classList.add('loading');
            setTimeout(() => {
                checkbox.classList.remove('loading');
                checkbox.classList.add('checked');
                state.verified = true;
            }, 800);
        });
        return state;
    }

    // Atualiza o placeholder do input conforme o tipo de identificação
    function bindIdPlaceholder(selectEl, inputEl) {
        const placeholders = {
            cpf:       'Digite o número do CPF',
            titulo:    'Digite o número do título',
            protocolo: 'Digite o número do protocolo'
        };
        selectEl.addEventListener('change', () => {
            inputEl.value = '';
            inputEl.placeholder = placeholders[selectEl.value] || 'Digite o número';
        });
    }

    // =================================================================
    //  HOME -> abrir modais
    // =================================================================
    $('btn-agendar').addEventListener('click', () => openModal(modalAgendar));
    $('btn-acompanhar').addEventListener('click', () => openModal(modalAcompanhar));

    // =================================================================
    //  MODAL: AGENDAR
    // =================================================================
    const agendarStep1 = $('agendar-step1');
    const agendarStep2 = $('agendar-step2');
    const agendarSteps = [agendarStep1, agendarStep2];

    const recaptchaAgendar = setupRecaptcha($('recaptcha-checkbox'));
    bindIdPlaceholder($('select-tipo-id'), $('input-identificacao'));

    function resetAgendar() {
        showStep(agendarStep1, agendarSteps);
        $('input-identificacao').value = '';
        $('recaptcha-checkbox').classList.remove('checked', 'loading');
        recaptchaAgendar.verified = false;
        $('select-local').value = '';
        $('input-data').value = '';
        $('select-horario').value = '';
    }

    // Fechar / voltar ao home
    $('btn-voltar-agendar').addEventListener('click', () => { closeModal(modalAgendar); resetAgendar(); });
    $('btn-voltar-agendar2').addEventListener('click', () => { closeModal(modalAgendar); resetAgendar(); });

    // Step1 -> Step2
    $('btn-confirmar-agendar').addEventListener('click', () => {
        const id = $('input-identificacao').value.trim();
        if (!id) {
            alert('Por favor, informe sua identificação para continuar.');
            return;
        }
        if (!recaptchaAgendar.verified) {
            alert('Por favor, confirme que você não é um robô.');
            return;
        }
        showStep(agendarStep2, agendarSteps);
    });

    // Step2 -> voltar ao Step1
    $('btn-voltar-step2').addEventListener('click', () => showStep(agendarStep1, agendarSteps));

    // Step2 -> confirmar agendamento
    $('btn-confirmar-step2').addEventListener('click', () => {
        const local   = $('select-local').value;
        const data    = $('input-data').value;
        const horario = $('select-horario').value;

        if (!local || !data || !horario) {
            alert('Por favor, selecione o local, a data e o horário do atendimento.');
            return;
        }

        const protocolo = 'AG-2026-' + String(Math.floor(Math.random() * 900000) + 100000);
        alert('Agendamento confirmado com sucesso!\n\nProtocolo: ' + protocolo +
              '\n\nProtótipo de alta fidelidade — IHC UnB 2026.');
        closeModal(modalAgendar);
        resetAgendar();
    });

    // =================================================================
    //  MODAL: ACOMPANHAR
    // =================================================================
    const acompStep1  = $('acompanhar-step1');
    const acompChoice = $('acompanhar-choice');
    const acompStep2  = $('acompanhar-step2');
    const acompCancel = $('acompanhar-cancel');
    const acompSteps  = [acompStep1, acompChoice, acompStep2, acompCancel];

    const recaptchaAcomp = setupRecaptcha($('recaptcha-checkbox-acomp'));
    bindIdPlaceholder($('select-tipo-acomp'), $('input-acomp'));

    function resetAcompanhar() {
        showStep(acompStep1, acompSteps);
        $('input-acomp').value = '';
        $('recaptcha-checkbox-acomp').classList.remove('checked', 'loading');
        recaptchaAcomp.verified = false;
    }

    // Fechar / voltar ao home
    $('btn-voltar-acompanhar').addEventListener('click', () => { closeModal(modalAcompanhar); resetAcompanhar(); });
    $('btn-voltar-acomp2').addEventListener('click', () => { closeModal(modalAcompanhar); resetAcompanhar(); });

    // Step1 -> Escolha (visualizar / cancelar)
    $('btn-confirmar-acomp').addEventListener('click', () => {
        const id = $('input-acomp').value.trim();
        if (!id) {
            alert('Por favor, informe sua identificação para consultar o agendamento.');
            return;
        }
        if (!recaptchaAcomp.verified) {
            alert('Por favor, confirme que você não é um robô.');
            return;
        }
        showStep(acompChoice, acompSteps);
    });

    // Escolha -> Visualizar
    $('btn-visualizar').addEventListener('click', () => showStep(acompStep2, acompSteps));

    // Escolha -> Cancelar
    $('btn-cancelar-ag').addEventListener('click', () => showStep(acompCancel, acompSteps));

    // Escolha -> voltar ao Step1
    $('btn-voltar-choice').addEventListener('click', () => showStep(acompStep1, acompSteps));

    // Visualizar -> voltar à escolha
    $('btn-voltar-acomp-step2').addEventListener('click', () => showStep(acompChoice, acompSteps));

    // Visualizar -> fechar
    $('btn-fechar-acomp').addEventListener('click', () => { closeModal(modalAcompanhar); resetAcompanhar(); });

    // Cancelar -> voltar à escolha
    $('btn-voltar-cancel').addEventListener('click', () => showStep(acompChoice, acompSteps));

    // Cancelar -> confirmar cancelamento
    $('btn-confirmar-cancel').addEventListener('click', () => {
        alert('Agendamento cancelado com sucesso.\n\nProtótipo de alta fidelidade — IHC UnB 2026.');
        closeModal(modalAcompanhar);
        resetAcompanhar();
    });

    // =================================================================
    //  Fechar modal ao clicar fora do card
    // =================================================================
    [modalAgendar, modalAcompanhar].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
                if (modal === modalAgendar) resetAgendar();
                else resetAcompanhar();
            }
        });
    });

});
