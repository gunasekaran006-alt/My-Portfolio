// ========================================================
// 🚀 THE ULTIMATE MASTER CODE: DAY 20 + 21 + 22
// NO LOGIC MISSING - FULL AUDIT COMPLETED
// ========================================================

// [DAY 20]: HOISTING, VAR, AND CONSOLE LOGGING
// --------------------------------------------------------
console.log("%c--- Level 1: System Hoisting Check ---", "color: yellow; font-weight: bold;");

// Checking var hoisting (Should print 'undefined')
console.log("Initial Boot Status: " + systemBoot); 
var systemBoot = "Active"; 

console.log("%c----------------------------------", "color: yellow;");


// [DAY 21 & 22]: PORTFOLIO MASTER FUNCTION (Clean & Modular)
// --------------------------------------------------------
function initPortfolioSystem() {

    // --- PRIMITIVE DATA TYPES (Day 21 Revision) ---
    const devName = "Gunasekaran S";          // String
    const experienceYears = 12;               // Number
    const currentTrainingMonths = 6;          // Number
    const isMernStudent = true;               // Boolean
    let careerGoal;                           // Undefined (Value not set yet)
    const profileId = 9010036699999n;         // BigInt (Large Integer)

    // --- REFERENCE DATA TYPES (Day 21 Revision) ---
    // Object: Grouping real user data
    const devProfile = {
        name: devName,
        location: "Coimbatore, Tamil Nadu",
        // Array: Managing tech stack
        skills: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "React"],
        background: "Operations & Business Development"
    };

    // --- OPERATORS & EXPRESSIONS (Day 22 Concepts) ---
    
    // 1. Arithmetic (+, *) and Assignment (+=)
    let totalExpInMonths = (experienceYears * 12) + currentTrainingMonths;
    let dayCount = 22; 
    dayCount += 1; // Incrementing current day count

    // 2. Comparison (>=) and Ternary Operator (? :)
    // This logic directly labels your professional standing
    let professionalRank = (experienceYears >= 10) ? "Senior Tech Leader" : "Junior Developer";

    // --- OUTPUT: TEMPLATE LITERALS (Day 22: Backticks & Curly Brackets) ---
    console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");
    console.log(`🚀 ARCHITECT PROFILE LOADED: ${devName.toUpperCase()}`);
    console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");

    // Dynamic output using Template Literals
    console.log(`👤 Name         : ${devProfile.name}`);
    console.log(`📍 Profile ID   : ${profileId}`);
    console.log(`💼 Experience   : ${experienceYears} Years (${totalExpInMonths} Months)`);
    console.log(`🎯 Profile Rank : ${professionalRank}`);
    console.log(`🛠️ Current Focus : ${devProfile.skills[3]}`); // Array index access
    
    console.log("------------------------------------------");
    console.log("%c🔍 DAY 22 INTERVIEW PROBLEMS (Type Coercion):", "color: #FFD700;");
    
    // Explicit Interview Logic Checks (Day 22 strictly included)
    console.log(`1. Math (5 + "5") : ${5 + "5"}`); // Result: 55 (String conversion)
    console.log(`2. Math (5 - "5") : ${5 - "5"}`); // Result: 0 (Number conversion)
    console.log(`3. Math (5 * "5") : ${5 * "5"}`); // Result: 25
    console.log(`4. Math (5 - "gk"): ${5 - "gk"}`); // Result: NaN (Not a Number)
    
    // Equality Comparison (== vs ===)
    console.log(`5. Loose Check (18 == "18") : ${18 == "18"}`);  // true
    console.log(`6. Strict Check (18 === "18"): ${18 === "18"}`); // false
    
    console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");
}

// 3. EXECUTE THE FULL ENGINE (Day 21 Function Call)
// --------------------------------------------------------
initPortfolioSystem();