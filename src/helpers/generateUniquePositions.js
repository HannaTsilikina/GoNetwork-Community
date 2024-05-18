// Генерация уникальных позиции для элементов
const generateUniquePositions = (isIntersectingThreshold, users) => {
  const maxAttempts = users.length + 25;
  const newPositions = [];
  for (let i = 0; i < users.length; i++) {
    let attempts = 0;
    let newPosition;
    let isIntersecting;
    do {
      newPosition = {
        top: `${Math.random() * 85}%`,
        left: `${Math.random() * 85}%`,
      };
      // Сравнение абсолютных значений разницы с пороговыми значениями
      isIntersecting = newPositions.some(
        ({ top, left }) =>
          Math.abs(parseFloat(top) - parseFloat(newPosition.top)) <
            isIntersectingThreshold.top &&
          Math.abs(parseFloat(left) - parseFloat(newPosition.left)) <
            isIntersectingThreshold.left
      );
      attempts++;
    } while (isIntersecting && attempts < maxAttempts);
    if (!isIntersecting) {
      newPositions.push(newPosition);
    }
  }
  return newPositions;
};

export default generateUniquePositions;
