document.addEventListener('DOMContentLoaded', () => {
    // 1. Generate QR Code
    const qrContainer = document.getElementById("qrcode");
    const currentURL = window.location.href;
    
    new QRCode(qrContainer, {
        text: currentURL,
        width: 150,
        height: 150,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    // 2. Add Contact Functionality (vCard)
    const addContactBtn = document.getElementById('add-contact-btn');
    
    addContactBtn.addEventListener('click', () => {
        const contact = {
            name: "Rommel Villafana",
            phone: "631651232",
            email: "scaleadigital@gmail.com",
            title: "Gerente",
            company: "Scalea Digital",
            web: "https://vlemmor.github.io/scalea-landing/"
        };

        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
ORG:${contact.company}
TITLE:${contact.title}
TEL;TYPE=CELL:${contact.phone}
EMAIL:${contact.email}
URL:${contact.web}
END:VCARD`;

        const blob = new Blob([vcard], { type: "text/vcard" });
        const url = window.URL.createObjectURL(blob);
        
        const newLink = document.createElement('a');
        newLink.download = `${contact.name.replace(" ", "_")}.vcf`;
        newLink.href = url;
        
        // Trigger download
        document.body.appendChild(newLink);
        newLink.click();
        document.body.removeChild(newLink);
        
        window.URL.revokeObjectURL(url);
    });
});
