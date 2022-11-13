function printManagerCard(empName, id, email, contactNumber, role) {
  const managerCardHTML = `
  <div
  class="card card-styles">
  <div class="card-body card-body-colour">
    <h3 class="card-title">${empName}</h3>
    <h4 class="card-title"><i class="fa fa-user-circle-o icon-size" aria-hidden="true"></i> ${role}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${id}</li>
    <li class="list-group-item">Email: <a href="mailto:${email} target="_blank"">${email}</a></li>
    <li class="list-group-item">Phone:${contactNumber}</li>
</ul></div>`;
  return managerCardHTML;
}
function printEngineerCards(engineerArray) {
  let engineerHTMLContent = "";

  if (engineerArray.length) {
    engineerArray.forEach((engineerArray) => {
      const engineerCard = `<div
      class="card card-styles">
      <div class="card-body card-body-colour">
        <h3 class="card-title">${engineerArray.empName}</h3>
        <h4 class="card-title">
        <i class="fa fa-user-o icon-size" aria-hidden="true"></i> ${engineerArray.getRole()}</h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineerArray.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${
          engineerArray.email
        }">${engineerArray.email}</a></li>
        <li class="list-group-item">Github:<a href='${engineerArray.getGitHub()}'target="_blank">${engineerArray.getGitHub()}</a></li>
    </ul> </div>`;
      //concatenate HTML liverals to another variable
      engineerHTMLContent += engineerCard;
    });
  }

  //return the final variable with literals
  return engineerHTMLContent;
}
function printInternCards(internArray) {
  let internHTMLContent = "";
  if (internArray.length) {
    internArray.forEach((internArray) => {
      const internCard = `<div
      class="card card-styles">
      <div class="card-body card-body-colour">
        <h3 class="card-title">${internArray.empName}</h3>
        <h4 class="card-title">
        <i class="fa fa-graduation-cap icon-size" aria-hidden="true"></i> ${internArray.getRole()}</h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${internArray.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${
          internArray.email
        }">${internArray.email}</a></li>
        <li class="list-group-item">School:${internArray.school}</a></li>
    </ul> </div>`;
      //concatenate HTML liverals to another variable
      internHTMLContent += internCard;
    });
  }
  return internHTMLContent;
}
function generateMainHTML(mgrData, engineerArray, internArray) {
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
        <link
        href="./style.css"
        rel="stylesheet"
      />
      </head>
      <body>
        <header class="header jumbotron"><h1>My Team</h1></header>
        <main>
        <div class="container">
        <div class="d-flex justify-content-between">
        
  ${printManagerCard(
    mgrData.empName,
    mgrData.id,
    mgrData.email,
    mgrData.officeNumber,
    mgrData.getRole()
  )}
  ${printEngineerCards(engineerArray)}
  ${printInternCards(internArray)}
  </div>
  
  </div>
    </main>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
  </body>
</html>  
  `;
  return mainHTMLCode;
}
module.exports = generateMainHTML;
