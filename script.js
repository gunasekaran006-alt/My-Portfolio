// ========================================================
// 🚀 THE ULTIMATE MASTER ENGINE: DAY 20, 21, 22 & 23
// All Concepts: Hoisting, Data Types, Operators, & Control Flows
// ========================================================

// [DAY 20]: SYSTEM HOISTING CHECK (Demonstrating var scope)
console.log("%c--- Day 20: Hoisting Diagnostic ---", "color: yellow; font-weight: bold;");
console.log("Status of hoistedVar: " + hoistedVar); // Output: undefined
var hoistedVar = "System Online"; 
console.log("%c----------------------------------", "color: yellow;");


// [DAY 21, 22, 23]: CORE MASTER FUNCTION
function initMasterSystem() {

    // --- DATA ARCHITECTURE (Day 21: Primitive & Reference) ---
    const devName = "Gunasekaran S";          // String
    const experienceYears = 12;               // Number
    const skills = ["HTML5", "CSS3", "JS", "MERN"]; // Array
    const secureId = 9010036699999n;         // BigInt
    let pendingCertification;                 // Undefined

    // --- LOGIN VALIDATION: LOGICAL OPERATORS (Day 23) ---
    // Using Assignment (=) and Strict Equality (===)
    let dbUser = "gunasekaran";
    let dbPass = "gk@321";
    let enteredUser = "gunasekaran"; 
    let enteredPass = "gk@321";      

    console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");
    
    // Day 23: If-Else & Logical AND (&&) for secure access
    if (enteredUser === dbUser && enteredPass === dbPass) {
        console.log(`🚀 Welcome, ${devName}! Login Successful.`); // Template Literal (``)
    } else {
        console.log("❌ Invalid Credentials. Access Denied.");
        return; // Stops execution if login fails
    }
    console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");

    // --- DYNAMIC CALCULATIONS & NESTED IF (Day 22 & 23) ---
    let performanceScore = 85; 

    // Day 23: Nested Conditions (Industry/Interview Scenario)
    if (experienceYears >= 10) {
        // Grade checking based on performance within senior experience
        if (performanceScore >= 90) {
            console.log("🎯 Rank: Elite Tech Architect (Grade A)");
        } else if (performanceScore >= 75) {
            console.log("🎯 Rank: Senior Strategy Leader (Grade B)");
        } else {
            console.log("🎯 Rank: Tech Consultant (Grade C)");
        }
    } else {
        console.log("🎯 Rank: Associate Developer");
    }

    // --- SWITCH CASE: SYSTEM MODE (Day 23) ---
    let systemMode = 1; // 1: Dev, 2: Prod, 3: Maintenance
    switch (systemMode) {
        case 1:
            console.log("🛠️ Mode: Development (Debug Active)");
            break;
        case 2:
            console.log("🌐 Mode: Production (Live)");
            break;
        case 3:
            console.log("🚧 Mode: Maintenance");
            break;
        default:
            console.log("⚠️ Mode: Unknown Status");
    }

    // --- LOOPING STATEMENTS (Day 23) ---
    console.log("------------------------------------------");
    console.log("%c🔍 CORE SKILL AUDIT (For Loop):", "color: #FFD700;");

    // 1. For Loop: Iterating through skills array (Initial, Condition, Iteration)
    for (let i = 0; i < skills.length; i++) {
        console.log(` - Skill ${i + 1}: ${skills[i]}`);
    }

    // 2. While Loop: Yearly Progress
    console.log("📈 Yearly Progress Milestones (While Loop):");
    let year = 1;
    while (year <= 3) {
        console.log(`   Year ${year} Completed`);
        year++; // Iteration
    }

    // 3. Do-While Loop: Final Verification (Executes at least once)
    let verifyCount = 1;
    do {
        console.log("✅ Final System Integrity Check: OK");
        verifyCount++;
    } while (verifyCount <= 1);

    // --- INTERVIEW PROBLEMS (Day 22 Concepts: Type Coercion) ---
    console.log("------------------------------------------");
    console.log(`💡 Interview Check (5 + "5") : ${5 + "5"}`); // Result: 55
    console.log(`💡 Interview Check (5 - "5") : ${5 - "5"}`); // Result: 0
    console.log(`💡 Interview Check (5 - "gk"): ${5 - "gk"}`); // Result: NaN
    console.log(`💡 Strict Equality (18 === "18"): ${18 === "18"}`); // false
    
    console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");
}

// EXECUTE MASTER SYSTEM
initMasterSystem();