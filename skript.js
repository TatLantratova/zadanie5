// Получаем элементы
const burgerMenu = document.getElementById('burgerMenu');
const mainNav = document.getElementById('mainNav');

// Добавляем обработчик клика по бургеру
burgerMenu.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    
    // Анимация бургера
    const spans = burgerMenu.querySelectorAll('span');
    if (mainNav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg)';
        spans[0].style.top = '7px';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg)';
        spans[2].style.top = '-7px';
    } else {
        spans[0].style.transform = 'rotate(0)';
        spans[0].style.top = '0';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0)';
        spans[2].style.top = '0';
    }
});

// Закрытие меню при клике по ссылке
document.querySelectorAll('#mainNav a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        
        // Возвращаем бургер в исходное состояние
        const spans = burgerMenu.querySelectorAll('span');
        spans[0].style.transform = 'rotate(0)';
        spans[0].style.top = '0';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0)';
        spans[2].style.top = '0';
    });
});