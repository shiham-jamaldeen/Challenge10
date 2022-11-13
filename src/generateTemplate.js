function printManagerCard(empName, id, email, contactNumber, role) {
  const managerCardHTML = `
  <div
  class="card"
  style="
    width: 18rem;
    border: 5px darkblue;
    border-style: dashed;
    box-shadow: 10px 10px lightskyblue;
  "
>
  <div class="card-body">
    <h3 class="card-title">${empName}</h3>
    <h4 class="card-title">
      <i class="fa fa-html5" style="font-size: 36px; color: blue"></i>
      ${role}
    </h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${id}</li>
    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
    <li class="list-group-item">Phone:${contactNumber}</li>
</ul>`;
  return managerCardHTML;
}
function printEngineerCards(engineerArray) {
  let engineerHTMLContent = "";

  if (engineerArray.length) {
    engineerArray.forEach((engineerArray) => {
      const engineerCard = `<div
      class="card"
      style="
        width: 18rem;
        border: 5px darkblue;
        border-style: dashed;
        box-shadow: 10px 10px lightskyblue;
      "
    >
      <div class="card-body">
        <h3 class="card-title">${engineerArray.empName}</h3>
        <h4 class="card-title">
          <i class="fa fa-html5" style="font-size: 36px; color: blue"></i>
          ${engineerArray.getRole()}
        </h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineerArray.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${
          engineerArray.email
        }">${engineerArray.email}</a></li>
        <li class="list-group-item">Phone:${engineerArray.gitHubHandle}</li>
    </ul>`;
      //concatenate HTML liverals to another variable
      engineerHTMLContent += engineerCard;
      console.log(engineerCard);
      return engineerHTMLContent;
    });
  }
}
function generateMainHTML(mgrData, engineerArray) {
  const mainHTMLCode = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Team Profile Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />    
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header class="header jumbotron"><h1>My Team</h1></header>
        <main>
        <div class="d-flex justify-content-between">
        
  ${printManagerCard(
    mgrData.empName,
    mgrData.id,
    mgrData.email,
    mgrData.officeNumber,
    mgrData.getRole()
  )}
  ${printEngineerCards(engineerArray)}
`;
  return mainHTMLCode;
}
module.exports = generateMainHTML;
