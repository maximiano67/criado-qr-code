const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")

const qrCodeInput = document.querySelector("#qr-form input")

const qrCodeImg =  document.querySelector("#qr-code img")
// Eventos
// Gerar QR code
function generateQrCode() {
    const qrCodeInputValeu = qrCodeInput.value;

    if (!qrCodeInputValeu) return;

    qrCodeBtn.innerText = "Gerando código...";

qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValeu}`;

qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!";
})
}
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQrCode()
    };
});

// Limpar ária do QR code
qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.valeu) {
        container.classList.remove("active");
    qrCodeBtn.innerText = "Gera QR Code!";
    }
})