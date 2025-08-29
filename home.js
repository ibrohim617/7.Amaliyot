// Проверяем наличие данных о пользователе в localStorage
const studentData = localStorage.getItem('student');

if (studentData) {
    const student = JSON.parse(studentData);

    // Отображаем данные пользователя на странице
    document.querySelector('#studentName').textContent = student.name;
    document.querySelector('#studentFullName').textContent = student.lastName;
    document.querySelector('#studentGroupTeacher').textContent = `DS: ${student.studentGrop} | ${student.teacherName}`;
    document.querySelector('#studentCoin').textContent = student.studentCoin;
    document.querySelector('#studentHp').textContent = student.studentHp;

    // Заполнение звезд в зависимости от уровня с использованием изображений
    const starBox = document.querySelector('#starBox');
    starBox.innerHTML = ''; // Очищаем существующие звезды
    for (let i = 0; i < 5; i++) {
        const starImg = document.createElement('img');
        starImg.src = '/img/yulduz.png';
        starImg.alt = 'Star';
        starImg.classList.add('w-6', 'h-6', 'mx-1');
        if (i >= student.studentLevl) {
            starImg.classList.add('grayscale');
        }
        starBox.appendChild(starImg);
    }
} else {
    // Если данных нет, перенаправляем на страницу входа
    window.location.href = '/login-page/index.html';
}

// Обработчик для кнопки "Log out"
const logOutBtn = document.querySelector('#logOutBtn');

logOutBtn.addEventListener('click', () => {
    // Удаляем данные пользователя из Local Storage
    localStorage.removeItem('student');
    // Перенаправляем на страницу входа
    window.location.href = '/index.html';
});