//your JS code here. If required.
const form = document.getElementById("color-Form");
    const boxes = document.querySelectorAll(".grid-item");
    const resetBtn = document.getElementById("Reset");

    form.addEventListener("submit", getAndApplyColor);
    resetBtn.addEventListener("click", clearBC);

    function getAndApplyColor(e) {
      e.preventDefault();
      const selectedBox = document.getElementById("block_id").value;
      const selectedColor = document.getElementById("colour_id").value;

      if (parseInt(selectedBox) > 0 && parseInt(selectedBox) < 10) {
        form.reset();
        clearBC();
        const targetBox = document.querySelector(`[data-id='${selectedBox}']`);
        targetBox.style.backgroundColor = selectedColor;
        console.log(selectedBox, selectedColor);
      } else {
        alert("Enter valid Number between 1 and 9");
      }
    }

    function clearBC() {
      for (const box of boxes) {
        box.style.backgroundColor = "transparent";
      }
    }