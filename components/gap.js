const gapsData = [
    {}
];

function gapTemplate(gap) {
    return `
    <div style="margin-top: 50px;"></div> 
    `;
}


document.getElementById("gap").innerHTML = `
    ${gapsData.map(gapTemplate).join("")}
  `;


