// Contact Buttons Component
document.addEventListener('DOMContentLoaded', function() {
    const contactActionsDiv = document.getElementById('contact-actions');
    
    if (contactActionsDiv) {
        contactActionsDiv.innerHTML = `
            <div class="contact-buttons">
                <button class="contact-btn" onclick="downloadVCard()">
                    📇 Add to Contacts
                </button>
                <button class="contact-btn survey-btn" onclick="window.open('https://forms.gle/CkmjEnmpQj6yFt3P7', '_blank')">
                    📋 Take Survey
                </button>
            </div>
        `;
    }
});

// VCard Download Function
function downloadVCard() {
    const vCardData = `BEGIN:VCARD
VERSION:4.0
N:Zimmerer;Alexander;;;
FN:Alexander Zimmerer
EMAIL:alexander.zimmerer1988@gmail.com
item1.TEL:+49 176 62966952
item1.X-ABLabel:Mobile Germany
item2.TEL;type=pref:+43 660 6247362
item2.X-ABLabel:Mobile Austria
URL:https://www.linkedin.com/in/alexander-zimmerer-97620275/
URL:https://alzi-88.github.io
NOTE:Innovation Architect | Tech Leader | Robotics & Drone Expert
ORG:
TITLE:Innovation Architect
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Alexander_Zimmerer.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
