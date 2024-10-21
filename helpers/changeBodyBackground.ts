export const changeBodyBackground = (color?: string | undefined) => {
  document.body.classList.forEach((className) => {
    if (className.startsWith("bg-")) {
      document.body.classList.remove(className);
    }
  });

  if (color) {
    document.body.classList.add(color);
  } else {
    document.body.classList.add("bg-stone-100");
  }
};
