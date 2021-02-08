const helpsData = [
    {
        img1: "../resources/images/help-card/slider1.png",
        img2: "../resources/images/help-card/slider2.png",
        img3: "../resources/images/help-card/slider3.png"
    }
];


function helpTemplate(help) {
    return `
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100 help-card" src="${help.img1}" alt="First slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100 help-card" src="${help.img2}" alt="Second slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100 help-card" src="${help.img3}" alt="Third slide">
            </div>
        </div>        
    </div>
    `;
}


// Previous & Next button for slaider
/* 
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
</a>
*/


document.getElementById("help").innerHTML = `
    ${helpsData.map(helpTemplate).join("")}
  `;


