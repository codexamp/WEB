let copyBtn = document.querySelector('.copy-btn');
let text = document.querySelector('.text-copy').innerText;
let message = document.querySelector('.copy-message');


copyBtn.addEventListener('click', function() {
  navigator.clipboard.writeText(text);
});
