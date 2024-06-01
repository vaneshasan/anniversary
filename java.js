
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  document.addEventListener('DOMContentLoaded', function() {
    function showLetter() {
        var letter = document.getElementById('letter');
        letter.style.display = 'block';
        letter.style.animation = 'fadeIn 10s ease-in-out forwards';
    }

    setTimeout(showLetter, 10000);
});