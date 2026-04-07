// ========================================================
// 🚀 ENTERPRISE PORTFOLIO ENGINE: MASTER LOGIC V12.0
// Features: Day 34 CRUD + Day 35 Methods + Day 36 Cart & Checkout
// ========================================================

// [GLOBAL ARRAYS]
let globalTeam = [];
let squadCart = JSON.parse(localStorage.getItem("squadCart")) || []; 
let showingSquad = false; 

document.addEventListener("DOMContentLoaded", () => {

    // [SYSTEM DIAGNOSTICS]
    var kernelStatus = "ONLINE";
    const developerIdentity = "Gunasekaran S";

    // GLOBAL ELEMENT SELECTION
    const loginForm = document.getElementById("loginForm");
    const alertBox = document.getElementById("alertBox");
    const statusDisplay = document.getElementById("greeting");
    const statusIcon = document.getElementById("statusIcon");
    const generateOtpBtn = document.getElementById("generateBtn");
    const validateOtpBtn = document.getElementById("validateBtn");
    const otpInput = document.getElementById("otpInput");
    const otpMessageDisplay = document.getElementById("message");

    // --- FEATURE 1: SECURE AUTHENTICATION GATEWAY ---
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailField = document.getElementById("uniqueLoginEmail");
            const passwordField = document.getElementById("password");
            const emailValue = emailField.value.trim();
            const passwordValue = passwordField.value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?#]).{8,}$/;

            if (!emailPattern.test(emailValue)) {
                triggerGatewayAlert("Invalid Architecture. Use: name@domain.com");
                return;
            }
            if (!passwordPattern.test(passwordValue)) {
                triggerGatewayAlert("Security Protocol: 8+ chars (A, a, 1, #) required.");
                return;
            }

            if (alertBox) alertBox.innerHTML = "";
            statusDisplay.innerText = `Access Granted: Welcome, ${developerIdentity}`;
            statusDisplay.style.color = "#00FA9A";
            if (statusIcon) statusIcon.innerHTML = `<i class="bi bi-shield-check text-success display-4"></i>`;
            alert("✅ ENTERPRISE ACCESS VERIFIED!");
        });
    }

    // --- [FIX 1]: TERMINATE SESSION LOGIC ---
    const terminateBtn = document.getElementById("terminate-btn");
    if (terminateBtn) {
        terminateBtn.addEventListener("click", () => {
            if (confirm("Security Protocol: Terminate all active sessions?")) {
                statusDisplay.innerText = "Session Terminated. Access Restricted.";
                statusDisplay.style.color = "#FF4500";
                statusIcon.innerHTML = `<i class="bi bi-person-lock text-secondary display-4"></i>`;
                localStorage.clear();
                console.log("%c⚠️ System: Session Wiped", "color: orange; font-weight: bold;");
                updateSquadBadge();
            }
        });
    }

    // --- FEATURE 2: SMART OTP SYSTEM ---
    if (generateOtpBtn) {
        generateOtpBtn.addEventListener("click", () => {
            const generatedOtp = Math.floor(100000 + Math.random() * 900000);
            localStorage.setItem("sessionOtp", generatedOtp);
            if (otpMessageDisplay) {
                otpMessageDisplay.innerHTML = `<div class="alert alert-info py-2">System OTP Generated: <strong>${generatedOtp}</strong></div>`;
            }
        });
    }

    if (validateOtpBtn) {
        validateOtpBtn.addEventListener("click", () => {
            const userEnteredOtp = Number(otpInput.value);
            const storedOtp = Number(localStorage.getItem("sessionOtp"));
            if (userEnteredOtp === storedOtp) {
                const successModalElement = document.getElementById("successModal");
                if (successModalElement) {
                    const successModal = new bootstrap.Modal(successModalElement);
                    successModal.show();
                }
                localStorage.removeItem("sessionOtp");
                otpMessageDisplay.innerHTML = `<span class="text-success fw-bold">Verification Successful! ✅</span>`;
            } else {
                otpMessageDisplay.innerHTML = `<span class="text-danger">Access Denied: Invalid OTP Token!</span>`;
            }
        });
    }

    // --- FEATURE 3: SESSION CONTROLS ---
    const passToggle = document.getElementById("showPassword");
    if (passToggle) {
        passToggle.addEventListener("change", () => {
            const passInput = document.getElementById("password");
            passInput.type = passToggle.checked ? "text" : "password";
        });
    }

    // --- [FIX 2]: WEB SPEECH API ---
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        const output = document.getElementById("output");

        document.getElementById("startBtn")?.addEventListener("click", () => {
            recognition.start();
            output.innerHTML = `<span class="text-info animate-pulse">🎤 Listening... Speak now</span>`;
        });

        document.getElementById("stopBtn")?.addEventListener("click", () => {
            recognition.stop();
            output.innerHTML += ` <span class="text-secondary">(Voice Sync Stopped)</span>`;
            console.log("%c🎤 Status: Mic Disconnected", "color: red; font-weight: bold;");
        });

        recognition.onresult = (e) => {
            output.textContent = e.results[e.results.length - 1][0].transcript;
        };
    }

    // --- FEATURE 4: MODERN SYNC ENGINE (Async/Await) ---
    async function syncUsersModern() {
        const dataOutput = document.getElementById("dataOutput");
        dataOutput.innerHTML = `<div class="text-center w-100 py-5"><div class="spinner-border text-cyan"></div><p class="mt-2 text-cyan fw-bold">Syncing Enterprise User Directory...</p></div>`;

        try {
            const res = await fetch("https://fakestoreapi.com/users?limit=3");
            if (!res.ok) throw new Error("Cloud Gateway Offline");
            const users = await res.json();
            globalTeam = users;
            renderTeamUI_Global();
        } catch (err) {
            dataOutput.innerHTML = `<div class="alert alert-danger w-100 text-center">${err.message}</div>`;
        }
    }

    // --- FEATURE 5: WEATHER API ---
    const weatherBtn = document.getElementById("getweatherBtn");
    if (weatherBtn) {
        weatherBtn.addEventListener("click", async () => {
            const city = document.getElementById("cityInput").value.trim();
            const resultDiv = document.getElementById("weatherResult");
            const API_KEY = "f686f164217fd8fcb1ab695939c03549";
            if (!city) return;
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
                const data = await res.json();
                resultDiv.innerHTML = `<div class="p-3 bg-black rounded border border-info text-center text-white shadow-lg">
                    <h5 class="text-cyan fw-bold">${data.name.toUpperCase()}</h5>
                    <div class="display-6 fw-bold text-cyan">${Math.round(data.main.temp)}°C</div>
                    <p class="small fw-bold text-uppercase">${data.weather[0].description}</p>
                </div>`;
            } catch (e) { resultDiv.innerHTML = `<span class="text-danger small">City Not Found</span>`; }
        });
    }

    // --- EVENT LISTENERS ATTACHMENT ---
    document.getElementById("btnAsync")?.addEventListener("click", syncUsersModern);
    document.getElementById("btnThen")?.addEventListener("click", () => {
        const dataOutput = document.getElementById("dataOutput");
        fetch("https://fakestoreapi.com/products?limit=3")
            .then(res => res.json())
            .then(data => {
                dataOutput.innerHTML = "";
                data.forEach(item => {
                    dataOutput.innerHTML += `<div class="col-md-4 mb-3"><div class="card bg-black border-secondary p-2 text-center h-100"><img src="${item.image}" class="bg-white p-1" style="height:60px; object-fit:contain;"><p class="small text-cyan mt-2 mb-0 fw-bold">${item.title.slice(0, 10)}...</p></div></div>`;
                });
            });
    });

    function triggerGatewayAlert(msg) {
        if (alertBox) {
            alertBox.innerHTML = `<div class="alert alert-danger py-2 small shadow-sm"><i class="bi bi-shield-slash me-2"></i>${msg}</div>`;
        }
    }

    updateSquadBadge(); // Initialize badge count
    console.log(`%c--- Engine Ready: ${kernelStatus} ---`, "color: yellow; font-weight: bold;");
});

// ========================================================
// 🛠️ REUSABLE GLOBAL RENDER ENGINE (Handles Global & Squad)
// ========================================================

function renderTeamUI_Global() {
    const dataOutput = document.getElementById("dataOutput");
    const dataStats = document.getElementById("dataStats");
    if (!dataOutput) return;
    
    dataOutput.innerHTML = "";

    const currentArray = showingSquad ? squadCart : globalTeam;

    if (currentArray.length === 0) {
        dataOutput.innerHTML = `<p class="text-center text-secondary my-auto italic small w-100 py-4 text-white fw-bold">${showingSquad ? "Squad is empty." : "User Directory is empty. Click 'Fetch Users'."}</p>`;
        if(dataStats) dataStats.innerHTML = "";
        return;
    }

    currentArray.forEach((user) => {
        const avatarUrl = `https://robohash.org/${user.id}?set=set4`;

        const actionButton = showingSquad 
            ? `<button class="btn btn-outline-danger btn-sm fw-bold w-100 mb-2 shadow-none" onclick="removeFromSquad(${user.id})" style="font-size: 10px;">REMOVE FROM SQUAD</button>`
            : `<button class="btn btn-warning btn-sm fw-bold w-100 mb-2 text-dark shadow-none" onclick="addToSquad(${user.id})" style="font-size: 10px;">SHORTLIST</button>`;

        const specificDetails = showingSquad 
            ? `<div class="mb-2"><span class="text-warning">Hrs: ${user.allocatedHours} | Rate: $${user.hourlyRate}/hr</span></div>`
            : `<div class="mb-2"><i class="bi bi-envelope-at text-cyan me-2"></i>${user.email}</div>
               <div><i class="bi bi-geo-alt-fill text-warning me-2"></i>${user.address.city.toUpperCase()}</div>`;

        dataOutput.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card bg-black border-info p-3 text-center h-100 shadow-lg hover-card" style="border-width: 2px !important;">
                    <div class="position-relative mx-auto mb-3" style="width: 70px; height: 70px;">
                        <img src="${avatarUrl}" class="rounded-circle border border-cyan p-1 bg-dark shadow" style="width: 100%; height: 100%; object-fit: cover;">
                        <span class="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle p-1" style="width:12px; height:12px;"></span>
                    </div>
                    <h6 class="text-white fw-bold mb-1" style="font-size: 14px;">${user.name.firstname.toUpperCase()} ${user.name.lastname.toUpperCase()}</h6>
                    <p class="text-cyan small mb-3">@${user.username.toLowerCase()}</p>
                    <div class="text-start border-top border-secondary pt-3 mt-auto mb-3 text-white fw-bold" style="font-size: 11px;">
                        ${specificDetails}
                    </div>
                    ${actionButton}
                    <button class="btn btn-info btn-sm fw-bold w-100 py-1 resume-btn-effect shadow-none" style="font-size: 11px;" onclick="alert('Viewing profile of ${user.name.firstname}')">
                        VIEW PROFILE
                    </button>
                </div>
            </div>`;
    });

    // REDUCE LOGIC: Calculate Total Squad Cost & Show Checkout Button
    if (showingSquad && dataStats) {
        const totalCost = squadCart.reduce((sum, user) => sum + (user.hourlyRate * user.allocatedHours), 0);
        
        dataStats.innerHTML = `
            <div class="alert alert-warning bg-dark border-warning text-warning fw-bold py-2 mt-3 text-center">
                <i class="bi bi-calculator"></i> Total Squad Resource Cost: $${totalCost}
            </div>
            <button class="btn btn-success fw-bold w-100 mt-2 shadow-lg resume-btn-effect" onclick="checkoutSquad()">
                <i class="bi bi-check-circle-fill me-1"></i> CONFIRM & BOOK SQUAD
            </button>
        `;
    } else if (dataStats) {
        dataStats.innerHTML = "";
    }
}

// ========================================================
// 🚀 FEATURE 6: PROJECT SQUAD BUILDER (Day 36 Integration)
// ========================================================

window.toggleSquadView = () => {
    showingSquad = !showingSquad;
    renderTeamUI_Global();
};

window.addToSquad = (id) => {
    const member = globalTeam.find(user => user.id === id); 
    let existingMember = squadCart.find(user => user.id === id);

    if (existingMember) {
        existingMember.allocatedHours += 10; 
        alert(`System: Added 10 more hours to ${member.name.firstname.toUpperCase()}`);
    } else {
        squadCart.push({
            ...member, 
            hourlyRate: 20 + (member.id * 5), 
            allocatedHours: 10 
        });
        alert(`✅ ${member.name.firstname.toUpperCase()} added to Shortlist!`);
    }

    localStorage.setItem("squadCart", JSON.stringify(squadCart));
    renderTeamUI_Global();
    updateSquadBadge();
};

window.removeFromSquad = (id) => {
    squadCart = squadCart.filter(user => user.id !== id);
    localStorage.setItem("squadCart", JSON.stringify(squadCart));
    renderTeamUI_Global();
    updateSquadBadge();
};

window.clearSquad = () => {
    if (squadCart.length === 0) return alert("System: Squad is already empty.");
    
    if (confirm("System Protocol: Clear the entire shortlisted squad?")) {
        squadCart = [];
        localStorage.removeItem("squadCart");
        renderTeamUI_Global();
        updateSquadBadge();
        alert("🗑️ Entire Squad has been cleared!");
    }
};

window.updateSquadBadge = () => {
    const badge = document.getElementById("squad-count");
    if(badge) badge.innerText = squadCart.length;
};

// Auto-fill Booking Form
window.checkoutSquad = () => {
    if (squadCart.length === 0) return alert("System: Please shortlist members before booking.");
    
    let bookingMessage = "Hello Gunasekaran,\n\nI would like to book the following Project Squad:\n\n";
    let totalCost = 0;
    
    squadCart.forEach(member => {
        bookingMessage += `👉 ${member.name.firstname.toUpperCase()} (${member.allocatedHours} Hrs @ $${member.hourlyRate}/hr)\n`;
        totalCost += (member.hourlyRate * member.allocatedHours);
    });
    
    bookingMessage += `\nEstimated Total Cost: $${totalCost}\n\nPlease contact me to finalize this.`;
    
    const projectDetailsInput = document.getElementById("address");
    if (projectDetailsInput) {
        projectDetailsInput.value = bookingMessage;
        document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
        
        projectDetailsInput.style.transition = "box-shadow 0.3s ease";
        projectDetailsInput.style.boxShadow = "0px 0px 15px 3px #00FA9A";
        setTimeout(() => { projectDetailsInput.style.boxShadow = "none"; }, 2000);
    }
};

// Legacy Operations
window.popMember = () => { if (globalTeam.length > 0) { globalTeam.pop(); renderTeamUI_Global(); }};
window.shiftMember = () => { if (globalTeam.length > 0) { globalTeam.shift(); renderTeamUI_Global(); }};

// ========================================================
// 🚀 DAY 35: DATA INTELLIGENCE ENGINE (Map, Filter, Reduce)
// ========================================================

window.standardizeNames = () => {
    if (globalTeam.length === 0) return alert("System: Sync User Directory first.");
    globalTeam = globalTeam.map(user => ({
        ...user,
        name: { ...user.name, firstname: "PRO - " + user.name.firstname.toUpperCase() }
    }));
    renderTeamUI_Global();
    alert("✅ MAP worked!");
};

window.filterHighPriority = () => {
    if (globalTeam.length === 0) return alert("System: Directory Offline.");
    globalTeam = globalTeam.filter(user => user.id <= 2);
    renderTeamUI_Global();
    alert("✅ FILTER worked!");
};

window.calculateSystemHealth = () => {
    if (globalTeam.length === 0) return alert("System: No Data available.");
    const integritySum = globalTeam.reduce((total, user) => total + user.id, 0);
    alert(`✅ REDUCE worked: System Integrity Sum is ${integritySum}`);
};

window.logEnterpriseDev = (devName, ...capabilities) => {
    const devProfile = { name: devName, stack: [...capabilities], active: true };
    console.log("Enterprise Developer Registered:", devProfile);
};