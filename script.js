// ========================================================
// 🚀 ENTERPRISE PORTFOLIO ENGINE: MASTER LOGIC V8.0
// Features: Hoisting, Callbacks, RegEx, OTP System & Storage
// ========================================================

document.addEventListener("DOMContentLoaded", () => {
    
    // [DAY 20]: SYSTEM DIAGNOSTICS (Hoisting Check)
    var kernelStatus = "ONLINE"; 
    const developerIdentity = "Gunasekaran S";

    // GLOBAL ELEMENT SELECTION
    const loginForm = document.getElementById("loginForm");
    const alertBox = document.getElementById("alertBox");
    const statusDisplay = document.getElementById("greeting");
    const statusIcon = document.getElementById("statusIcon");

    // [DAY 29]: OTP ENGINE ELEMENTS
    const generateOtpBtn = document.getElementById("generateBtn"); // Add this ID to your HTML button
    const validateOtpBtn = document.getElementById("validateBtn"); // Add this ID to your HTML button
    const otpInput = document.getElementById("otpInput");
    const otpMessageDisplay = document.getElementById("message");

    // --- FEATURE 1: SECURE AUTHENTICATION GATEWAY (RegEx - Day 28) ---
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const emailField = document.getElementById("uniqueLoginEmail"); 
            const passwordField = document.getElementById("password");

            const emailValue = emailField.value.trim();
            const passwordValue = passwordField.value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?#]).{8,}$/;

            console.log("Gateway: Authenticating " + emailValue);

            if (!emailPattern.test(emailValue)) {
                triggerGatewayAlert("Invalid Architecture. Use: name@domain.com");
                return;
            }

            if (!passwordPattern.test(passwordValue)) {
                triggerGatewayAlert("Security Protocol: 8+ chars (A, a, 1, #) required.");
                return;
            }

            // SUCCESS logic
            if (alertBox) alertBox.innerHTML = "";
            statusDisplay.innerText = `Access Granted: Welcome, ${developerIdentity}`;
            statusDisplay.style.color = "#00FA9A";
            if (statusIcon) statusIcon.innerHTML = `<i class="bi bi-shield-check text-success display-4"></i>`;
            alert("✅ ENTERPRISE ACCESS VERIFIED!");
        });
    }

    // --- FEATURE 2: SMART OTP SYSTEM (Day 29 - Storage & Logic) ---
    if (generateOtpBtn) {
        generateOtpBtn.addEventListener("click", () => {
            // Generate a 6-digit random OTP
            const generatedOtp = Math.floor(100000 + Math.random() * 900000);
            localStorage.setItem("sessionOtp", generatedOtp); // Store in LocalStorage

            if(otpMessageDisplay) {
                otpMessageDisplay.innerHTML = `<div class="alert alert-info py-2">System OTP Generated: <strong>${generatedOtp}</strong></div>`;
            }
            console.log("OTP Security: New Token Created.");
        });
    }

    if (validateOtpBtn) {
        validateOtpBtn.addEventListener("click", () => {
            const userEnteredOtp = otpInput.value;
            const storedOtp = localStorage.getItem("sessionOtp");

            if (!storedOtp) {
                otpMessageDisplay.innerHTML = `<span class="text-warning">Error: Generate OTP first!</span>`;
                return;
            }

            if (userEnteredOtp === storedOtp) {
                // Success: Using Bootstrap Modal (BOM/DOM Day 27)
                const successModalElement = document.getElementById("successModal");
                if(successModalElement) {
                    const successModal = new bootstrap.Modal(successModalElement);
                    successModal.show();
                }
                localStorage.removeItem("sessionOtp"); // Security: Clear after use
                console.log("OTP Status: VERIFIED ✅");
            } else {
                otpMessageDisplay.innerHTML = `<span class="text-danger">Access Denied: Invalid OTP Token!</span>`;
            }
        });
    }

    // --- FEATURE 3: SESSION CONTROLS (Day 27 BOM) ---
    const passToggle = document.getElementById("showPassword");
    if (passToggle) {
        passToggle.addEventListener("change", () => {
            const passInput = document.getElementById("password");
            passInput.type = passToggle.checked ? "text" : "password";
        });
    }

    const terminateBtn = document.getElementById("terminate-btn");
    if (terminateBtn) {
        terminateBtn.addEventListener("click", () => {
            if (confirm("Security Protocol: Terminate all active sessions?")) {
                statusDisplay.innerText = "Session Terminated. Restricted Access.";
                statusDisplay.style.color = "#FF4500";
                if(statusIcon) statusIcon.innerHTML = `<i class="bi bi-person-lock text-secondary display-4"></i>`;
                localStorage.clear(); // Wipe all session data
            }
        });
    }

    // --- FEATURE 4: LEGACY LOGIC (Callbacks & Currying Day 24-25) ---
    const auditLog = (val, stat) => console.log(`%c💳 Audit: ${val} ${stat}`, "color: #27C8F5; font-weight: bold;");
    const processAudit = (val, pin, cb) => (pin === 2222 ? cb(val, "Verified ✅") : cb(val, "Failed ❌"));
    processAudit(5000, 2222, auditLog);

    const securityGateway = (user) => (pass) => {
        if (user === "admin@mail.com" && pass === "admin@123") {
            console.log("%c✔ Security Gateway: ACTIVE", "color: #00FA9A; font-weight: bold;");
        }
    };
    securityGateway("admin@mail.com")("admin@123");

    // Function for Alert Messages
    function triggerGatewayAlert(msg) {
        if (alertBox) {
            alertBox.innerHTML = `<div class="alert alert-danger py-2 small shadow-sm"><i class="bi bi-shield-slash me-2"></i>${msg}</div>`;
        }
    }

    console.log(`%c--- Engine Ready: ${kernelStatus} ---`, "color: yellow; font-weight: bold;");




// --- [DAY 30]: ASYNCHRONOUS FETCH API IMPLEMENTATION ---
    const productBtn = document.getElementById("fetchProducts");
    const productDisplay = document.getElementById("productDisplay");

    if (productBtn) {
        productBtn.addEventListener("click", () => {
            // 1. Visual Feedback during Loading
            productDisplay.innerHTML = `
                <div class="text-center w-100 py-5">
                    <div class="spinner-border text-warning" role="status"></div>
                    <p class="mt-2 text-warning">Connecting to Fakestore Server...</p>
                </div>`;

            // 2. Fetching Data from API
            fetch("https://fakestoreapi.com/products?limit=4")
                .then(response => {
                    if (!response.ok) throw new Error("Network Response Failure");
                    return response.json();
                })
                .then(data => {
                    productDisplay.innerHTML = ""; // Clear loader
                    
                    // 3. Mapping data to UI Cards
                    data.forEach(item => {
                        productDisplay.innerHTML += `
                            <div class="col-6 col-md-3">
                                <div class="card bg-dark text-white border-secondary h-100 hover-card">
                                    <img src="${item.image}" class="card-img-top p-3 bg-white" style="height: 140px; object-fit: contain;">
                                    <div class="card-body p-2 text-center">
                                        <h6 class="small fw-bold text-cyan">${item.title.slice(0, 15)}...</h6>
                                        <p class="text-warning mb-0 small">$${item.price}</p>
                                    </div>
                                </div>
                            </div>`;
                    });
                    console.log("%c📡 External API Synchronized", "color: #FFD700; font-weight: bold;");
                })
                .catch(error => {
                    productDisplay.innerHTML = `<p class="text-danger text-center w-100">Sync Error: ${error.message}</p>`;
                    console.error("Critical API Error:", error);
                });
        });
    }



    // --- [DAY 31]: ADVANCED JS DATA & VOICE INTEGRATION ---

// 1. Web Speech API Implementation
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    const output = document.getElementById("output");
    const startBtn = document.getElementById("startBtn");
    const stopBtn = document.getElementById("stopBtn");

    startBtn.addEventListener("click", () => {
        recognition.start();
        output.innerHTML = `<span class="text-info animate-pulse">🎤 Listening... Speak now</span>`;
    });

    stopBtn.addEventListener("click", () => {
        recognition.stop();
        output.innerHTML += ` <span class="text-secondary">(Stopped)</span>`;
    });

    recognition.onresult = (e) => {
        let transcript = "";
        for (let i = e.resultIndex; i < e.results.length; i++) {
            transcript += e.results[i][0].transcript;
        }
        output.textContent = transcript;
        
        // TPM Feature: Auto-fill the query textarea if it exists
        const queryBox = document.querySelector('textarea');
        if(queryBox) queryBox.value = transcript;
    };
}

// 2. API Chaining vs Async/Await Implementation
const dataOutput = document.getElementById("dataOutput");

// Method A: Traditional .then() for Products
function syncProductsLegacy() {
    dataOutput.innerHTML = `<div class="text-center w-100 py-5"><div class="spinner-border text-info"></div><p>Streaming via .then()...</p></div>`;
    
    fetch("https://fakestoreapi.com/products?limit=3")
        .then(res => res.json())
        .then(data => {
            dataOutput.innerHTML = "";
            data.forEach(item => {
                dataOutput.innerHTML += `
                    <div class="col-md-4">
                        <div class="card bg-black border-secondary p-2 text-center h-100 shadow-sm">
                            <img src="${item.image}" class="bg-white p-1" style="height:60px; object-fit:contain; border-radius:4px;">
                            <p class="small text-cyan mt-2 mb-0 fw-bold">${item.title.slice(0,10)}...</p>
                            <p class="text-warning small mb-0">$${item.price}</p>
                        </div>
                    </div>`;
            });
        }).catch(err => console.error("Legacy Sync Error:", err));
}

// --- [DAY 31 + 32 FINAL INTEGRATED LOGIC]: AI AVATARS & PORTFOLIO SYMMETRY ---
async function syncUsersModern() {
    const dataOutput = document.getElementById("dataOutput");
    
    // 1. Professional Loading UI
    dataOutput.innerHTML = `
        <div class="text-center w-100 py-5">
            <div class="spinner-border text-cyan" role="status"></div>
            <p class="mt-2 text-cyan fw-bold">Syncing Enterprise User Directory...</p>
        </div>`;
    
    try {
        // 2. Fetching Data using Modern Async/Await
        const res = await fetch("https://fakestoreapi.com/users?limit=3");
        if(!res.ok) throw new Error("Cloud Gateway Offline");
        const users = await res.json();
        
        dataOutput.innerHTML = ""; // Clear the loader

        users.forEach(user => {
            // 3. Extracting Initials for Fallback Logic
            const initials = user.name.firstname[0].toUpperCase() + user.name.lastname[0].toUpperCase();
            
            // 4. Generating Unique AI Avatar based on User ID
            const avatarUrl = `https://robohash.org/${user.id}?set=set4`; 

            // 5. Injecting High-Contrast Card Architecture into UI
            dataOutput.innerHTML += `
                <div class="col-md-4 mb-3">
                    <div class="card bg-black border-info p-3 text-center h-100 shadow-lg hover-card" style="border-width: 2px !important;">
                        
                        <div class="position-relative mx-auto mb-3" style="width: 70px; height: 70px;">
                            <img src="${avatarUrl}" class="rounded-circle border border-cyan p-1 bg-dark shadow" 
                                 style="width: 100%; height: 100%; object-fit: cover;" alt="User Avatar">
                            <span class="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle p-1" style="width:12px; height:12px;"></span>
                        </div>
                        
                        <h6 class="text-white fw-bold mb-1" style="font-size: 14px;">
                            ${user.name.firstname.toUpperCase()} ${user.name.lastname.toUpperCase()}
                        </h6>
                        <p class="text-cyan small mb-3">@${user.username}</p>
                        
                        <div class="text-start border-top border-secondary pt-3 mt-auto">
                            <div class="d-flex align-items-center mb-2">
                                <i class="bi bi-envelope-at text-cyan me-2"></i>
                                <span class="text-white fw-bold" style="font-size: 11px;">${user.email}</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="bi bi-geo-alt-fill text-warning me-2"></i>
                                <span class="text-white fw-bold" style="font-size: 11px;">${user.address.city.toUpperCase()}</span>
                            </div>
                        </div>
                        
                        <button class="btn btn-info btn-sm fw-bold mt-3 w-100 py-1 resume-btn-effect" style="font-size: 11px;">
                            VIEW PROFILE
                        </button>
                    </div>
                </div>`;
        });

        console.log("%c✅ Day 32 Update: High-Contrast AI Cards & Symmetric Buttons Synced.", "color: #00FA9A; font-weight: bold;");

    } catch (err) {
        dataOutput.innerHTML = `
            <div class="alert alert-danger w-100 py-3 text-center">
                <i class="bi bi-exclamation-triangle-fill me-2"></i> Network Error: ${err.message}
            </div>`;
    }
}

// Attach Event Listeners
document.getElementById("btnThen")?.addEventListener("click", syncProductsLegacy);
document.getElementById("btnAsync")?.addEventListener("click", syncUsersModern);




});