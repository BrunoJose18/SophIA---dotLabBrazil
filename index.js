document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.funcionalidades-span .trigger');
    const contentSections = document.querySelectorAll('.funcionalidades .funcionalidades-conteudo');

    function ativarConteudo(trigger) {
    triggers.forEach(t => t.classList.remove('ativo'));
    trigger.classList.add('ativo');

    const targetId = trigger.getAttribute('data-target');
    contentSections.forEach(section => section.classList.remove('ativo'));
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('ativo');
    }
}

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => ativarConteudo(trigger));
    });

    const firstTrigger = document.querySelector('.funcionalidades-span .trigger');
    if (firstTrigger) {
        ativarConteudo(firstTrigger);
    }
});

// MENU RESPONSIVO
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navbar = document.querySelector('.navbar');

    // Toggle menu ao clicar no botão
    menuButton.addEventListener('click', function() {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        navbar.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            menuButton.setAttribute('aria-expanded', 'false');
            navbar.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        const isClickInside = navbar.contains(event.target) || menuButton.contains(event.target);
        
        if (!isClickInside && navbar.classList.contains('active')) {
            menuButton.setAttribute('aria-expanded', 'false');
            navbar.classList.remove('active');
        }
    });
});