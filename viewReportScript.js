const reportsContainer = document.getElementById("reportsContainer");
const reportedTab = document.getElementById("reportedTab");
const fixedTab = document.getElementById("fixedTab");

const reports = JSON.parse(localStorage.getItem("reports")) || [];

function displayReports(type) {
  reportsContainer.innerHTML = "";

  const filteredReports = reports.filter(report => {
    if (type === "reported") {
        return report.status !== "Fixed";
    }
    if (type === "fixed") {
        return report.status === "Fixed";
    }
});

  filteredReports.forEach((report, index) => {
    const card = document.createElement("div");
    card.classList.add("report-card");

    card.innerHTML = `
    <div class="report-image-wrap">
        ${
        report.image 
        ? `<img src="${report.image}" class="report-img">`
        : `<div class="no-image">No image</div>`
        }
    </div>

    <div class="report-bar">
        <span>${report.date}</span>
        <span>${report.area}</span>
        <span>${report.status}</span>
        <a href="#" class="view-detail-btn" data-index="${index}">View details</a>
    </div>
    `;

    reportsContainer.appendChild(card);
  });
}

reportedTab.addEventListener("click", () => {
  reportedTab.classList.add("active");
  fixedTab.classList.remove("active");
  displayReports("reported");
});

fixedTab.addEventListener("click", () => {
  fixedTab.classList.add("active");
  reportedTab.classList.remove("active");
  displayReports("fixed");
});

displayReports("reported");

const detailPopup = document.getElementById("detailPopup");
const detailImg = document.getElementById("detailImg");
const detailStatus = document.getElementById("detailStatus");
const detailDate = document.getElementById("detailDate");
const detailLocation = document.getElementById("detailLocation");
const detailFacility = document.getElementById("detailFacility");
const detailDesc = document.getElementById("detailDesc");
const closeDetail = document.getElementById("closeDetail");

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("view-detail-btn")) {
    e.preventDefault();

    const index = e.target.dataset.index;
    const reports = JSON.parse(localStorage.getItem("reports")) || [];
    const report = reports[index];

    // Fill popup
    detailImg.src = report.image || "";
    detailStatus.textContent = `(${report.status})`;
    detailDate.textContent = `(${report.date})`;
    detailLocation.textContent = `(${report.area})`;
    detailFacility.textContent = `(${report.facility})`;
    detailDesc.textContent = report.description || "No description";

    // Show popup
    detailPopup.classList.remove("hidden");

    setTimeout(() => {
      detailPopup.classList.add("active");
    }, 10);
  }
});

closeDetail.addEventListener("click", () => {
  detailPopup.classList.remove("active");

  setTimeout(() => {
    detailPopup.classList.add("hidden");
  }, 600);
});