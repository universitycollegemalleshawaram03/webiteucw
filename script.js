/ Generate QR Code
document.addEventListener("DOMContentLoaded", function () {
  const qrcodeElement = document.getElementById("qrcode");

  // Clear any existing content in the QR code container
  qrcodeElement.innerHTML = "";

  // Generate the QR code
  new QRCode(qrcodeElement, {
    text: window.location.href, // Use the current website URL
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  console.log("QR code generated successfully!");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});