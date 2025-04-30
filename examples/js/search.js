document.addEventListener('DOMContentLoaded', function() {
    // Dados de exemplo
    const clientes = [
        {
            id: 1,
            nome: 'João Silva',
            email: 'joao.silva@email.com',
            cpf: '156.***.***-80',
            celular: '(11) 98765-4321',
            cupons: 12,
            cashback: 150,
            sorteios: 3
        },
        {
            id: 2,
            nome: 'Maria Santos',
            email: 'maria.santos@email.com',
            cpf: '123.***.***-45',
            celular: '(11) 91234-5678',
            cupons: 8,
            cashback: 75,
            sorteios: 2
        },
        {
            id: 3,
            nome: 'Carlos Oliveira',
            email: 'carlos.oliveira@email.com',
            cpf: '789.***.***-12',
            celular: '(11) 94567-8901',
            cupons: 15,
            cashback: 200,
            sorteios: 5
        },
        {
            id: 4,
            nome: 'Ana Costa',
            email: 'ana.costa@email.com',
            cpf: '456.***.***-78',
            celular: '(11) 92345-6789',
            cupons: 5,
            cashback: 50,
            sorteios: 1
        },
        {
            id: 5,
            nome: 'Pedro Souza',
            email: 'pedro.souza@email.com',
            cpf: '321.***.***-90',
            celular: '(11) 93456-7890',
            cupons: 20,
            cashback: 300,
            sorteios: 8
        },
        {
            id: 6,
            nome: 'Juliana Lima',
            email: 'juliana.lima@email.com',
            cpf: '654.***.***-23',
            celular: '(11) 95678-9012',
            cupons: 10,
            cashback: 125,
            sorteios: 4
        }
    ];

    // Elementos do DOM
    const searchInput = document.getElementById('searchInput');
    const clientsGrid = document.getElementById('clientsGrid');
    const filterButton = document.getElementById('filterButton');

    // Função para renderizar os clientes
    function renderClientes(clientesFiltrados) {
        clientsGrid.innerHTML = '';
        
        clientesFiltrados.forEach(cliente => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all';
            card.onclick = () => openClientModal(cliente.nome, cliente.email, cliente.nome.substring(0, 2).toUpperCase());
            
            card.innerHTML = `
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-xl">
                        ${cliente.nome.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                        <div class="font-semibold text-lg">${cliente.nome}</div>
                        <div class="text-text-light text-sm">${cliente.email}</div>
                        <div class="text-text-light text-sm">${cliente.celular}</div>
                        <div class="text-text-light text-sm">${cliente.cpf}</div>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div class="text-center">
                        <div class="font-bold text-xl text-primary">${cliente.cupons}</div>
                        <div class="text-text-light text-sm">Cupons</div>
                    </div>
                    <div class="text-center">
                        <div class="font-bold text-xl text-primary">R$ ${cliente.cashback}</div>
                        <div class="text-text-light text-sm">Cashback</div>
                    </div>
                    <div class="text-center">
                        <div class="font-bold text-xl text-primary">${cliente.sorteios}</div>
                        <div class="text-text-light text-sm">Sorteios</div>
                    </div>
                </div>
            `;
            
            clientsGrid.appendChild(card);
        });
    }

    function normalize(str) {
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    }

    function filterClients(searchTerm) {
        const normalizedSearch = normalize(searchTerm);
        return clientes.filter(client => {
            const normalizedName = normalize(client.nome);
            const normalizedEmail = normalize(client.email);
            const normalizedCpf = normalize(client.cpf.replace(/[.*-]/g, ''));
            const normalizedCelular = normalize(client.celular.replace(/\D/g, ''));
            
            return normalizedName.includes(normalizedSearch) ||
                   normalizedEmail.includes(normalizedSearch) ||
                   normalizedCpf.includes(normalizedSearch) ||
                   normalizedCelular.includes(normalizedSearch);
        });
    }

    // Função para filtrar clientes
    function filtrarClientes() {
        const termoBusca = searchInput.value.toLowerCase();
        const clientesFiltrados = filterClients(termoBusca);
        renderClientes(clientesFiltrados);
    }

    // Event listeners
    searchInput.addEventListener('input', filtrarClientes);
    filterButton.addEventListener('click', filtrarClientes);

    // Renderizar clientes iniciais
    renderClientes(clientes);
}); 