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
                    <div class="nav-item dropdown">
                        <a class="" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-v"></i>
                        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="https://forms.gle/QNqDBmJFR9tnPvwBA" target="_blank"><i class="fas fa-user-plus"></i> Sign Up</a>
                            <a class="dropdown-item" href="tel:${nav.ourNumber}"><i class="fas fa-phone-alt"></i> Call Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav> 
    `;
}


document.getElementById("nav").innerHTML = `
    ${navsData.map(navTemplate).join("")}
  `;

{/* <a href="tel:${nav.ourNumber}"><i class="fas fa-ellipsis-v"></i></a> */}
