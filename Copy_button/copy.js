let copyBtn = document.querySelector('.copy-btn');
let text = document.querySelector('.text').innerText;
let message = document.querySelector('.copy-message');


copyBtn.addEventListener('click', function() {
  navigator.clipboard.writeText(text);
  setTimeout(function(){
    message.style.display = 'flex'
  }, 100)
  setTimeout(function(){
    message.style.display = 'none'
  }, 1000)
});
