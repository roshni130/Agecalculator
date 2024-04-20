const inputBox = document.querySelector("#ageValue");
const calculateButton = document.querySelector("#calculate");
const resultDiv = document.querySelector("#result");

calculateButton.addEventListener('click', () => {
    const birthDate = new Date(inputBox.value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    resultDiv.textContent = `Your age is ${age} years old.`;
});
