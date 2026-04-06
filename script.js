// ========================================================
// 🚀 ENTERPRISE PORTFOLIO ENGINE: CORE LOGIC V7.0
// Features: Hoisting, Callbacks, Currying, DOM & Full RegEx
// ========================================================

document.addEventListener("DOMContentLoaded", () => {
    // [SYSTEM DIAGNOSTICS]: Hoisting Check (Day 20)
    var kernelStatus = "ONLINE"; 
    const developerIdentity = "Gunasekaran S";

    // UI ELEMENTS SELECTION
    const loginForm = document.getElementById("loginForm");
    const alertBox = document.getElementById("alertBox");
    const statusDisplay = document.getElementById("greeting");
    const statusIcon = document.getElementById("statusIcon");

    // --- FEATURE 1: REGEX VALIDATION & AUTHENTICATION (Day 28) ---
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Targetting the Unique ID directly
            const emailInput = document.getElementById("uniqueLoginEmail");
            const passwordInput = document.getElementById("password");

            if (!emailInput) {
                console.error("ID uniqueLoginEmail not found in HTML!");
                return;
            }

            const emailValue = emailInput.value.trim();
            const passwordValue = passwordInput.value.trim();

            console.log("System Login Attempted...");
            console.log("Captured Data: '" + emailValue + "'"); // Check this in console

            // Industry Standard Robust RegEx
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?#]).{8,}$/;

            if (emailValue === "" || !emailPattern.test(emailValue)) {
                triggerGatewayAlert("Invalid Email Architecture. Format: user@domain.com");
                return;
            }
            
            // ... (Rest of the code for password check and success)

            if (!passwordPattern.test(passwordValue)) {
                triggerGatewayAlert("Security Protocol: Password requires 8+ chars (A, a, 1, #)");
                return;
            }

            // SUCCESS CASE: UI Transformation
            if (alertBox) alertBox.innerHTML = ""; 
            statusDisplay.innerText = `Access Granted: Welcome, ${developerIdentity}`;
            statusDisplay.style.color = "#00FA9A"; // Success Green
            
            if (statusIcon) {
                statusIcon.innerHTML = `<i class="bi bi-shield-check text-success display-4"></i>`;
            }
            
            alert("✅ ENTERPRISE AUTHENTICATION SUCCESSFUL!");
        });
    }

    // Helper Function for DOM Alerts
    function triggerGatewayAlert(message) {
        if (alertBox) {
            alertBox.innerHTML = `
                <div class="alert alert-danger py-2 small shadow-sm" role="alert">
                    <i class="bi bi-exclamation-triangle-fill me-2"></i> ${message}
                </div>`;
        }
    }

    // --- FEATURE 2: CREDENTIAL VISIBILITY (Day 27) ---
    const passToggle = document.getElementById("showPassword");
    if (passToggle) {
        passToggle.addEventListener("change", () => {
            const passInput = document.getElementById("password");
            passInput.type = passToggle.checked ? "text" : "password";
        });
    }

    // --- FEATURE 3: SESSION TERMINATION (BOM API) ---
    const terminateBtn = document.getElementById("terminate-btn");
    if (terminateBtn) {
        terminateBtn.addEventListener("click", () => {
            if (confirm("Security Alert: Terminate current administrative session?")) {
                statusDisplay.innerText = "Session Terminated. Restricted Access.";
                statusDisplay.style.color = "#FF4500";
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
                if (statusIcon) {
                    statusIcon.innerHTML = `<i class="bi bi-person-lock text-secondary display-4"></i>`;
                }
            }
        });
    }

    // [LEGACY LOGIC]: Preservation of Previous Concepts
    const auditNotification = (val, stat) => console.log(`%c💳 Audit: ${val} ${stat}`, "color: #27C8F5;");
    const processAudit = (val, pin, cb) => (pin === 2222 ? cb(val, "Verified ✅") : cb(val, "Failed ❌"));
    processAudit(5000, 2222, auditNotification);

    console.log(`%c--- Engine Status: ${kernelStatus} ---`, "color: yellow; font-weight: bold;");
    console.log("🚀 Portfolio Logic Engine: FULLY OPERATIONAL");
});