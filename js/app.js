const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses(); // Call function to remove active class from other panels
        panel.classList.add("active");
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}
