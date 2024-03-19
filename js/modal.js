document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.querySelector("button");
    const modal = document.querySelector(".modal");
    const closeButton = modal.querySelector("button");
    const modalBackground = modal.querySelector(".modal__background");

    if (!modal) {
        console.error("Modal element not found.");
        return; // 모달이 없으면 더 이상 진행하지 않음
    }

    if (!closeButton) {
        console.error("Close button inside modal not found.");
        return; // 닫기 버튼이 없으면 더 이상 진행하지 않음
    }

    if (!modalBackground) {
        console.error("Modal background not found.");
        return; // 모달 배경이 없으면 더 이상 진행하지 않음
    }

    function displayModal() {
        modal.classList.toggle("hidden");
    }

    openButton.addEventListener("click", displayModal);
    closeButton.addEventListener("click", displayModal);
    modalBackground.addEventListener("click", displayModal);
});
