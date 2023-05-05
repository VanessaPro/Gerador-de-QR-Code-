const input = document.querySelector("input");
const qrcode = document.querySelector("qrcode")

document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      canQRCode();
    }
  })

  function canQRCode() {
    if (!input.value) return;
  
    
  }

