// creates the block of HTML for the manager card that will be inserted into the larger document
function renderManager(manager) {
  return `
  <div class="card employee-card">
  <div class="card-header">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getID()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
      </ul>
  </div>
</div>
  `;
}
// creates the block of HTML for the engineer cards that will be inserted into the larger document
function renderEngineers(engineers) {
  const markup = engineers.map((engineer) => {
    return `
    <div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getID()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>`;
  });
  return markup.join(",");
}
// creates the block of HTML for the intern cards that will be inserted into the larger document
function renderInterns(interns) {
  const markup = interns.map((intern) => {
    return `
    <div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getID()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>`;
  });
  return markup.join(",");
}

// merges all of our dynamic HTML into one string
function createTeam(team) {
  return `
${renderManager(team.manager)}
${renderEngineers(team.engineers)}
${renderInterns(team.interns)}
  `;
}

// This constructs the static portion of the HTML around the dynamically generated employee cards
function render(team) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
  <div class="container-fluid">
      <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading">
              <h1 class="text-center">My Team</h1>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="row">
          <div class="team-area col-12 d-flex justify-content-center">
              ${createTeam(team)}
          </div>
      </div>
  </div>
</body>
</html>
  `;
}

// exports this for use in index.html
module.exports = render;