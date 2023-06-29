const field = document.querySelector('#game-field'); // ПОЛЕ

const box = document.querySelector('#box'); // МЯЧ

field.addEventListener('mousemove', moveBox);

function moveBox(event) {
  const { clientX, clientY } = event;

  const fieldRect = field.getBoundingClientRect();
  const boxSize = box.offsetWidth;

  // Рассчитываем позицию мяча относительно игрового поля
  const boxX = clientX - fieldRect.left - boxSize / 2;
  const boxY = clientY - fieldRect.top - boxSize / 2;

  // Ограничиваем движение мяча в пределах игрового поля
  const maxX = field.offsetWidth - boxSize;
  const maxY = field.offsetHeight - boxSize;
  const restrictedX = Math.max(0, Math.min(boxX, maxX));
  const restrictedY = Math.max(0, Math.min(boxY, maxY));

  // Обновляем позицию мяча
  box.style.left = `${restrictedX}px`;
  box.style.top = `${restrictedY}px`;
}