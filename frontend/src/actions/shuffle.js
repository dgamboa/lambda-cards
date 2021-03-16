// Fisher–Yates Shuffle
export default function shuffle(list) {
  const listCopy = [...list];
  let numberOfCards = listCopy.length, currentElement, randomElementIndex;

  while (numberOfCards) {
    randomElementIndex = Math.floor(Math.random() * numberOfCards--);
    currentElement = listCopy[numberOfCards];
    listCopy[numberOfCards] = listCopy[randomElementIndex];
    listCopy[randomElementIndex] = currentElement;
  }

  return listCopy;
};