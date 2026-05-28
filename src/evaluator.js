// A simple tracking matrix for the user's behavioral vectors
let userScores = {
    scaffolder: 0,
    architect: 0,
    mechanical: 0,
    granular_iterationist: 0,
    co_pilot: 0,
    red_teamer: 0,
    anthropomorphic: 0
};

// Function to calculate the dominant profile vector
function evaluateProfile(scores) {
    return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
}
