function navTemplate(nav) {
    return `
    <nav class="blog-header fixed-top">
        <div class="container">
            <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-2 logo-div">
                    <a href="${nav.link}"><i class="fas ${nav.icon}"></i></a>
                </div>
                <div class="col-8 text-center logo-div">
                    <a class="blog-header-logo" href="/">${nav.name}</a><sup>${nav.version}</sup>
                </div>
                <div class="col-2 d-flex justify-content-end align-items-center logo-div">
                    <a href="tel:${nav.ourNumber}"><i class="fas fa-ellipsis-v"></i></a>
                </div>
            </div>
        </div>
    </nav> 
    `;
}


document.getElementById("nav").innerHTML = `
    ${navsData.map(navTemplate).join("")}
  `;


