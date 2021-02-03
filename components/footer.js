const footersData = [
    {}
];


function footerTemplate(footer) {
    return `
    <div class="blog-header">
        <div class="container">
            <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-6 pt-1">
                    <ul>
                        <li><a href="#" title="Privacy"><i class="fas fa-user-secret"></i></a></li>
                        <li><a href="#" title="Terms"><i class="fas fa-file-alt"></i></a></li>
                        <li><a href="#" title="Sponsor"><i class="fas fa-handshake"></i></a></li>
                        <li><a href="#" title="About"><i class="fas fa-info-circle"></i></a></li>
                    </ul>
                </div>
                <div class="col-6 d-flex justify-content-end align-items-center">
                    <ul>
                        <li><a href="tel:01798899911" target="_blank"><i class="fas fa-phone-square-alt"></i></a>
                        </li>
                        <li><a href="mailto:areaphonebook@gmail.com" target="_blank"><i
                                    class="fas fa-envelope"></i></a></li>
                        <li><a href="https://www.facebook.com/groups/Paglabashi" target="_blank"><i
                                    class="fas fa-users"></i></a></li>
                        <li><a href="https://www.facebook.com/AreaPhoneBook" target="_blank"><i
                                    class="fab fa-facebook-square"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center copyright">
                    <p>Area Phonebook &#169; 2021</p>
                </div>
            </div>
        </div>
    </div>
    `;
}


document.getElementById("footer").innerHTML = `
    ${footersData.map(footerTemplate).join("")}
  `;


