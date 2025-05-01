document.addEventListener('DOMContentLoaded', function() {
    const clientModal = document.getElementById('clientModal');
    let selectedCoupon = null;

    // Funções para abrir e fechar o modal do cliente
    window.openClientModal = function(name, email, initials) {
        document.getElementById('modalName').textContent = name;
        document.getElementById('modalEmail').textContent = email;
        document.getElementById('modalAvatar').textContent = initials;
        clientModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    window.closeClientModal = function() {
        clientModal.classList.add('hidden');
        document.body.style.overflow = '';
    };

    // Fechar modal ao clicar fora
    clientModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeClientModal();
        }
    });

    // Trocar entre abas
    window.switchTab = function(tab) {
        const tabs = document.querySelectorAll('.action-tab');
        tabs.forEach(t => t.classList.remove('active'));
        event.target.classList.add('active');

        document.getElementById('addCouponTab').classList.toggle('hidden', tab !== 'add');
        document.getElementById('listCouponsTab').classList.toggle('hidden', tab !== 'list');
    };

    // Selecionar cupom
    window.selectCoupon = function(element, code, value, validUntil) {
        // Remove selection from all coupons
        document.querySelectorAll('.coupon-item.selectable').forEach(item => {
            item.classList.remove('selected');
            item.querySelector('.material-icons').textContent = 'add_circle_outline';
        });

        // Add selection to clicked coupon
        element.classList.add('selected');
        element.querySelector('.material-icons').textContent = 'check_circle';
        
        selectedCoupon = {
            code: code,
            value: value,
            validUntil: validUntil
        };
    };

    // Adicionar cupom selecionado
    window.addSelectedCoupon = function() {
        if (!selectedCoupon) {
            alert('Por favor, selecione um cupom');
            return;
        }

        // Aqui você adicionaria a lógica para adicionar o cupom ao cliente
        alert(`Cupom ${selectedCoupon.code} adicionado com sucesso!`);
        closeClientModal();
    };

    // Resgatar cupom
    window.redeemCoupon = function(button) {
        const couponItem = button.closest('.coupon-item');
        const code = couponItem.querySelector('.coupon-code').textContent;
        const value = couponItem.querySelector('.coupon-value').textContent;
        
        // Aqui você adicionaria a lógica para resgatar o cupom
        alert(`Cupom ${code} no valor de ${value} resgatado com sucesso!`);
        
        // Atualiza o status do cupom
        const status = couponItem.querySelector('.coupon-status');
        status.textContent = 'Usado';
        status.classList.remove('text-success');
        status.classList.add('text-error');
        
        // Remove o botão de resgate
        button.remove();
    };
}); 