// ========================================================
// DAY 21: JAVASCRIPT MASTER DIAGNOSTICS
// Concepts: Hoisting, var, let, const, Object, Array, 
// Function, String, Number, Boolean, BigInt, Undefined.
// ========================================================

// 1. DAY 20 REVISION: HOISTING & VAR
// --------------------------------------------------------
console.log("%c--- Hoisting Verification ---", "color: yellow; font-weight: bold;");

// Accessing 'var' before declaration to demonstrate Hoisting
console.log("Status of hoistedVar: " + hoistedVar); // Output: undefined
var hoistedVar = "System Online"; 

console.log("%c---------------------------", "color: yellow;");


// 2. DAY 21: DATA TYPES & FUNCTION INTEGRATION
// --------------------------------------------------------
// Defining a Function to encapsulate our logic
function initDeveloperProfile() {

    // --- PRIMITIVE DATA TYPES ---
    const devName = "Gunasekaran S";          // String (Fixed - const)
    const experienceYears = 12;               // Number (Fixed - const)
    const isMernStudent = true;               // Boolean (Fixed - const)
    let pendingCertification;                 // Undefined (Can change - let)
    const secureId = 9010036699999n;          // BigInt (Large Integer)

    // --- REFERENCE DATA TYPES (Object & Array) ---
    // Organizing all Day 20 data into a Day 21 Object
    const portfolioData = {
        name: devName,
        location: "Coimbatore, Tamil Nadu",
        
        // Array: Managing skills as a list
        skills: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "React"],
        
        experience: {
            total: experienceYears,
            domain: "Operations & Business Development"
        }
    };

    // --- SYSTEM LOG OUTPUTS ---
    console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");
    console.log("%c🚀 INITIATING CORE SYSTEM DIAGNOSTICS...", "color: #00FA9A; font-weight: bold;");
    console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");

    // Accessing data via Object properties and Array index
    console.log("👤 Architect  : " + portfolioData.name);
    console.log("📍 Location   : " + portfolioData.location);
    console.log("💼 Background : " + portfolioData.experience.domain);
    console.log("🛠️ Learning   : " + portfolioData.skills[3]); // Accessing "JavaScript"
    
    console.log("------------------------------------------");
    console.log("%c🔍 DATA TYPE AUDIT (Internal Check):", "color: #FFD700;");
    
    // Verifying every data type for Day 21 practice
    console.log("1. String Check   : " + (typeof devName));
    console.log("2. Number Check   : " + (typeof experienceYears));
    console.log("3. Boolean Check  : " + (typeof isMernStudent));
    console.log("4. BigInt Check   : " + (typeof secureId));
    console.log("5. Undefined Check: " + (typeof pendingCertification));
    console.log("6. Object Check   : " + (typeof portfolioData));
    console.log("7. Array Check    : " + Array.isArray(portfolioData.skills)); 
    
    console.log("%c==========================================", "color: #27C8F5; font-weight: bold;");
}

// 3. EXECUTING THE MASTER FUNCTION
// --------------------------------------------------------
initDeveloperProfile();