// List of sample Hindi words
const hindiWords = [
    // Short words
    "लिपि", "लेखन", "शब्द", "मन", "कला", "ध्यान", "ज्ञान", "प्रेम", "रंग", 
    "आशा", "भक्ति", "सेवा", "मूल्य", "रास्ता", "समय", "सपना", "काव्य", "शब्द", "धर्म", 
    "सुख", "दुख", "हवा", "पानी", "अग्नि", "भूमि", "आकाश", "जल", "वायु", "मित्र", "शत्रु", 
    "भय", "विश्व", "मूर्ति", "धन", "घर", "नदी", "पेड़", "फल", "फूल",

    // Medium words
    "विचार", "संस्कृति", "भाषा", "विचारधारा", "वाक्य", "अनुच्छेद", "अध्याय", "कहानी", "रचना", 
    "परंपरा", "आत्मा", "जीवन", "समाज", "धरोहर", "कविता", "संगीत", "प्रकृति", "प्रार्थना", 
    "सत्य", "शांति", "मूल्यवान", "स्वतंत्रता", "अनुभव", "परिवर्तन", "उपयोगिता", "समर्पण", 
    "संपर्क", "स्वप्न", "न्याय", "समर्पण", "आवश्यकता", "कर्तव्य", "आश्चर्य", "धैर्य", 
    "संतोष", "समर्पण", "विकास", "अवधारणा", "समझ", "उपलब्धि", "प्रयास", "आविष्कार",

    // Long words
    "साहित्यिकता", "विवरणात्मकता", "स्वाभाविकता", "अंतर्राष्ट्रीयता", "सांस्कृतिकता", 
    "अभिव्यक्तिपूर्ण", "मानवीयता", "वैज्ञानिकता", "संवेदनशीलता", "अलौकिकता", 
    "अत्यावश्यकता", "सपनेद्रष्टा", "सहिष्णुता", "वातावरणीय", "संपर्कसूत्र", "प्रतिबिंबित", 
    "समानधर्मिता", "मानवतावादी", "स्वतंत्रतापूर्ण", "प्रतिनिधित्व", "संप्रभुता", 
    "अभिनवता", "अन्वेषणात्मक", "सहायता-निवेदन", "अवबोधनशक्ति", "प्रस्तावना"
];

function createInputFields() {
    const paragraphCount = document.getElementById('paragraphCount').value;
    const paragraphInputs = document.getElementById('paragraphInputs');
    
    paragraphInputs.innerHTML = '';

    if (paragraphCount < 1) return;

    for (let i = 0; i < paragraphCount; i++) {
        const inputField = document.createElement('div');
        inputField.innerHTML = `
            <div class="input-group">
                <label for="wordsInParagraph${i + 1}">Number of words in paragraph ${i + 1}:</label>
                <input type="number" id="wordsInParagraph${i + 1}" value="50" min="10" max="500"><br>
            </div>
        `;
        paragraphInputs.appendChild(inputField);
    }
}

document.getElementById('paragraphCount').addEventListener('input', createInputFields);

function generateText() {
    const paragraphCount = document.getElementById('paragraphCount').value;
    let result = '';

    if (paragraphCount < 1) {
        alert("Please select at least 1 paragraph");
        return;
    }

    for (let i = 0; i < paragraphCount; i++) {
        const wordCount = document.getElementById(`wordsInParagraph${i + 1}`).value;
        let paragraph = '';

        for (let j = 0; j < wordCount; j++) {
            const randomIndex = Math.floor(Math.random() * hindiWords.length);
            paragraph += hindiWords[randomIndex] + ' ';
        }

        result += `<p>${paragraph.trim()}</p>`;
    }

    document.getElementById('output').innerHTML = result;
}

function changeFontSize(amount) {
    const outputDiv = document.getElementById('output');
    const currentFontSize = window.getComputedStyle(outputDiv).fontSize;
    const newSize = parseFloat(currentFontSize) + amount;
    outputDiv.style.fontSize = newSize + 'px';
}

window.onload = function() {
    createInputFields();
    document.getElementById('output').innerHTML = "Your text will be generated here";
};
