function checkProbabilityTheory(count) {
    if (!count || count <= 0) {
        console.log("Вкажіть додатню кількість ітерацій");
        return;
    }

    let evenCount = 0;
    let oddCount = 0;
    const min = 100;
    const max = 1000;

    for (let i = 0; i < count; i++) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

        if (randomNum % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    let even = ((evenCount / count) * 100).toFixed(1);
    let odd = ((oddCount / count) * 100).toFixed(1);


    console.log(`Кількість чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних до непарних: ${even}% / ${odd}%`);
}
checkProbabilityTheory(10000);