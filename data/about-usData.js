const usersData = [
    {}
];

function userTemplate(user) {
    return `
    <!-- Founder & Co-Founder -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="../resources/icons/team/sharif-imtaz.jpg"><img src="../resources/icons/team/sharif-imtaz.jpg" alt="sharif imtaz" class="team-img"></a>
            <h2>Sharif Imtaz</h2>
            <p class="text-center">Co-Founder, CMO</p>
            <a href="mailto:shorifallrobi321@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/sharifimtaz" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="https://www.facebook.com/SharifImtaz" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>

    <!-- Founder & Founder -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card icon-card-highlight">
            <a href="../resources/icons/team/moinul-islam.jpg"><img src="../resources/icons/team/moinul-islam.jpg" alt="moinul islam" class="team-img"></a>
            <h2>Moinul Islam</h2>
            <p class="text-center">Founder, CEO</p>
            <a href="mailto:usermoin@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/OurMoin" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="https://www.facebook.com/OurMoin" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>

    <!-- Founder & Co-Founder -->
    <div class="col-md-4">
        <div class="justify-content-between align-content-between team-card">
            <a href="../resources/icons/team/shanto-mondol.jpg"><img src="../resources/icons/team/shanto-mondol.jpg" alt="shanto mondol" class="team-img"></a>
            <h2>Shanto Mondol</h2>
            <p class="text-center">Co-Founder, CTO</p>
            <a href="mailto:shantomondol816@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/shantomondol" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="https://www.facebook.com/shantomondol08" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>

    <!-- membar -->
    <div class="col-md-3">
        <div class="justify-content-between align-content-between team-card">
            <a href="../resources/icons/team/asikur-rahman.jpg"><img src="../resources/icons/team/asikur-rahman.jpg" alt="asikur rahman" class="team-img"></a>
            <h2>Asikur Rahman</h2>
            <p class="text-center">CFO</p>
            <a href="mailto:md.asikurrahman321@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/AreaPhonebook" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="https://www.facebook.com/md.asikurrahman321" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>    

    <!-- membar -->
    <div class="col-md-3">
        <div class="justify-content-between align-content-between team-card">
            <a href="../resources/icons/team/omor-faruk.jpg"><img src="../resources/icons/team/omor-faruk.jpg" alt="fawad saruf" class="team-img"></a>
            <h2>Omor Faruk</h2>
            <p class="text-center">Graphic Designer</p>
            <a href="mailto:omor29196@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/omorfarukkhan" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="https://www.facebook.com/AmiOmorFarukKhan" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>

    <!-- membar -->
    <div class="col-md-3">
        <div class="justify-content-between align-content-between team-card">
            <a href="../resources/icons/team/rabiul-islam.jpg"><img src="../resources/icons/team/rabiul-islam.jpg" alt="rabiul islam" class="team-img"></a>
            <h2>Rabiul Islam</h2>
            <p class="text-center">Django Developer</p>
            <a href="mailto:areaphonebook@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/rabiulislam-xyz" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="https://www.facebook.com/rabiulislam.xyz" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>

    <!-- membar -->
    <div class="col-md-3">
        <div class="justify-content-between align-content-between team-card">
            <a href="../resources/icons/team/monika-momi.jpg"><img src="../resources/icons/team/monika-momi.jpg" alt="monika momi" class="team-img"></a>
            <h2>Monika Momi</h2>
            <p class="text-center">Laravel Developer</p>
            <a href="mailto:devmonikamomi@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/devmonika" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="https://www.facebook.com/monikamomi97" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>


    <!-- membar -->
    <div class="col-md-3">
        <div class="justify-content-between align-content-between team-card">
            <a href="../resources/icons/team/faria-jahan-puspo.jpg"><img src="../resources/icons/team/faria-jahan-puspo.jpg" alt="faria jahan puspo" class="team-img"></a>
            <h2>Faria J Puspo</h2>
            <p class="text-center">Customer Service</p>
            <a href="mailto:areaphonebook@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com/AreaPhonebook" target="_blank"><i class="fab fa-github-square"></i></a>
            <a href="https://www.facebook.com/FariaJahanPuspo52" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    </div>
    `;
}


document.getElementById("user").innerHTML = `
    ${usersData.map(userTemplate).join("")}
  `;

{/* <a href="tel:${user.ourNumber}"><i class="fas fa-ellipsis-v"></i></a> */}
