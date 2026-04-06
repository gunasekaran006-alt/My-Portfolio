// ========================================================
// 🚀 ENTERPRISE PORTFOLIO ENGINE: CORE LOGIC V4.0
// Features: Hoisting, Security, Callbacks, & Dynamic DOM
// ========================================================

// [SYSTEM DIAGNOSTICS]: BOOTING ENGINE
console.log("%c--- System Diagnostics: Initializing ---", "color: yellow; font-weight: bold;");
console.log("Kernel Status: " + kernelStatus); // Output: undefined (Var Hoisting Check)
var kernelStatus = "ONLINE"; 
console.log("%c---------------------------------------", "color: yellow;");

// [GLOBAL CONFIGURATIONS]: IDENTITY & CONSTANTS
const developerIdentity = "Gunasekaran S";
const getEngineStatus = () => "🚀 Portfolio Logic Engine: SUCCESSFULLY CONNECTED";
console.log(getEngineStatus());

// [UI ENGINE]: DYNAMIC AUTHORIZATION (DOM ID Selection)
function authorizeUser() {
    const statusDisplay = document.getElementById("greeting");
    if (statusDisplay) {
        // Updates text and style only on user interaction
        statusDisplay.innerText = `Authorized Access: Welcome, ${developerIdentity}`;
        statusDisplay.style.color = "#27C8F5"; // Theme Cyan
    }
}

// [UI ENGINE]: RESOURCE AUDIT (DOM Class Selection)
function auditResources() {
    const resourceNodes = document.getElementsByClassName("course");
    // Loops through elements to apply batch style updates
    for (let i = 0; i < resourceNodes.length; i++) {
        resourceNodes[i].style.color = "#00FA9A"; // Success Green
        resourceNodes[i].style.fontWeight = "bold";
    }
    console.log("Resource availability audit: COMPLETED.");
}

// [UI ENGINE]: MILESTONE LOGGING (Dynamic DOM Creation)
function logMilestone() {
    const inputNode = document.getElementById("taskInput");
    const containerNode = document.getElementById("taskList");

    // Validation: Ensures data integrity
    if (inputNode.value.trim() === "") {
        alert("Action Required: Please enter a valid milestone description.");
        return;
    }

    // Creating & Mounting new DOM Element
    const newEntry = document.createElement("li");
    newEntry.innerText = `${inputNode.value}`;
    newEntry.className = "list-group-item"; // UI consistency via Bootstrap

    containerNode.appendChild(newEntry);
    inputNode.value = ""; // Resetting input field
}

// [SECURITY LOGIC]: TRANSACTION CALLBACK SIMULATION
const triggerAuditLog = (amount, status) => {
    console.log(`%c💳 Transaction Audit: ${amount} ${status}`, "color: #27C8F5; font-weight: bold;");
};

const processSystemPayment = (amount, pin, callback) => {
    const dbPin = 2222;
    if (pin === dbPin) {
        callback(amount, "Verified Successfully ✅");
    } else {
        callback(amount, "Verification Failed ❌");
    }
};
processSystemPayment(2500, 2222, triggerAuditLog); // Execution via Callback

// [SECURITY LOGIC]: GATEWAY AUTHENTICATION (Currying)
function securityGateway(userKey) {
    return function(passKey) {
        if (userKey === "admin@mail.com" && passKey === "admin@123") {
            console.log("%c✔ Security Gateway: ACCESS GRANTED", "color: #00FA9A; font-weight: bold;");
        }
    };
}
securityGateway("admin@mail.com")("admin@123"); // Curried Call

// [CORE STACK SCANNER]: ARRAY & OBJECT AUDIT
const coreStack = ["MERN", "GenAI", "Platform Engineering"];
console.log("--- Scanning Professional Stack ---");
coreStack.forEach((tech) => console.log(`Active Capability: ${tech}`));

// [DIAGNOSTIC CHECKS]: TYPE COERCION & EQUALITY
console.log("------------------------------------------");
console.log(`💡 Diagnostic Coercion Check (5 + "5") : ${5 + "5"}`); 
console.log(`💡 Diagnostic Strict Equality Check     : ${18 === "18"}`);
console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");