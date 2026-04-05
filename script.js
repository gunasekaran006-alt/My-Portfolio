// ========================================================
// 🚀 MASTER PORTFOLIO ENGINE: DAY 20 - 24 (FINAL)
// Concepts: Hoisting, Logic, Loops, & Advanced Functions
// ========================================================

// [DAY 20]: SYSTEM HOISTING CHECK
console.log("%c--- Day 20: Global Diagnostics ---", "color: yellow; font-weight: bold;");
console.log("Hoisting Status: " + systemReady); // undefined due to hoisting
var systemReady = "Fully Operational";
console.log("%c----------------------------------", "color: yellow;");

// [DAY 24]: BASIC FUNCTION & RETURN STATEMENT
function getWelcomeMessage() {
    return "🚀 Welcome to Gunasekaran's Advanced Portfolio Engine"; 
}
console.log(getWelcomeMessage());

// [DAY 21, 22, 23, 24]: CORE AUDIT FUNCTION (Parameters & Arguments)
// Replaces static logic with reusable function
function calculateProfessionalRank(name, exp, performance) {
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
}

// [DAY 24]: FUNCTION CALLBACK WITH ARGUMENTS
const auditResult = calculateProfessionalRank("Gunasekaran S", 12, 85);
console.log(auditResult);

// [DAY 24]: NESTED FUNCTIONS (Parent-Child Pattern)
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

// [DAY 24]: FUNCTION CURRYING (The Most Wanted Interview Problem)
// Replaces the old authentication logic with a curried version
function securityShield(username) {
    return function(password) {
        const dbUser = "admin@mail.com";
        const dbPass = "admin@123";

        // Day 23: Logical Operators (&&) & Strict Equality (===)
        if (username === dbUser && password === dbPass) {
            console.log("%c✔ Access Granted: Welcome Admin", "color: #00FA9A; font-weight: bold;");
        } else {
            console.log("%c❌ Access Denied: Invalid Credentials", "color: #FF4500;");
        }
    };
}

// Executing Curried Function (Day 24 Pattern)
securityShield("admin@mail.com")("admin@123"); 

// [DAY 23]: LOOPING THROUGH ARRAY SKILLS
const techSkills = ["HTML5", "CSS3", "JS", "MERN"]; 
console.log("--- Scanning Skill Set (For Loop) ---");
for (let i = 0; i < techSkills.length; i++) {
    console.log(` - Skill ${i + 1}: ${techSkills[i]}`);
}

// [DAY 22]: TYPE COERCION & INTERVIEW CHECKS
console.log("------------------------------------------");
console.log(`💡 Coercion Check (5 + "5") : ${5 + "5"}`); // 55
console.log(`💡 Coercion Check (5 - "5") : ${5 - "5"}`); // 0
console.log(`💡 Strict Equality Check     : ${18 === "18"}`); // false
console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");