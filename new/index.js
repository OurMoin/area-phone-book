function cardTemplate(card) {
    return `
    <div class="col-6 col-sm-4 col-md-3 col-lg-2 float-left">
    <div class="justify-content-between align-content-between icon-card icon-card-responsive">
        <img src="${card.photo}" class="icon">
        <a href="${card.facebook}" target="_blank">${card.name}</a>
        <a href="tel:${card.phoneNumber}" target="_blank">${card.phoneNumber}</a>
        <a href="${card.map}" target="_blank">${card.location}</a>
    </div>
  </div>
    `;
  }
  
  document.getElementById("app").innerHTML = `
    ${cardsData.map(cardTemplate).join("")}
  `;