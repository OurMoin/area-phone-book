function items(items) {
  return `
    ${items.map(item => `<span class="col-6 topic"><a href="${item.link}">${item.name}</a></span>`).join("")}
`;
}



function catagoryTemplate(category) {
  return `
  <div class="col-xl-4 col-md-6">
      <div class="card">
          <div class="card-header" data-toggle="collapse" data-target="#${category.id}">
              <div class="overflow-hidden">
                  <div class="card-content">
                      <div class="cleartfix">
                          <div class="media align-items-stretch">
                              <div class="align-self-center">
                                  <img class="manu-img" src="${category.photo}" alt="${category.name}">
                              </div>
                              <div class="media-body">
                                
                                  <h3 class="manu-item">${category.name}</h3>
                                  <div class="row">
                                  <span class="col-6 topic tp1"> <a href="${category.subCategory[0].link}">${category.subCategory[0].name}</a> </span>
                                  <span class="col-6 topic tp1"> <a href="${category.subCategory[1].link}">${category.subCategory[1].name}</a> </span>
                                  <span class="col-6 topic tp1"> <a href="${category.subCategory[2].link}">${category.subCategory[2].name}</a> </span>
                                  <span class="col-6 topic tp4"> <a href="#${category.id}" data-toggle="collapse">আরো দেখুন <i class="fa fa-chevron-down"></i></a> </span>
                                 </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div id="${category.id}" class="collapse" data-parent="#accordionExample">
              <div class="row">
                  ${category.subCategory ? items(category.subCategory) : ""}
              </div>
          </div>
      </div>
  </div>
  `;
}

document.getElementById("category").innerHTML = `
  ${categoryData.map(catagoryTemplate).join("")}  
`;


