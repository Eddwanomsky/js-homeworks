const regex = /\b[^Aa\s]{6,}\b/;
const words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];
const result = words.filter(word => regex.test(word));
console.log(result); 