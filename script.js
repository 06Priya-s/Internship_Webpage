
function handleClick(url) {
  // Animation (shake effect)
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.classList.remove('shake');
  });

  const clickedCard = event.currentTarget;
  clickedCard.classList.add('shake');

  // Navigate after short delay
  setTimeout(() => {
    window.open(url, '_blank');
  }, 300);
}

// Add basic shake effect with CSS
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(1deg); }
  40% { transform: rotate(-1deg); }
  60% { transform: rotate(1deg); }
  80% { transform: rotate(-1deg); }
  100% { transform: rotate(0deg); }
}

.shake {
  animation: shake 0.3s ease;
}
`;
document.head.appendChild(style);


