  // ====== TABS (task-tabs / task-tab / tab-indicator) ======
  const tabs = document.querySelectorAll(".task-tabs .task-tab");
  const indicator = document.querySelector(".task-tabs .tab-indicator");

  function moveIndicator(tab) {
    if (!indicator || !tab) return;

    const rect = tab.getBoundingClientRect();
    const parentRect = tab.parentElement.getBoundingClientRect();

    const width = rect.width;
    const left = rect.left - parentRect.left;

    indicator.style.width = width + "px";
    indicator.style.transform = `translateX(${left}px)`;
  }

  // clique nas tabs
  tabs.forEach(tab => {
    tab.addEventListener("click", e => {
      e.preventDefault();

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      moveIndicator(tab);
    });
  });

  // posição inicial
  window.addEventListener("load", () => {
    const active = document.querySelector(".task-tabs .task-tab.active");
    if (active) moveIndicator(active);
  });