function greeting() {
    let usarName = 'Oscar';

    function displayUserName() {
        return `Hello ${usarName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g); // [Function: displayUserName]
console.log(g()); // Hello Oscar