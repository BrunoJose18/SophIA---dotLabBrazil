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