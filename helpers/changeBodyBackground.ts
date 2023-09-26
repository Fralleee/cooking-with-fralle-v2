export const changeBodyBackground = (color: string) => {
    document.body.classList.forEach((className) => {
        if (className.startsWith("bg-")) {
            document.body.classList.remove(className);
        }
    });

    document.body.classList.add(color);
};
