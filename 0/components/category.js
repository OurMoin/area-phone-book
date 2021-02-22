function categoryTemplate(category) {
    return `
    <div class="col-xl-4 col-md-6">
        <a href="${category.link}">
            <div class="card overflow-hidden">
                <div class="card-content">
                    <div class="card-body cleartfix">
                        <div class="media align-items-stretch">
                            <div class="align-self-center">
                                <img class="manu-img" src="${category.img}" alt="${category.name}">
                            </div>
                            <div class="media-body">
                                <h4 class="manu-item">${category.name}</h4>
                                <span class="topic tp1">${category.tp1}</span>
                                <span class="topic tp2">${category.tp2}</span>
                                <span class="topic tp3">${category.tp3}</span>
                                <span class="topic tp4">...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    `;
}


document.getElementById("category").innerHTML = `
    ${categorysData.map(categoryTemplate).join("")}
  `;


