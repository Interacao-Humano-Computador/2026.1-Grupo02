document.addEventListener('DOMContentLoaded', () => {
    const pageHome = document.getElementById('page-home');
    const pageComparativo = document.getElementById('page-comparativo');
    
    const comparativoEmpty = document.getElementById('comparativo-empty');
    const comparativoData = document.getElementById('comparativo-data');
    
    const cardComparativo = document.getElementById('card-comparativo');
    const btnAdd = document.getElementById('btn-add');
    const btnAddMore = document.getElementById('btn-add-more');
    const btnClear = document.getElementById('btn-clear');
    
    const modalSelecao = document.getElementById('modal-selecao');
    const btnCloseModal = document.querySelectorAll('.close-modal');
    
    const selectCargo = document.getElementById('select-cargo');
    const selectUf = document.getElementById('select-uf');
    const selectPartido = document.getElementById('select-partido');
    const btnPesquisar = document.getElementById('btn-pesquisar');
    
    const candidateContainer = document.getElementById('candidate-container');

    // Navigation to Comparativo
    cardComparativo.addEventListener('click', () => {
        pageHome.classList.add('hidden');
        pageComparativo.classList.remove('hidden');
        window.scrollTo(0, 0);
    });

    // Open Modal
    const openModal = () => {
        modalSelecao.classList.remove('hidden');
    };
    btnAdd.addEventListener('click', openModal);
    btnAddMore.addEventListener('click', openModal);

    // Close Modal
    btnCloseModal.forEach(btn => {
        btn.addEventListener('click', () => {
            modalSelecao.classList.add('hidden');
        });
    });

    // Mock search logic
    btnPesquisar.addEventListener('click', () => {
        const cargo = selectCargo.value;
        const partido = selectPartido.value;
        
        let candidate = null;
        
        if (cargo === 'Presidente' && partido === 'PT') {
            candidate = {
                name: 'LUIZ INÁCIO LULA DA SILVA',
                number: '13 - PT',
                state: 'BRASIL - BR',
                photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Luiz_In%C3%A1cio_Lula_da_Silva_em_2022.jpg/200px-Luiz_In%C3%A1cio_Lula_da_Silva_em_2022.jpg'
            };
        } else if (cargo === 'Presidente' && partido === 'PL') {
            candidate = {
                name: 'JAIR MESSIAS BOLSONARO',
                number: '22 - PL',
                state: 'BRASIL - BR',
                photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jair_Bolsonaro_2022.jpg/200px-Jair_Bolsonaro_2022.jpg'
            };
        } else {
            alert('Tente buscar Presidente e PT ou PL para ver os dados fictícios do protótipo.');
            return;
        }

        addCandidate(candidate);
        modalSelecao.classList.add('hidden');
        
        comparativoEmpty.classList.add('hidden');
        comparativoData.classList.remove('hidden');
    });
    
    // Clear All
    btnClear.addEventListener('click', () => {
        candidateContainer.innerHTML = '';
        comparativoData.classList.add('hidden');
        comparativoEmpty.classList.remove('hidden');
    });

    // Add candidate column
    function addCandidate(data) {
        const formatMoney = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
        
        const candidateHtml = `
            <div class="candidate-column">
                <div class="col-header">
                    <div class="candidate-photo" style="background-image: url('${data.photo}')"></div>
                    <div class="candidate-name">${data.name}</div>
                    <div class="candidate-details">${data.number}<br>${data.state}</div>
                </div>
                
                <!-- Receitas -->
                <div class="data-row">
                    <div class="data-cell bg-blue-light">${formatMoney(Math.random() * 10000000)}</div>
                </div>
                <div class="data-row">
                    <div class="data-cell bg-blue-light">${formatMoney(Math.random() * 5000000)}</div>
                </div>
                <div class="data-row">
                    <div class="data-cell bg-blue-light">${formatMoney(Math.random() * 2000000)}</div>
                </div>
                <div class="data-row">
                    <div class="data-cell bg-blue-light">${formatMoney(Math.random() * 100000)}</div>
                </div>
                
                <!-- Despesas -->
                <div class="data-row">
                    <div class="data-cell bg-orange-light">${formatMoney(Math.random() * 15000000)}</div>
                </div>
                <div class="data-row">
                    <div class="data-cell bg-orange-light">${formatMoney(Math.random() * 500000)}</div>
                </div>
                
                <!-- Prest Contas -->
                <div class="data-row">
                    <div class="data-cell bg-green-light">Entrega Final</div>
                </div>
                <div class="data-row">
                    <div class="data-cell bg-green-light">15/11/2022</div>
                </div>
                
                <div class="col-footer">
                    <button class="btn-tool red btn-remove-candidate"><i class="fas fa-times"></i></button>
                    <button class="btn-tool blue"><i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        `;
        
        // append candidate HTML to candidateContainer
        candidateContainer.insertAdjacentHTML('beforeend', candidateHtml);
        
        // Setup remove button
        const removeBtns = candidateContainer.querySelectorAll('.btn-remove-candidate');
        removeBtns.forEach(btn => {
            btn.onclick = function() {
                this.closest('.candidate-column').remove();
                if (candidateContainer.children.length === 0) {
                    comparativoData.classList.add('hidden');
                    comparativoEmpty.classList.remove('hidden');
                }
            };
        });
    }
});
