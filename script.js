var images = ["url(fone.jpg)", "url(boom.jpg)"]; // ������ ����� � ������� ���������
var currentIndex = 0;

function changeBackgroundImage() {
    document.body.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // ������� � ��������� ��������
}