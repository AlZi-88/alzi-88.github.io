<div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
    <img src="./images/Bewerbungsfoto.jpeg" alt="Alexander Zimmerer" style="height: 150px; border-radius: 50%;">
</div>

<h1 style="text-align:center;">📬 Contact</h1>
<p style="text-align:center;">
<a href="mailto:alexander.zimmerer1988@gmail.com">📧 Email</a>
</p>
<p style="text-align:center;">
<a href="https://www.linkedin.com/in/alexander-zimmerer-97620275/">🔗 LinkedIn</a>
</p>
<p style="text-align:center;">
<a href="https://github.com/AlZi-88">🐙 GitHub</a>
</p>
<p style="text-align:center;">
<button onclick="downloadVCard()" style="padding: 15px 30px; font-size: 18px; color: white; background-color: #0073e6; border: none; border-radius: 5px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); cursor: pointer;">Add to Contacts</button>
</p>

<h1 style="text-align:center;">👨‍💻 About Me</h1>
<p style="text-align:center;">Entrepreneur, Innovation Architect and experienced tech leader with over 10 years in <strong>System Engineering & Software Architecture</strong>, specializing in <strong>Robotics, Drones and Smart Technologies to reduce bureaucracy for SME</strong>. Passionate about innovation, agile methodologies, and high-performing teams.</p>

<h1 style="text-align:center;">🌍 Mission & Vision</h1>
<p style="text-align:center;">I believe that <strong>technology should empower and serve people</strong> and make all our lives better. My goal is to enable enterprises to establish efficient processes through <strong>automation, digital solutions and drones and robotics technology</strong>. My focus is on delivering innovative and hands-on technology to reduce bureaucracy, save ressources and make your business future-ready.</p>

<h1 style="text-align:center;">📜 Resume</h1>
<p style="text-align:center;"><a href="./ressources/CV_AlexanderZimmerer.pdf">📥 Download my CV</a></p>

<h1 style="text-align:center;">🌟 Skills & Expertise</h1>

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
PHOTO;ENCODING=b;TYPE=JPEG:$(cat https://github.com/AlZi-88/alzi-88.github.io/tree/main/images/Bewerbungsfoto.jpeg | base64 | tr -d '\n')
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


