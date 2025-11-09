/* Lógica da troca de texto na seção de funcionalidades */
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

//button dashboard
document.getElementById("btnDashboard").addEventListener("click", function() {
  window.open("http://dashsophia.dotlabbrazil.com.br/", "_blank");
});

// Verifica se a URL atual existe no servidor; se não existir redireciona para erro.html
(function () {
  try {
    // Não tentar checar quando aberto via file:// (faz fetch falhar)
    if (location.protocol === 'file:') return;

    const pathname = location.pathname;
    // Não rodar na página de erro, na raiz ou no index
    if (pathname.endsWith('erro.html') || pathname.endsWith('index.html') || pathname === '/') return;

    // Use um caminho absoluto para garantir que apontamos para o erro na raiz
    const errorUrl = location.origin + '/erro.html';

    // Tenta usar HEAD primeiro (menos custo). Alguns servidores não suportam HEAD — tratamos no catch.
    fetch(location.href, { method: 'HEAD' })
      .then(res => {
        if (!res.ok) {
          if (!location.href.endsWith('erro.html')) location.replace(errorUrl);
        }
      })
      .catch(() => {
        // Fallback para GET caso HEAD não seja suportado
        fetch(location.href, { method: 'GET' })
          .then(r => {
            if (!r.ok) {
              if (!location.href.endsWith('erro.html')) location.replace(errorUrl);
            }
          })
          .catch(() => {
            // Se houver erro de rede, não redirecionar automaticamente
          });
      });
  } catch (e) {
    // Se qualquer erro ocorrer, não bloquear a navegação
    console.error('check-url error', e);
  }
})();
