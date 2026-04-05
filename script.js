// ========================================================
// 🚀 ULTIMATE MASTER ENGINE: DAY 20 - 25 (FINAL)
// Concepts: Hoisting, Logic, Loops, Functions, Arrow Fns & Callbacks
// ========================================================

// [DAY 20]: SYSTEM HOISTING CHECK
console.log("%c--- Day 20: Global Diagnostics ---", "color: yellow; font-weight: bold;");
console.log("Hoisting Status: " + systemReady); // Outputs undefined initially
var systemReady = "Fully Operational";
console.log("%c----------------------------------", "color: yellow;");

// [DAY 25]: MODERN ARROW FUNCTIONS (ES6 Syntax)
// Replaced traditional function with clean Arrow function
const getWelcomeMessage = () => "🚀 Welcome to Gunasekaran's Advanced Portfolio Engine";
console.log(getWelcomeMessage());

// [DAY 21 - 25]: CORE AUDIT (Arrow Function with Parameters)
const calculateProfessionalRank = (name, exp, performance) => {
    let rank;
    
    // Day 23: Nested Conditions
    if (exp >= 10) {
        if (performance >= 90) rank = "Elite Tech Architect (Grade A)";
        else if (performance >= 75) rank = "Senior Strategy Leader (Grade B)";
        else rank = "Tech Consultant (Grade C)";
    } else {
        rank = "Associate Developer";
    }
    
    // Day 22: Template Literals
    return `👤 User: ${name} | 🎯 Rank: ${rank}`;
};

// Executing Core Audit
console.log(calculateProfessionalRank("Gunasekaran S", 12, 85));

// [DAY 25]: CALLBACK SYSTEM (Bank Server & UI Scenario)
// UI Function (Passed as Callback)
const upiAppNotification = (amount, status) => {
    console.log(`%c💳 Payment of ${amount} ${status}`, "color: #27C8F5; font-weight: bold;");
};

// Server Function (Takes UI function as a parameter)
const serverBankProcess = (amount, upiPin, callback) => {
    const dbPin = 2222;
    const balance = 5000;
    
    // Day 23: Logical Operators (&&)
    if (upiPin === dbPin && amount <= balance) {
        callback(amount, "Successful ✅");
    } else {
        callback(amount, "Failed: Invalid Transaction ❌");
    }
};

// Triggering the Callback logic
serverBankProcess(1500, 2222, upiAppNotification);

// [DAY 24 & 25]: ADVANCED NOTIFICATION (Currying + Arrow Functions)
const sendNotification = (type) => (message) => {
    if (type === "email") return `📧 Email Sent: ${message}`;
    if (type === "number") return `📲 OTP Sent to Mobile: ${message}`;
    return "⚠️ Invalid Option";
};

// Real-time usage of Curried Arrow Function
console.log(sendNotification("email")("Your portfolio is now updated with ES6 concepts!"));
console.log(sendNotification("number")("2387"));

// [DAY 24]: NESTED FUNCTIONS (System Integrity Check)
function systemIntegrityCheck(moduleName) {
    console.log(`Parent: Checking ${moduleName} module...`);
    
    function databaseChild() {
        // Day 23: Do-While Loop
        let verifyCount = 1;
        do {
            console.log("   Child: Database connection verified (OK)");
            verifyCount++;
        } while (verifyCount <= 1);
    }
    databaseChild(); 
}
systemIntegrityCheck("Security Shield");

// [DAY 24]: SECURITY SHIELD (Classic Currying for Interview standard)
function securityShield(username) {
    return function(password) {
        const dbUser = "admin@mail.com";
        const dbPass = "admin@123";
        
        // Strict Equality Verification
        if (username === dbUser && password === dbPass) {
            console.log("%c✔ Access Granted: Welcome Admin", "color: #00FA9A; font-weight: bold;");
        } else {
            console.log("%c❌ Access Denied: Invalid Credentials", "color: #FF4500;");
        }
    };
}
securityShield("admin@mail.com")("admin@123"); 

// [DAY 23]: LOOPING THROUGH ARRAY SKILLS
const techSkills = ["HTML5", "CSS3", "JS", "MERN"]; 
console.log("--- Scanning Skill Set (For Loop) ---");
for (let i = 0; i < techSkills.length; i++) {
    console.log(` - Skill ${i + 1}: ${techSkills[i]}`);
}

// [DAY 22]: INTERVIEW CHECKS (Type Coercion)
console.log("------------------------------------------");
console.log(`💡 Coercion Check (5 + "5") : ${5 + "5"}`);
console.log(`💡 Strict Equality Check     : ${18 === "18"}`);
console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");