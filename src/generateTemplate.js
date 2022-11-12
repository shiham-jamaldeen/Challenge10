function printManagerCard(
  employeeName,
  employeeID,
  emailAddress,
  contactNumber
) {
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
    <h3 class="card-title">${employeeName}</h3>
    <h4 class="card-title">
      <i class="fa fa-html5" style="font-size: 36px; color: blue"></i>
      Manager
    </h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Employee ID: ${employeeID}</li>
    <li class="list-group-item">Email address: <a href="mailto:${emailAddress}">${emailAddress}</a></li>
    <li class="list-group-item">Contact No:${contactNumber}</li>
</ul>
</div>    
  `;
  return managerCardHTML;
}
function generateMainHTML(data) {
  const mainHTMLCode = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Team Profile Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!--link rel="stylesheet" type="text/css" media="screen" href="main.css" /-->
        <!--script src="main.js"></script-->
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
          data.employeeName,
          data.employeeID,
          data.emailAddress,
          data.contactNumber
        )}
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
// ${printEmployeeCard}

//${printInternCard}
