const menu = document.getElementById('menuDetails');
const menuBar = document.getElementById('menuIcon');

menuBar.addEventListener('click', function() {
  if (menu.style.visibility === 'visible') {
    menu.style.visibility = 'hidden';
  } else {
    menu.style.visibility = 'visible';
  }
});

// footer
const faqIcon = document.getElementById('faqIcon');
const faqMsg = document.getElementById('faqMsg');

faqIcon.addEventListener('click', function() {
  if (faqMsg.style.display === 'block') {
    faqMsg.style.display = 'none';
  } else {
    faqMsg.style.display = 'block';0
  }
});

const faqsDetails = document.getElementById('faqsDetails');

const faqContent = [
  'Columbus',
  'Chinedu',
  'Ofega',
  'Salihu',
  ];

  let faq ="";

  for (let i = 0; i < faqContent.length; i++) {
    faq = faq + `<div class="faq-icon">
                  <a href="javascript:void(0)" id="faqIcon"><i class="fa fa-plus"></i></a> Menu 
                  </div>
                  <div class="faq-msg" id="faqMsg"><p>${faqContent[i]}</p></div>`;
  };

  faqsDetails.innerHTML = faq;