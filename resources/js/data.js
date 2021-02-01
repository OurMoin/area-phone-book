function cardTemplate(card) {
    return `
    <div class="col-xl-4 col-md-6 float-left">
      <div class="card overflow-hidden">
        <div class="card-content">
          <div class="card-body cleartfix">
            <div class="media align-items-stretch">
              <div class="align-self-center">
                <img src="${card.photo}" class="icon user-img">
              </div>
              <div class="media-body">
                <h4><a href="${card.facebook}" target="_blank">${card.name}</a></h4>
                <span><a href="tel:${card.phoneNumber}" target="_blank">${card.phoneNumber}</a></span>
                <br>
                <span><a href="${card.map}" target="_blank">${card.location}</a></span>
              </div>
              <div class="align-self-center">
                <a href="tel:${card.phoneNumber}">
                  <i class="call-loc fas fa-phone-alt"></i>
                </a>
                <a href="${card.map}" target="_blank">
                  <i class="fas fa-map-marker-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
  
  document.getElementById("app").innerHTML = `
    ${cardsData.map(cardTemplate).join("")}
  `;