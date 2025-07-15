function redirectToDashboardIfNeeded() {
  const role = localStorage.getItem("role");

  // Only do redirect if current page is index.html
  const isIndexPage = window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/");

  if (isIndexPage && role) {
    switch (role) {
      case "general":
        window.location.href = "dashboard_employee.html";
        break;
      case "it":
        window.location.href = "dashboard_it.html";
        break;
      case "manager":
        window.location.href = "dashboard_manager.html";
        break;
      default:
        document.body.innerHTML = "<h3>Unknown role. Please contact admin.</h3>";
    }
  }
}

function applyRoleBasedLinks() {
  const role = localStorage.getItem("role");

  const trainingLink = document.getElementById("trainingLink");
  const incidentLink = document.getElementById("incidentLink");

  if (trainingLink && role) {
    switch (role) {
      case "general":
        trainingLink.href = "training_general.html";
        break;
      case "it":
        trainingLink.href = "training_it.html";
        break;
      case "manager":
        trainingLink.href = "training_manager.html";
        break;
      default:
        trainingLink.href = "#";
    }
  }

  if (incidentLink && role) {
    switch (role) {
      case "general":
        incidentLink.href = "incident_report.html";
        break;
      case "it":
        incidentLink.href = "incident_response.html";

        const submenu = document.getElementById("incidentSubmenu");
        if (submenu) {
          submenu.innerHTML = `
            <a href="incident_response.html">🧪 Respond</a>
            <a href="incident_response_track.html">📝 Track (System)</a>
          `;
        }
        break;

      case "manager":
        incidentLink.href = "incident_summary.html";
        break;

      default:
        incidentLink.href = "#";
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  redirectToDashboardIfNeeded();
  applyRoleBasedLinks();
});
