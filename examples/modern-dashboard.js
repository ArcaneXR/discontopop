// Dados dos clientes
const clientes = [
    {
        nome: "Thiago Santos",
        email: "thiago.santos@email.com",
        telefone: "(11) 98765-4321",
        cpf: "***.***.321-45",
        status: "ativo",
        pontos: 2850,
        ultimaVisita: "2024-04-28",
        cuponsAtivos: 3
    },
    {
        nome: "Isabela Lima",
        email: "isabela.lima@email.com",
        telefone: "(11) 97654-3210",
        cpf: "***.***.654-98",
        status: "ativo",
        pontos: 1560,
        ultimaVisita: "2024-04-27",
        cuponsAtivos: 2
    },
    {
        nome: "Lucas Costa",
        email: "lucas.costa@email.com",
        telefone: "(11) 96543-2109",
        cpf: "***.***.987-32",
        status: "inativo",
        pontos: 750,
        ultimaVisita: "2024-03-15",
        cuponsAtivos: 0
    },
    {
        nome: "Beatriz Alves",
        email: "beatriz.alves@email.com",
        telefone: "(11) 95432-1098",
        cpf: "***.***.123-67",
        status: "ativo",
        pontos: 3200,
        ultimaVisita: "2024-04-26",
        cuponsAtivos: 4
    },
    {
        nome: "Gabriel Silva",
        email: "gabriel.silva@email.com",
        telefone: "(11) 94321-0987",
        cpf: "***.***.789-01",
        status: "ativo",
        pontos: 1890,
        ultimaVisita: "2024-04-25",
        cuponsAtivos: 2
    },
    {
        nome: "Larissa Costa",
        email: "larissa.costa@email.com",
        telefone: "(11) 93210-9876",
        cpf: "***.***.456-23",
        status: "inativo",
        pontos: 420,
        ultimaVisita: "2024-02-20",
        cuponsAtivos: 1
    }
];

// Função para criar os cards dos clientes
function criarCardsClientes() {
    const clientsGrid = document.getElementById('clientsGrid');
    if (!clientsGrid) return;

    clientsGrid.innerHTML = clientes.map((cliente, index) => `
        <div class="col-12 col-sm-6 col-lg-4">
            <div class="card cliente-card h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <div>
                            <h6 class="cliente-nome">${cliente.nome}</h6>
                            <span class="cliente-status ${cliente.status === 'ativo' ? 'status-ativo' : 'status-inativo'}">
                                ${cliente.status === 'ativo' ? 'Ativo' : 'Inativo'}
                            </span>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-light btn-sm" type="button" data-bs-toggle="dropdown">
                                <i class="bi bi-three-dots-vertical"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><button class="dropdown-item" onclick="abrirModalCliente(${index})">
                                    <i class="bi bi-eye me-2"></i>Detalhes
                                </button></li>
                                <li><button class="dropdown-item">
                                    <i class="bi bi-pencil me-2"></i>Editar
                                </button></li>
                                <li><button class="dropdown-item">
                                    <i class="bi bi-gift me-2"></i>Enviar Cupom
                                </button></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><button class="dropdown-item text-danger">
                                    <i class="bi bi-trash me-2"></i>Excluir
                                </button></li>
                            </ul>
                        </div>
                    </div>
                    <div class="cliente-detalhes">
                        <p class="mb-1"><i class="bi bi-envelope"></i> ${cliente.email}</p>
                        <p class="mb-1"><i class="bi bi-telephone"></i> ${cliente.telefone}</p>
                        <p class="mb-1"><i class="bi bi-person-badge"></i> CPF: ${cliente.cpf}</p>
                        <p class="mb-3"><i class="bi bi-calendar"></i> Última visita: ${formatarData(cliente.ultimaVisita)}</p>
                    </div>
                    <div class="pontos-info">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span>Pontos Acumulados</span>
                            <span class="pontos-valor">${cliente.pontos}</span>
                        </div>
                        <div class="progress" style="height: 8px;">
                            <div class="progress-bar" role="progressbar" 
                                 style="width: ${(cliente.pontos / 5000 * 100)}%"
                                 aria-valuenow="${cliente.pontos}" 
                                 aria-valuemin="0" 
                                 aria-valuemax="5000">
                            </div>
                        </div>
                        <div class="mt-2 text-end">
                            <small class="text-muted">
                                <i class="bi bi-gift"></i> ${cliente.cuponsAtivos} cupons ativos
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Função para formatar a data
function formatarData(data) {
    return new Date(data).toLocaleDateString('pt-BR');
}

// Inicializar os cards quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    criarCardsClientes();
});

// Função para renderizar os cards de clientes
function renderizarClientes(clientes) {
    const clientsGrid = document.getElementById('clientsGrid');
    clientsGrid.innerHTML = '';

    clientes.forEach(cliente => {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-4';
        
        const card = document.createElement('div');
        card.className = 'card cliente-card h-100 animate-fade-in';
        card.innerHTML = `
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <div>
                        <h3 class="cliente-nome">${cliente.nome}</h3>
                        <div class="cliente-detalhes">
                            <div class="mb-1">
                                <i class='bx bx-envelope'></i> ${cliente.email}
                            </div>
                            <div class="mb-1">
                                <i class='bx bx-phone'></i> ${cliente.telefone}
                            </div>
                            <div class="mb-2">
                                <i class='bx bx-id-card'></i> ${cliente.cpf}
                            </div>
                        </div>
                    </div>
                    <span class="cliente-status ${cliente.ativo ? 'status-ativo' : 'status-inativo'}">
                        ${cliente.ativo ? 'Ativo' : 'Inativo'}
                    </span>
                </div>
                <div class="pontos-info mb-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="text-muted">Pontos Acumulados</span>
                        <span class="pontos-valor">${cliente.pontos}</span>
                    </div>
                    <div class="progress mt-2" style="height: 6px;">
                        <div class="progress-bar" role="progressbar" style="width: ${(cliente.pontos/3000)*100}%" aria-valuenow="${cliente.pontos}" aria-valuemin="0" aria-valuemax="3000"></div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">
                        <i class='bx bx-calendar'></i> Última compra: ${formatarData(cliente.ultimaCompra)}
                    </small>
                    <button class="btn btn-sm btn-primary" onclick="abrirModalCliente(${cliente.id})">
                        <i class='bx bx-detail'></i> Detalhes
                    </button>
                </div>
            </div>
        `;
        col.appendChild(card);
        clientsGrid.appendChild(col);
    });
}

// Função para abrir modal do cliente
function abrirModalCliente(index) {
    const cliente = clientes[index];
    if (!cliente) return;

    // Remover modal anterior se existir
    const modalAntigo = document.getElementById('clienteModal');
    if (modalAntigo) {
        modalAntigo.remove();
    }

    const modalHtml = `
        <div class="modal fade" id="clienteModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Detalhes do Cliente</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="cliente-perfil mb-4">
                            <div class="row">
                                <div class="col-md-6">
                                    <h4>${cliente.nome}</h4>
                                    <p class="text-muted mb-1">${cliente.email}</p>
                                    <p class="text-muted mb-1">${cliente.telefone}</p>
                                    <p class="text-muted">CPF: ${cliente.cpf}</p>
                                    <span class="cliente-status ${cliente.status === 'ativo' ? 'status-ativo' : 'status-inativo'}">
                                        ${cliente.status === 'ativo' ? 'Ativo' : 'Inativo'}
                                    </span>
                                </div>
                                <div class="col-md-6 text-md-end">
                                    <div class="pontos-display">
                                        <h6 class="text-muted mb-1">Pontos Acumulados</h6>
                                        <h3 class="text-primary">${cliente.pontos} pts</h3>
                                        <div class="progress mt-2" style="height: 6px;">
                                            <div class="progress-bar" role="progressbar" 
                                                 style="width: ${(cliente.pontos/5000)*100}%" 
                                                 aria-valuenow="${cliente.pontos}" 
                                                 aria-valuemin="0" 
                                                 aria-valuemax="5000">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <ul class="nav nav-tabs mb-4">
                            <li class="nav-item">
                                <a class="nav-link active" data-bs-toggle="tab" href="#cuponsAtivos">
                                    Cupons Ativos (${cliente.cuponsAtivos})
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#historicoVisitas">
                                    Histórico de Visitas
                                </a>
                            </li>
                        </ul>
                        
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="cuponsAtivos">
                                <div class="row g-3">
                                    ${cliente.cuponsAtivos > 0 ? `
                                        <div class="col-md-6">
                                            <div class="card h-100">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between align-items-start">
                                                        <div>
                                                            <h6 class="card-title mb-1">Desconto em Compras</h6>
                                                            <h5 class="text-primary mb-2">R$ 50,00</h5>
                                                            <small class="text-muted">Válido até ${formatarData(new Date(Date.now() + 30*24*60*60*1000))}</small>
                                                        </div>
                                                        <button class="btn btn-sm btn-outline-primary">
                                                            Usar Agora
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ` : `
                                        <div class="text-center py-4">
                                            <i class="bi bi-gift text-muted" style="font-size: 3rem;"></i>
                                            <p class="text-muted mt-2">Nenhum cupom ativo no momento</p>
                                        </div>
                                    `}
                                </div>
                            </div>
                            
                            <div class="tab-pane fade" id="historicoVisitas">
                                <div class="list-group">
                                    <div class="list-group-item">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h6 class="mb-1">Última Visita</h6>
                                            <small class="text-muted">${formatarData(cliente.ultimaVisita)}</small>
                                        </div>
                                        <p class="mb-1">Visita Regular</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary">Editar Cliente</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Adicionar novo modal ao DOM
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Garantir que o Bootstrap está carregado
    if (typeof bootstrap !== 'undefined') {
        const modalElement = document.getElementById('clienteModal');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    } else {
        console.error('Bootstrap não está carregado');
    }
}

// Função para resgatar cupom
function resgatarCupom(codigo) {
    showToast(`Cupom ${codigo} resgatado com sucesso!`, 'success');
}

// Função para selecionar cupom
function selecionarCupom(codigo) {
    showToast(`Cupom ${codigo} adicionado com sucesso!`, 'success');
    const modal = bootstrap.Modal.getInstance(document.getElementById('clienteModal'));
    modal.hide();
}

// Função para mostrar toast
function showToast(message, type = 'success') {
    const toastContainer = document.createElement('div');
    toastContainer.className = `toast-container position-fixed bottom-0 end-0 p-3`;
    toastContainer.innerHTML = `
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">Notificação</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        </div>
    `;
    
    document.body.appendChild(toastContainer);
    const toast = new bootstrap.Toast(toastContainer.querySelector('.toast'));
    toast.show();
    
    setTimeout(() => {
        toastContainer.remove();
    }, 3000);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderizarClientes(clientes);
    
    // Inicializar tooltips do Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Adicionar evento de busca
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const termo = e.target.value.toLowerCase();
            const clientesFiltrados = clientes.filter(cliente => 
                cliente.nome.toLowerCase().includes(termo) ||
                cliente.email.toLowerCase().includes(termo) ||
                cliente.cpf.includes(termo) ||
                cliente.telefone.includes(termo)
            );
            renderizarClientes(clientesFiltrados);
        });
    }
});

// Animações de entrada
function animateCSS(element, animation) {
    return new Promise((resolve) => {
        const node = document.querySelector(element);
        node.classList.add('animate__animated', `animate__${animation}`);
        
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove('animate__animated', `animate__${animation}`);
            resolve('Animation ended');
        }
        
        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });
}

// Animações de entrada
const animateItems = document.querySelectorAll('.animate-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

animateItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    observer.observe(item);
});

// Efeitos de hover nos cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});

// Controle da Sidebar
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleSidebarBtn');
    const closeBtn = document.getElementById('closeSidebarBtn');

    // Função para mostrar/esconder o sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('show');
    }

    // Função para fechar o sidebar
    function closeSidebar() {
        sidebar.classList.remove('show');
    }

    // Event listeners
    toggleBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', closeSidebar);

    // Fechar o sidebar ao clicar fora dele em dispositivos móveis
    document.addEventListener('click', function(event) {
        const isMobile = window.innerWidth < 768;
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggleBtn = toggleBtn.contains(event.target);
        
        if (isMobile && !isClickInsideSidebar && !isClickOnToggleBtn && sidebar.classList.contains('show')) {
            closeSidebar();
        }
    });

    // Fechar o sidebar ao redimensionar a janela para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            closeSidebar();
        }
    });
});

// Controle da navbar mobile
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.mobile-nav');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scroll para baixo - esconde a navbar
        navbar.classList.remove('show');
    } else {
        // Scroll para cima - mostra a navbar
        navbar.classList.add('show');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

// Mostrar navbar inicialmente
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.mobile-nav');
    navbar.classList.add('show');
}); 