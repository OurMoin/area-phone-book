function subCategoryTemplate(subCategory) {
    return `
    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <a href="#">
            <div class="justify-content-between align-content-between icon-card icon-card-responsive">
                <img src="https://www.areaphonebook.com/old/resources/images/icon/005-car.png" alt="Hospital Service" class="icon">
                <p>এ্যাম্বুলেন্স</p>
            </div>
        </a>
    </div>
    `;
}


document.getElementById("subCategory").innerHTML = `
    ${subCategorysData.map(subCategoryTemplate).join("")}
  `;


