document.getElementById("to-step-2").addEventListener("click", function () {
  document.getElementById("step-1").style.display = "none";
  document.getElementById("step-2").style.display = "block";
});

document.getElementById("to-step-3").addEventListener("click", function () {
  document.getElementById("step-2").style.display = "none";
  document.getElementById("step-3").style.display = "block";
});

let currentSlide = 1;
const totalSlides = 3;

function nextSlide() {
  document.getElementById(`slide-${currentSlide}`).style.display = "none"; // Скрыть текущий слайд
  currentSlide = (currentSlide % totalSlides) + 1; // Увеличить текущий слайд, зацикливаясь на 1
  document.getElementById(`slide-${currentSlide}`).style.display = "block"; // Показать следующий слайд
}

function prevSlide() {
  document.getElementById(`slide-${currentSlide}`).style.display = "none"; // Скрыть текущий слайд
  currentSlide = ((currentSlide - 2 + totalSlides) % totalSlides) + 1; // Уменьшить текущий слайд, зацикливаясь на последнем
  document.getElementById(`slide-${currentSlide}`).style.display = "block"; // Показать предыдущий слайд
}

document.getElementById("next-slide").addEventListener("click", nextSlide); // Обработчик для кнопки "Next"
document.getElementById("prev-slide").addEventListener("click", prevSlide); // Обработчик для кнопки "Previous"

document.getElementById("to-step-3").addEventListener("click", function () {
  document.getElementById("step-2").style.display = "none"; // Скрыть второй шаг
  document.getElementById("step-3").style.display = "block"; // Показать третий шаг
});

let isMicrophoneOn = true;

function toggleMicrophone() {
  const icon = document.getElementById("microphone-icon").children[0];
  isMicrophoneOn = !isMicrophoneOn;
  icon.src = isMicrophoneOn ? "./images/on.png" : "./images/off.png";
}
