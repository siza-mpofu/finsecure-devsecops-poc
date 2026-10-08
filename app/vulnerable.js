function processUserInput(userInput) {
    const value = Number(userInput);

    if (!Number.isFinite(value)) {
        throw new Error("Invalid numeric input");
    }

    return value;
}

console.log(processUserInput("2"));
