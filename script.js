const students = [
    {
        name: 'ibrohim',
        lastName: 'Faruxov',
        studentId: '3344',
        studentPassword: '1747',
        teacherName: 'Diyor',
        studentGrop: '2057',
        studentCoin: 428,
        studentHp: 428,
        studentLevl: 5
    },
    {
        name: 'Karom',
        lastName: 'Tenkat',
        studentId: '1122',
        studentPassword: '6969',
        teacherName: 'Diyor-Krasavchik',
        studentGrop: '2057',
        studentCoin: 500,
        studentHp: 1000,
        studentLevl: 1
    },
    {
        name: 'sancho',
        lastName: 'kashanda',
        studentId: '1010',
        studentPassword: '7171',
        teacherName: 'Diyor-Krasavchik',
        studentGrop: '2057',
        studentCoin: 500,
        studentHp: 1000,
        studentLevl: 1
    }
];

const inputName = document.querySelector('#inputName');
const inputPassword = document.querySelector('#inputPassword');
const sentBtn = document.querySelector('#sentBtn');
const updateButtonColor = () => {
    if (inputName.value.trim() !== '' && inputPassword.value.trim() !== '') {
        sentBtn.style.backgroundColor = 'orangered';
    } else {
        sentBtn.style.backgroundColor = '#F69E86';
    }
};

// Функция для обработки входа
const handleLogin = () => {
    const enteredId = inputName.value.trim();
    const enteredPassword = inputPassword.value.trim();

    const foundStudent = students.find((student) => {
        return student.studentId === enteredId && student.studentPassword === enteredPassword;
    });

    if (foundStudent) {
        localStorage.setItem('student', JSON.stringify(foundStudent));
        window.location.href = 'home.html';
    } else {
        alert('login yoki parol xato !');
    }
};

inputName.addEventListener('input', updateButtonColor);
inputPassword.addEventListener('input', updateButtonColor);

inputPassword.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        handleLogin();
    }
});

sentBtn.addEventListener('click', handleLogin);

                                                                                                        
updateButtonColor();