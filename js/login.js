function updateProgress(percent) {
  const progressElement = document.getElementById("progress");
  progressElement.style.width = `${percent}%`;
}

let currentProgress = 0;
const targetProgress = 100;

function simulateLoading() {
  if (currentProgress < targetProgress) {
    currentProgress += 1;
    updateProgress(currentProgress);
    setTimeout(simulateLoading, 50);
  }
}
simulateLoading();

function redirectToNextPage() {
  setTimeout(function () {
    window.location.href = "index2.html";
  }, 6000);
}

window.onload = redirectToNextPage;
