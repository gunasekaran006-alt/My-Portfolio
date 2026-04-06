// ========================================================
// 🚀 ENTERPRISE PORTFOLIO ENGINE: CORE LOGIC V5.0
// ========================================================

// [SYSTEM DIAGNOSTICS]: BOOTING ENGINE
console.log("%c--- System Diagnostics: Initializing ---", "color: yellow; font-weight: bold;");
var kernelStatus = "ONLINE"; 

// [GLOBAL CONFIGURATIONS]
const developerIdentity = "Gunasekaran S";
const securityKey = "admin@123";

document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 Engine Connected Successfully");

    // --- FEATURE 1: DYNAMIC AUTHORIZATION (Using ID) ---
    const authBtn = document.getElementById("auth-btn");
    if (authBtn) {
        authBtn.addEventListener("click", () => {
            const statusDisplay = document.getElementById("greeting");
            statusDisplay.innerText = `Authorized Access: Welcome, ${developerIdentity}`;
            statusDisplay.style.color = "#27C8F5";
            console.log("System Authorization: SUCCESS ✅");
        });
    }

    // --- FEATURE 2: RESOURCE AUDIT (Using ID) ---
    const auditBtn = document.getElementById("audit-btn");
    if (auditBtn) {
        auditBtn.addEventListener("click", () => {
            const resourceNodes = document.getElementsByClassName("course");
            for (let i = 0; i < resourceNodes.length; i++) {
                resourceNodes[i].style.color = "#00FA9A";
                resourceNodes[i].style.fontWeight = "bold";
            }
            alert("Audit Analysis: All core resources are verified.");
        });
    }

    // --- FEATURE 3: MILESTONE LOGGING (Using Submit Event) ---
    const gatewayForm = document.getElementById("paymentForm");
    if (gatewayForm) {
        gatewayForm.addEventListener("submit", (e) => {
            e.preventDefault(); // தடுக்கிறது: Refresh Bug Fix

            const inputNode = document.getElementById("username"); // Using Card Holder field as input
            const containerNode = document.getElementById("taskList");

            if (inputNode.value.trim() === "") {
                alert("Action Required: Please enter a valid milestone.");
                return;
            }

            // Remove placeholders if any
            if(containerNode.innerText.includes("Awaiting")) containerNode.innerHTML = "";

            const newEntry = document.createElement("li");
            newEntry.innerText = `${inputNode.value}`;
            newEntry.className = "list-group-item bg-dark text-white border-secondary";
            containerNode.appendChild(newEntry);
            inputNode.value = ""; 
        });
    }

    // --- FEATURE 4: CREDENTIAL TOGGLE (Using ID) ---
    const passToggle = document.getElementById("showPassword");
    const passInput = document.getElementById("passwordInput");
    if(passToggle && passInput) {
        passToggle.addEventListener("change", () => {
            passInput.type = passToggle.checked ? "text" : "password";
        });
    }

    // --- FEATURE 5: SESSION TERMINATION (Using ID) ---
    const terminateBtn = document.getElementById("terminate-btn");
    if(terminateBtn) {
        terminateBtn.addEventListener("click", () => {
            const isConfirmed = confirm("Security Protocol: Do you really want to terminate the session?");
            if(isConfirmed) {
                document.getElementById("greeting").innerText = "Session Terminated. Access Revoked.";
                document.getElementById("greeting").style.color = "#FF4500";
            }
        });
    }

    // --- [PREVIOUS CORE LOGIC]: Callbacks & Currying ---
    const triggerAuditLog = (amount, status) => {
        console.log(`%c💳 Transaction Audit: ${amount} ${status}`, "color: #27C8F5; font-weight: bold;");
    };
    const processSystemPayment = (amount, pin, callback) => {
        if (pin === 2222) callback(amount, "Verified ✅");
        else callback(amount, "Failed ❌");
    };
    processSystemPayment(2500, 2222, triggerAuditLog);

    console.log("🚀 Portfolio Logic Engine: FULLY OPERATIONAL");
});