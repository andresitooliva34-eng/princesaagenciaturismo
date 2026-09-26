const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const filterButtons = document.querySelectorAll(".filter-button");
const destinationCards = document.querySelectorAll(".destination-card");
const yearElement = document.querySelector("#current-year");

menuToggle.addEventListener("click", () => {
	const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
	menuToggle.setAttribute("aria-expanded", String(!isExpanded));
	menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menú" : "Cerrar menú");
	mainNav.classList.toggle("is-open", !isExpanded);
});

mainNav.querySelectorAll("a").forEach((link) => {
	link.addEventListener("click", () => {
		menuToggle.setAttribute("aria-expanded", "false");
		menuToggle.setAttribute("aria-label", "Abrir menú");
		mainNav.classList.remove("is-open");
	});
});

filterButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const selectedFilter = button.dataset.filter;

		filterButtons.forEach((filterButton) => {
			const isSelected = filterButton === button;
			filterButton.classList.toggle("is-active", isSelected);
			filterButton.setAttribute("aria-pressed", String(isSelected));
		});

		destinationCards.forEach((card) => {
			const categories = card.dataset.category.split(" ");
			card.classList.toggle("is-hidden", selectedFilter !== "todos" && !categories.includes(selectedFilter));
		});
	});
});

yearElement.textContent = new Date().getFullYear();
