export function openFormPop() {
  const formpop = document.querySelector("#form-popup") as HTMLElement;
  if (formpop) {
    formpop.style.display = "block";
  }
}

export const closeFormPop = () => {
  const formpop = document.querySelector("#form-popup") as HTMLElement;
  if (formpop) {
    formpop.style.display = "none";
  }
}