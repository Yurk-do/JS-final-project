export function dateFooter() {
  const date = document.getElementById("date");
  date.innerHTML = new Date().getFullYear();
}
