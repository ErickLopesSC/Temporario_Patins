document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const toggleBtn = document.getElementById('toggle-sidebar');
    const sidebarTexts = document.querySelectorAll('.sidebar-text');
    const sidebarTitle = document.getElementById('sidebar-title');
    const sidebarLogo = document.getElementById('sidebar-logo');
    const sidebarHeader = document.getElementById('sidebar-header');

    let isCollapsed = false;

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            if (window.innerWidth >= 768) {
                // Comportamento para Desktop (Recolher lateralmente)
                isCollapsed = !isCollapsed;
                if (isCollapsed) {
                    sidebar.classList.remove('w-64');
                    sidebar.classList.add('w-20');
                    mainContent.classList.remove('md:ml-64');
                    mainContent.classList.add('md:ml-20');
                    
                    sidebarTitle.classList.add('hidden');
                    sidebarLogo.classList.remove('w-24', 'h-24');
                    sidebarLogo.classList.add('w-10', 'h-10');
                    sidebarHeader.classList.remove('p-6');
                    sidebarHeader.classList.add('p-4');

                    sidebarTexts.forEach(el => el.classList.add('hidden'));
                } else {
                    // Expandir
                    sidebar.classList.remove('w-20');
                    sidebar.classList.add('w-64');
                    mainContent.classList.remove('md:ml-20');
                    mainContent.classList.add('md:ml-64');
                    
                    sidebarTitle.classList.remove('hidden');
                    sidebarLogo.classList.remove('w-10', 'h-10');
                    sidebarLogo.classList.add('w-24', 'h-24');
                    sidebarHeader.classList.remove('p-4');
                    sidebarHeader.classList.add('p-6');

                    sidebarTexts.forEach(el => el.classList.remove('hidden'));
                }
            } else {
                // Comportamento para Mobile (Aparecer/Esconder)
                sidebar.classList.toggle('hidden');
            }
        });
    }
});