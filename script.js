// Smooth scroll navigation
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Modal functionality
const contactBtn = document.getElementById('contactBtn');
const modalBg = document.getElementById('modalBg');
const modalClose = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');
contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modalBg.style.display = 'flex';
});
modalClose.addEventListener('click', () => {
  modalBg.style.display = 'none';
  contactForm.reset();
  formResponse.style.display = 'none';
});
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formResponse.style.display = 'block';
  setTimeout(() => {
    modalBg.style.display = 'none';
    contactForm.reset();
    formResponse.style.display = 'none';
  }, 1400);
});

// Hidden phone number with 3-click Easter egg
let clickCount = 0;
const showNumberBtn = document.getElementById('showNumberBtn');
const hiddenNumber = document.getElementById('hiddenNumber');
showNumberBtn.addEventListener('click', function(e) {
  e.preventDefault();
  clickCount += 1;
  if (clickCount >= 3) {
    showNumberBtn.style.display = 'none';
    hiddenNumber.style.display = 'inline-block';
  } else {
    showNumberBtn.innerText = Show Number (${3 - clickCount});
  }
});

// Fancy 200-line code for each skill
function makeSampleCode(lang) {
  let result = "";
  if (lang === "java") {
    result += "// Java rainbow printing demo [200 lines]\n";
    for (let i = 1; i <= 200; ++i)
      result += System.out.println("Java line #${i} - My neon skills rock! 🚀");\n;
  } else if (lang === "python") {
    result += "# Python magic rainbow output [200 lines]\n";
    for (let i = 1; i <= 200; ++i)
      result += print("Python line #${i} – Neon code rebellion!")\n;
  } else if (lang === "js") {
    result += "// JavaScript looping lightning [200 lines]\n";
    for (let i = 1; i <= 200; ++i)
      result += console.log("JavaScript line #${i} > Sujal's neon JS forever!");\n;
  }
  return result;
}
document.querySelectorAll('.show-code').forEach(btn => {
  btn.addEventListener('click', function() {
    let lang = btn.getAttribute('data-lang');
    let codeBlock = document.getElementById(${lang}-code);
    if (codeBlock.style.display === "block") {
      codeBlock.style.display = "none";
      btn.innerText = 📝 Show Code (200 lines);
    } else {
      codeBlock.textContent = makeSampleCode(lang);
      codeBlock.style.display = "block";
      btn.innerText = 👁 Hide Code;
    }
  });
});