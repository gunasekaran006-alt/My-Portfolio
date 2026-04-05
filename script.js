// ========================================================
// DAY 20: JAVASCRIPT FOUNDATIONS & HOISTING ( Easter Egg )
// Strictly using Day 20 Concepts: var, let, const, console.log
// ========================================================

// 1. HOISTING VERIFICATION (Order is Critical!)
// --------------------------------------------------------
// 'var' is hoisted and initialized as 'undefined' by the JS engine.
// This allows us to access it before the line where it is declared.
console.log("%c--- Hoisting Verification ---", "color: yellow; font-weight: bold;");

console.log("Status of hoistedVar: " + hoistedVar); // Output: undefined (No Error)
var hoistedVar = "System Online";

// 'let' and 'const' are also hoisted but stay in the 'Temporal Dead Zone' (TDZ).
// Accessing them before declaration will cause a Reference Error.
// To test this, you can uncomment the line below:
// console.log(hoistedLet); 
let hoistedLet = "Secure Logic";

console.log("%c---------------------------", "color: yellow;");


// 2. SYSTEM LOGS (Developer Profile)
// --------------------------------------------------------
console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");
console.log("%c🚀 INITIATING PORTFOLIO CORE SYSTEM...", "color: #00FA9A; font-weight: bold; font-size: 14px;");
console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");

// CONST: Fixed values that will never change (Block Scope)
const developerName = "Gunasekaran S";
const primaryRole = "AI-Enhanced MERN Stack Developer";
const baseLocation = "Coimbatore, Tamil Nadu";

// LET: Dynamic values that may change over time (Block Scope)
let currentStatus = "Actively looking for Junior Developer/Intern roles";
let targetFrameworks = "React.js, Node.js, Express, MongoDB";

// VAR: General operational data (Global/Legacy Scope)
var priorExperience = "12+ Years in Operations & Business Development";
var transitionPath = "Entri Elevate & Illinois Tech Specialization";

// Outputting formatted data using Concatenation (+)
console.log("👤 Architect Name : " + developerName);
console.log("🎯 Primary Role   : " + primaryRole);
console.log("📍 Location       : " + baseLocation);
console.log("------------------------------------------");
console.log("💼 Operations Exp : " + priorExperience);
console.log("🛤️ Tech Journey   : " + transitionPath);
console.log("------------------------------------------");
console.log("🔥 Current Goal   : " + currentStatus);
console.log("🛠️ Core Stack     : " + targetFrameworks);

console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");
console.log("%c✅ SYSTEM LOADED. READY TO BUILD SCALABLE APPS!", "color: #FFD700; font-weight: bold;");
console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");