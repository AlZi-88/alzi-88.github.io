<div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
    <img src="./images/Bewerbungsfoto.jpeg" alt="Alexander Zimmerer" style="height: 150px; border-radius: 50%;">
</div>

## 📬 Contact
📧 [Email](mailto:alexander.zimmerer1988@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/alexander-zimmerer-97620275/)  
🐙 [GitHub](https://github.com/AlZi-88)

<button onclick="downloadVCard()" style="padding: 15px 30px; font-size: 18px; color: white; background-color: #0073e6; border: none; border-radius: 5px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); cursor: pointer;">Add to Contacts</button>

## 👨‍💻 About Me
Entrepreneur, Innovation Architect and experienced tech leader with over 10 years in **System Engineering & Software Architecture**, specializing in **Robotics, Drones and Smart Technologies to reduce bureaucracy for SME**. Passionate about innovation, agile methodologies, and high-performing teams.

## 🌍 Mission & Vision
I believe that **technology should empower and serve people** and make all our lives better. My goal is to enable enterprises to establish efficient processes through **automation, digital solutions and drones and robotics technology**. My focus is on delivering innovative and hands-on technology to reduce bureaucracy, save ressources and make your business future-ready.

## 📜 Resume
[📥 Download my CV](./ressources/CV_AlexanderZimmerer.pdf)

## 🌟 Skills & Expertise

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
    <div style="width: 200px; text-align: center;">
        <h4>🚗 Automation & Robotics</h4>
        <canvas id="chartAutomation" width="200" height="100"></canvas>
    </div>
    <div style="width: 200px; text-align: center;">
        <h4>🛡️ Functional Safety</h4>
        <canvas id="chartFunctionalSafety" width="200" height="100"></canvas>
    </div>
    <div style="width: 200px; text-align: center;">
        <h4>🤖 AI & Machine Learning</h4>
        <canvas id="chartMachineLearning" width="200" height="100"></canvas>
    </div>
    <div style="width: 200px; text-align: center;">
        <h4>🎯 Leadership</h4>
        <canvas id="chartLeadership" width="200" height="100"></canvas>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
function createDoughnutChart(ctx, value) {
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [value, 100 - value],
                backgroundColor: ['#0073e6', '#ddd'],
                borderWidth: 0,
                cutout: '80%',
                rotation: 270,
                circumference: 180
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            plugins: {
                tooltip: { enabled: false },
                legend: { display: false },
                afterDraw(chart) {
                    let width = chart.width,
                        height = chart.height,
                        ctx = chart.ctx;
                    ctx.restore();
                    let fontSize = (height / 10).toFixed(2);
                    ctx.font = fontSize + "px Arial";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#000";
                    let text = value + "%", 
                        textX = Math.round((width - ctx.measureText(text).width) / 2),
                        textY = height / 1.6;
                    ctx.fillText(text, textX, textY);
                    ctx.save();
                }
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    createDoughnutChart(document.getElementById('chartAutomation'), 90);
    createDoughnutChart(document.getElementById('chartFunctionalSafety'), 85);
    createDoughnutChart(document.getElementById('chartMachineLearning'), 75);
    createDoughnutChart(document.getElementById('chartLeadership'), 95);
});

function downloadVCard() {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Alexander Zimmerer
EMAIL:alexander.zimmerer1988@gmail.com
URL:https://www.linkedin.com/in/alexander-zimmerer-97620275/
URL:https://github.com/AlZi-88
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
</script>


