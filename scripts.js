document.querySelectorAll(".favorite").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.post-vote').forEach(voteBlock => {
    const [upBtn, downBtn] = voteBlock.querySelectorAll(':scope > button');
    const scoreSpan       = voteBlock.querySelector('.post-vote-score');
    let score             = parseInt(scoreSpan.textContent, 10);

    upBtn.addEventListener('click', e => {
      e.preventDefault();
      const wasUp   = upBtn.classList.contains('active');
      const wasDown = downBtn.classList.contains('active');

      if (!wasUp) {
        if (wasDown) {
          downBtn.classList.remove('active');
          score += 2;    
        } else {
          score += 1;    
        }
        upBtn.classList.add('active');
      } else {
        upBtn.classList.remove('active');
        score -= 1;
      }

      scoreSpan.textContent = score;
    });

    downBtn.addEventListener('click', e => {
      e.preventDefault();
      const wasUp   = upBtn.classList.contains('active');
      const wasDown = downBtn.classList.contains('active');

      if (!wasDown) {
        if (wasUp) {
          upBtn.classList.remove('active');
          score -= 2;    
        } else {
          score -= 1;   
        }
        downBtn.classList.add('active');
      } else {
        downBtn.classList.remove('active');
        score += 1;
      }

      scoreSpan.textContent = score;
    });
  });
});
