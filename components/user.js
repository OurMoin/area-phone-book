function userTemplate(user) {
    return `
    <div class="col-xl-4 col-md-6 float-left">
      <div class="card overflow-hidden">
        <div class="card-content">
          <div class="card-body cleartfix">
            <div class="media align-items-stretch">
              <div class="align-self-center">
                <img src="${user.photo}" alt="${user.name}" class="manu-img">
              </div>
              <div class="media-body">
                <h4><a href="${user.facebook}" target="_blank">${user.name}</a></h4>
                <span><a href="tel:${user.phoneNumber}" target="_blank">${user.phoneNumber}</a></span>
                <br>
                <span>ওয়ার্ড নং: ${user.wordNo}, ${user.location}</span>
                <br>
                <span>${user.detail}</span>
              </div>
              <div class="align-self-center">
                <a href="tel:${user.phoneNumber}">
                  <i class="call-icon fas fa-phone-alt"></i>
                </a>
                <a href="#">
                  <i class="fas fa-arrow-alt-circle-down"></i>
                </a>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
  
  document.getElementById("user").innerHTML = `
    ${usersData.map(userTemplate).join("")}
  `;