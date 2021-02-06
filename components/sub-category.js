function subCategoryTemplate(subCategory) {
    return `
    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <a href="${subCategory.link}">
            <div class="justify-content-between align-content-between icon-card">
                <img src="${subCategory.img}" alt="${subCategory.name}" class="icon">
                <p>${subCategory.name}</p>
            </div>
        </a>
    </div>
    `;
}


document.getElementById("subCategory").innerHTML = `
    ${subCategorysData.map(subCategoryTemplate).join("")}
  `;


