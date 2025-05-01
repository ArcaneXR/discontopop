document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const closeButton = document.getElementById('closeNavigation');
    const navigationModal = document.getElementById('navigationModal');
    const profileButton = document.getElementById('profileButton');
    const menuItems = document.querySelectorAll('.menu-item');

    // Abrir modal de navegação
    menuButton.addEventListener('click', function() {
        navigationModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    // Fechar modal de navegação
    closeButton.addEventListener('click', function() {
        navigationModal.classList.add('hidden');
        document.body.style.overflow = '';
    });

    // Fechar modal ao clicar fora
    navigationModal.addEventListener('click', function(e) {
        if (e.target === this) {
            navigationModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });

    // Prevenir que o modal feche ao clicar no conteúdo
    document.querySelector('.navigation-content').addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Fechar modal ao selecionar um item
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            navigationModal.classList.add('hidden');
            document.body.style.overflow = '';
        });
    });

    // Abrir modal de perfil
    profileButton.addEventListener('click', function() {
        // Implementar abertura do modal de perfil
        alert('Modal de perfil será implementado');
    });
}); 