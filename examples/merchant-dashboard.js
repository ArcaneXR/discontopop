// Variáveis globais
let currentAction = null;
let transactionHistory = [];

// Funções auxiliares
function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function showModal() {
    document.querySelector('.modal-overlay').style.display = 'block';
}

function hideModal() {
    document.querySelector('.modal-overlay').style.display = 'none';
    resetForm();
}

function resetForm() {
    document.querySelectorAll('input').forEach(input => input.value = '');
    currentAction = null;
    document.querySelectorAll('.action-group').forEach(group => {
        group.style.display = 'none';
    });
}

function showActionGroup(action) {
    currentAction = action;
    document.querySelectorAll('.action-group').forEach(group => {
        group.style.display = 'none';
    });
    document.querySelector(`.${action}-group`).style.display = 'block';
}

function addTransaction(type, amount, reason) {
    const transaction = {
        id: Date.now(),
        type,
        amount,
        reason,
        date: new Date()
    };
    transactionHistory.unshift(transaction);
    updateHistoryList();
}

function updateHistoryList() {
    const filter = document.querySelector('#historyFilter').value;
    const historyList = document.querySelector('.history-list');
    const filteredHistory = filter === 'all'
        ? transactionHistory
        : transactionHistory.filter(t => t.type === filter);

    if (filteredHistory.length === 0) {
        historyList.innerHTML = '<div class="no-history">Nenhuma transação encontrada</div>';
        return;
    }

    historyList.innerHTML = filteredHistory.map(transaction => `
        <div class="history-item ${transaction.type}">
            <div class="history-icon">
                <i class="material-icons">
                    ${transaction.type === 'points' ? 'loyalty' : 'local_offer'}
                </i>
            </div>
            <div class="history-details">
                <div class="history-amount">
                    ${transaction.type === 'points'
            ? `${transaction.amount} pontos`
            : `R$ ${transaction.amount.toFixed(2)}`}
                </div>
                <div class="history-reason">${transaction.reason}</div>
                <div class="history-date">${formatDate(transaction.date)}</div>
            </div>
        </div>
    `).join('');
}

// Sample client data
const clients = [
    {
        id: 1,
        name: 'João Silva',
        phone: '(11) 99999-9999',
        birthdate: '03/12/1990',
        cpf: '123.456.789-00',
        points: 5,
        activeCampaigns: ['Black Friday'],
        redeemableCampaigns: [
            {
                id: 1,
                title: "Black Friday",
                type: "discount",
                description: "Desconto especial de Black Friday",
                discount: 20,
                minPurchase: 50,
                status: "active",
                validUntil: "2024-11-30"
            }
        ],
        availableCampaigns: [
            {
                id: 2,
                title: "Programa de Fidelidade",
                type: "points",
                description: "Acumule pontos a cada compra",
                pointsPerReal: 1,
                minPointsForReward: 100,
                status: "active",
                validUntil: "2024-12-31"
            },
            {
                id: 3,
                title: "Promoção de Verão",
                type: "discount",
                description: "Descontos especiais para o verão",
                discount: 15,
                minPurchase: 30,
                status: "active",
                validUntil: "2024-03-01"
            },
            {
                id: 4,
                title: "Dia dos Pais",
                type: "discount",
                description: "Desconto especial para o Dia dos Pais",
                discount: 25,
                minPurchase: 100,
                status: "active",
                validUntil: "2024-08-11"
            }
        ]
    }
];

function filterClients(searchTerm) {
    return clients.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.phone.replace(/\D/g, '').includes(searchTerm.replace(/\D/g, '')) ||
        client.cpf.replace(/\D/g, '').includes(searchTerm.replace(/\D/g, ''))
    );
}

function displayResults(results) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (results.length > 0) {
        results.forEach(client => {
            const div = document.createElement('div');
            div.className = 'search-result-item';
            div.innerHTML = `
                <div class="client-info">
                    <div>
                        <div class="client-name">${client.name}</div>
                        <div class="client-details">
                            <span class="client-phone">${client.phone}</span>
                            <span class="client-cpf">${client.cpf}</span>
                        </div>
                    </div>
                </div>
            `;
            div.addEventListener('click', () => selectClient(client));
            searchResults.appendChild(div);
        });
    } else {
        const div = document.createElement('div');
        div.className = 'no-results';
        div.textContent = 'Nenhum cliente encontrado';
        searchResults.appendChild(div);
    }

    searchResults.classList.add('active');
}

function hideResults() {
    const searchResults = document.getElementById('searchResults');
    searchResults.classList.remove('active');
}

function selectClient(client) {
    const selectedClientName = document.getElementById('selectedClientName');
    const selectedClient = document.getElementById('selectedClient');

    selectedClientName.textContent = client.name;
    document.getElementById('selectedClientPhone').textContent = client.phone;
    document.getElementById('selectedClientBirthdate').textContent = client.birthdate || 'Data não informada';
    document.getElementById('activeCoupons').textContent = `${client.coupons?.length || 0}/10`;
    document.getElementById('activeCampaigns').textContent = client.activeCampaigns?.length || '0';

    // Atualizar campanhas para resgate
    const redeemableCampaigns = document.getElementById('redeemableCampaigns');
    redeemableCampaigns.innerHTML = '';

    if (client.redeemableCampaigns?.length > 0) {
        client.redeemableCampaigns.forEach(campaign => {
            const div = createCampaignElement(campaign);
            redeemableCampaigns.appendChild(div);
        });
    } else {
        redeemableCampaigns.innerHTML = '<div class="no-campaigns">Nenhuma campanha disponível para resgate</div>';
    }

    // Atualizar campanhas disponíveis
    const availableCampaigns = document.getElementById('availableCampaigns');
    availableCampaigns.innerHTML = '';

    if (client.availableCampaigns?.length > 0) {
        client.availableCampaigns.forEach(campaign => {
            const div = createCampaignElement(campaign);
            availableCampaigns.appendChild(div);
        });
    } else {
        availableCampaigns.innerHTML = '<div class="no-campaigns">Nenhuma campanha disponível para adicionar</div>';
    }

    selectedClient.style.display = 'block';
    document.getElementById('clientSearch').value = '';
    hideResults();

    // Esconder botão de registrar e inputs
    document.getElementById('registerSale').classList.remove('active');
    document.getElementById('discountInputs').classList.remove('active');
    document.getElementById('pointsInputs').classList.remove('active');
}

function createCampaignElement(campaign) {
    const div = document.createElement('div');
    div.className = 'campaign-item';
    div.dataset.id = campaign.id;
    div.dataset.type = campaign.type;

    let details = '';
    if (campaign.type === 'discount') {
        details = `
            <p>
                <i class="material-icons" style="font-size: 16px; color: var(--primary);">local_offer</i>
                Desconto de ${campaign.discount}%
            </p>
            <p>
                <i class="material-icons" style="font-size: 16px; color: var(--primary);">shopping_cart</i>
                Mínimo de compra: R$ ${campaign.minPurchase.toFixed(2)}
            </p>
        `;
    } else if (campaign.type === 'points') {
        details = `
            <p>
                <i class="material-icons" style="font-size: 16px; color: var(--primary);">star</i>
                ${campaign.pointsPerReal} ponto por R$ 1,00
            </p>
            <p>
                <i class="material-icons" style="font-size: 16px; color: var(--primary);">redeem</i>
                ${campaign.minPointsForReward} pontos para recompensa
            </p>
        `;
    }

    div.innerHTML = `
        <div class="campaign-header">
            <div class="campaign-title">${campaign.title}</div>
            <div class="campaign-type">
                <i class="material-icons" style="font-size: 16px;">
                    ${campaign.type === 'discount' ? 'local_offer' : 'loyalty'}
                </i>
                ${campaign.type === 'discount' ? 'Desconto' : 'Pontos'}
            </div>
        </div>
        <div class="campaign-details">
            <p>${campaign.description}</p>
            ${details}
            <p>
                <i class="material-icons" style="font-size: 16px; color: var(--primary);">event</i>
                Válido até: ${new Date(campaign.validUntil).toLocaleDateString()}
            </p>
            <span class="campaign-status status-${campaign.status}">
                <i class="material-icons" style="font-size: 16px;">
                    ${campaign.status === 'active' ? 'check_circle' : 'pending'}
                </i>
                ${campaign.status === 'active' ? 'Ativa' : 'Pendente'}
            </span>
        </div>
    `;

    div.addEventListener('click', () => handleCampaignAction(campaign));
    return div;
}

function handleCampaignAction(campaign) {
    const currentTab = document.querySelector('.action-tab.active').dataset.tab;
    const selectedClient = document.getElementById('selectedClientName').textContent;

    if (!selectedClient) {
        alert('Selecione um cliente primeiro');
        return;
    }

    if (currentTab === 'redeem') {
        // Lógica para resgatar campanha
        if (campaign.type === 'discount') {
            // Mostrar inputs de desconto
            document.getElementById('discountInputs').classList.add('active');
            document.getElementById('pointsInputs').classList.remove('active');

            // Atualizar informações da campanha
            document.getElementById('purchaseValue').value = '';
            document.getElementById('discountValue').textContent = `${campaign.discount}%`;
            document.getElementById('minPurchase').textContent = `R$ ${campaign.minPurchase.toFixed(2)}`;
        } else if (campaign.type === 'points') {
            // Mostrar inputs de pontos
            document.getElementById('pointsInputs').classList.add('active');
            document.getElementById('discountInputs').classList.remove('active');

            // Atualizar informações da campanha
            document.getElementById('currentPoints').textContent = '5'; // Exemplo
            document.getElementById('pointsPerReal').textContent = campaign.pointsPerReal;
        }

        // Mostrar botão de registrar
        document.getElementById('registerSale').classList.add('active');

    } else if (currentTab === 'add') {
        // Lógica para adicionar campanha
        const clientId = 1; // Exemplo - você deve pegar o ID real do cliente

        // Aqui você faria a chamada para a API para adicionar a campanha ao cliente
        console.log(`Adicionando campanha ${campaign.id} ao cliente ${clientId}`);

        // Atualizar a interface
        const availableCampaigns = document.getElementById('availableCampaigns');
        const campaignElement = availableCampaigns.querySelector(`[data-id="${campaign.id}"]`);
        if (campaignElement) {
            campaignElement.remove();
        }

        // Atualizar contador de campanhas ativas
        const activeCampaignsCount = document.getElementById('activeCampaigns');
        const currentCount = parseInt(activeCampaignsCount.textContent);
        activeCampaignsCount.textContent = currentCount + 1;

        alert(`Campanha "${campaign.title}" adicionada com sucesso!`);
    }
}

// Product management
function addProduct() {
    const productList = document.getElementById('productList');
    const product = {
        id: Date.now(),
        name: 'Produto ' + (productList.children.length + 1),
        price: 0
    };

    const div = document.createElement('div');
    div.className = 'product-item';
    div.dataset.id = product.id;
    div.innerHTML = `
        <div class="product-info">
            <div class="product-name">${product.name}</div>
            <input type="number" 
                   class="product-price" 
                   value="${product.price}" 
                   step="0.01" 
                   min="0"
                   placeholder="Preço">
        </div>
        <button class="remove-product" onclick="removeProduct(${product.id})">×</button>
    `;

    productList.appendChild(div);
    updateTotal();
}

function removeProduct(id) {
    const product = document.querySelector(`.product-item[data-id="${id}"]`);
    if (product) {
        product.remove();
        updateTotal();
    }
}

function updateTotal() {
    const products = document.querySelectorAll('.product-item');
    let total = 0;

    products.forEach(product => {
        const priceInput = product.querySelector('.product-price');
        const price = parseFloat(priceInput.value) || 0;
        total += price;
    });

    const purchaseValueInput = document.getElementById('purchaseValue');
    if (purchaseValueInput) {
        purchaseValueInput.value = total.toFixed(2);
    }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
    // Tab functionality
    const actionTabs = document.querySelectorAll('.action-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const registerButton = document.getElementById('registerSale');
    const discountInputs = document.getElementById('discountInputs');
    const pointsInputs = document.getElementById('pointsInputs');

    // Função para esconder inputs e botão de registrar
    function hideInputsAndButton() {
        if (registerButton) registerButton.classList.remove('active');
        if (discountInputs) discountInputs.classList.remove('active');
        if (pointsInputs) pointsInputs.classList.remove('active');
    }

    // Função para inicializar a primeira aba
    function initializeFirstTab() {
        const firstTab = document.querySelector('.action-tab[data-tab="redeem"]');
        const firstTabContent = document.getElementById('redeemTab');

        if (firstTab && firstTabContent) {
            firstTab.classList.add('active');
            firstTabContent.style.display = 'block';
        }
    }

    // Adicionar event listeners apenas se os elementos existirem
    if (actionTabs.length > 0) {
        actionTabs.forEach(tab => {
            if (tab) {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs
                    actionTabs.forEach(t => t.classList.remove('active'));
                    // Add active class to clicked tab
                    tab.classList.add('active');

                    // Hide all tab contents
                    if (tabContents.length > 0) {
                        tabContents.forEach(content => content.style.display = 'none');
                    }

                    // Show selected tab content
                    const tabId = tab.dataset.tab + 'Tab';
                    const selectedTab = document.getElementById(tabId);
                    if (selectedTab) {
                        selectedTab.style.display = 'block';
                    }

                    // Esconder inputs e botão
                    hideInputsAndButton();
                });
            }
        });

        // Inicializar primeira aba
        initializeFirstTab();
    }

    // Client search functionality
    const clientSearch = document.getElementById('clientSearch');
    const searchResults = document.getElementById('searchResults');
    const selectedClient = document.getElementById('selectedClient');
    const selectedClientName = document.getElementById('selectedClientName');
    const clearClient = document.getElementById('clearClient');

    if (clientSearch && searchResults && selectedClient && selectedClientName && clearClient) {
        clientSearch.addEventListener('input', (e) => {
            const searchTerm = e.target.value;
            if (searchTerm.length > 0) {
                const results = filterClients(searchTerm);
                displayResults(results);
            } else {
                hideResults();
            }
        });

        clientSearch.addEventListener('focus', () => {
            if (clientSearch.value.length > 0) {
                const results = filterClients(clientSearch.value);
                displayResults(results);
            }
        });

        clearClient.addEventListener('click', () => {
            selectedClient.style.display = 'none';
            clientSearch.focus();
        });
    }

    // Register sale button
    const registerSaleButton = document.getElementById('registerSale');
    if (registerSaleButton) {
        registerSaleButton.addEventListener('click', () => {
            const selectedCampaign = document.querySelector('.campaign-item.selected');
            if (!selectedCampaign) {
                alert('Selecione uma campanha');
                return;
            }

            const campaignId = selectedCampaign.dataset.id;
            const campaignType = selectedCampaign.dataset.type;
            const campaign = clients[0].redeemableCampaigns.find(c => c.id === parseInt(campaignId)) ||
                clients[0].availableCampaigns.find(c => c.id === parseInt(campaignId));

            let saleData = {
                campaignId,
                campaignType,
                clientId: document.getElementById('selectedClientName').textContent ? '1' : null
            };

            if (campaignType === 'discount') {
                const purchaseValue = parseFloat(document.getElementById('purchaseValue').value);

                if (isNaN(purchaseValue) || purchaseValue <= 0) {
                    alert('Digite um valor de compra válido');
                    return;
                }

                if (purchaseValue < campaign.minPurchase) {
                    alert(`Valor mínimo da compra: R$ ${campaign.minPurchase.toFixed(2)}`);
                    return;
                }

                saleData.purchaseValue = purchaseValue;
                saleData.discount = campaign.discount;
                saleData.finalValue = purchaseValue * (1 - campaign.discount / 100);
            } else if (campaignType === 'points') {
                const currentPoints = parseInt(document.getElementById('currentPoints').textContent);
                const pointsToAdd = Math.floor(purchaseValue * campaign.pointsPerReal);

                saleData.currentPoints = currentPoints;
                saleData.pointsToAdd = pointsToAdd;
                saleData.newTotalPoints = currentPoints + pointsToAdd;
            }

            // Here you would send the saleData to your backend
            console.log('Dados da venda:', saleData);
            alert('Venda registrada com sucesso!');
        });
    }

    // Product management
    const addProductButton = document.getElementById('addProductButton');
    const productList = document.getElementById('productList');

    if (addProductButton && productList) {
        addProductButton.addEventListener('click', addProduct);
    }

    // Product input type selection
    const productOptions = document.querySelectorAll('.product-option');
    const scanSection = document.getElementById('scanSection');
    const manualInput = document.getElementById('manualInput');

    if (productOptions.length > 0 && scanSection && manualInput) {
        productOptions.forEach(option => {
            option.addEventListener('click', () => {
                productOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');

                const type = option.dataset.type;
                scanSection.classList.toggle('active', type === 'scan');
                manualInput.classList.toggle('active', type === 'manual');
            });
        });

        // Initialize with manual input selected
        document.querySelector('.product-option[data-type="manual"]').click();
    }
}); 