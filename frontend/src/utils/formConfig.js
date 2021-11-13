export function configType(element) {
  const inp = document.querySelectorAll(element);
  if (inp !== null) {
    inp.forEach((item) => {
      if (item.type === "file") return;
      item.addEventListener("paste", () => {
        let vals;
        vals = item.value;
        item.value = vals;
      });
    });
    inp.forEach((item) => {
      if (item.type === "file") return;
      item.addEventListener("pointerdown", () => {
        let vals;
        vals = item.value;
        item.value = vals;
      });
    });
  }
}
