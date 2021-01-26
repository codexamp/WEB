let copyBtn = document.querySelector('.copy-btn');
let articleCopyText = document.querySelector('.text-copy').innerText;

copyBtn.addEventListener('click', function() {
  navigator.clipboard.writeText(articleCopyText);
});
