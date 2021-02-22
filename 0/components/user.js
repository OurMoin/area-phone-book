function userTemplate(user) {
    return `
    <div class="col-xl-4 col-md-6 float-left">
    <div class="faq-card">
        <div id="accordion">
            <div class="card overflow-hidden">
                <div class="card-content">
                    <div class="card-body cleartfix">
                        <div class="media align-items-stretch">
                            <div class="align-self-center">
                                <img src="../resources/images/icon/user/user.png" alt=""
                                    class="manu-img">
                            </div>
                            <div class="media-body">
                                <h4><a href="#" target="_blank">
                                        নিয়ম কম্পিউটার ট্রেনিং</a></h4>
                                <span><a href="#" target="_blank">01303002226</a></span>
                                <br>
                                <span>ওয়ার্ড নং: ৬, প্যারাডাইস সিটি</span>
                            </div>
                            <div class="align-self-center">
                                <a href="tel:${user.phoneNumber}">
                                    <i class="call-icon fas fa-phone-alt"></i>
                                </a>

                                <a href="#heading${user.serial}">
                                    <i class="fas fa-arrow-alt-circle-down" data-toggle="collapse"
                                        data-target="#collapse${user.serial}" aria-expanded="true"
                                        aria-controls="collapse${user.serial}"></i>
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="collapse${user.serial}" class="collapse" aria-labelledby="heading${user.serial}"
                data-parent="#accordion">
                <div class="card-body">
                    ${user.detail}
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