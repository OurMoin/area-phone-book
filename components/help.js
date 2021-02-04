const helpsData = [
    {
        img: "../resources/images/help-card/call.png"
    }
];


function helpTemplate(help) {
    return `
    <img src="${help.img}" alt="Help Card" class="help-card">
    `;
}


document.getElementById("help").innerHTML = `
    ${helpsData.map(helpTemplate).join("")}
  `;


