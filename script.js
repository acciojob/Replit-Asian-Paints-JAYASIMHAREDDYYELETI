const form = document.getElementById("color-Form");
    const boxes = document.querySelectorAll(".grid-item");
    const resetBtn = document.getElementById("reset_button");

    form.addEventListener("submit", getAndApplyColor);
    resetBtn.addEventListener("click", clearBC);

    function getAndApplyColor(e) {
      e.preventDefault();
      const selectedBox = document.getElementById("block_id").value.trim();
      const selectedColor = document.getElementById("colour_id").value.trim();

      const boxNum = parseInt(selectedBox, 10);
      if (!Number.isInteger(boxNum) || boxNum < 1 || boxNum > 9) {
        alert("Enter valid Number between 1 and 9");
        return;
      }

      form.reset();
      clearBC();

      const targetBox = document.getElementById(String(boxNum));
      if (targetBox) {
        targetBox.style.backgroundColor = selectedColor;
      }
    }

    function clearBC() {
      for (const box of boxes) {
        box.style.backgroundColor = "transparent";
      }