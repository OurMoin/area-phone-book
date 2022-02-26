const userData = [
  {
    id: 1,
    photo: "../resources/icons/religious-place/mosque.png",
    name: "মসজিদ",
    link: "mosque"
  }
  ];

  function userTemplate(user) {
    return `
  <div class="col-xl-4 col-md-6">
        <div class="card">
            <div class="card-header">
                <div class="overflow-hidden">
                    <div class="card-content">
                        <div class="cleartfix">
                            <div class="media align-items-stretch">
                                <div class="align-self-center">
                                    
                                          
                                </div>
                                <div class="media-body">
  
                                    <h3 class="manu-item">${user.name}</h3>
                                    <div class="row">
                                        <span style="font-size: 20px;" class="col-6 topic tp4"> <a href="#${user.id}"
                                                data-toggle="collapse">আরো দেখুন<i
                                                    class="fa fa-chevron-down"></i></a> </span>
                                    </div>                                                
                                </div>                          
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
  
            <div id="${user.id}" class="collapse">
                <div>
                    <small>${user.detail}</small>
                </div>
  
            </div>
        </div>
    </div>
  
  
    
  
  `;
  }
  
  document.getElementById("user").innerHTML = `
  ${userData.map(userTemplate).join("")}  
  `;
  
  
  
  