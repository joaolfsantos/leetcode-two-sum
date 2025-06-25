// twoSum.js

/**
 * Função a ser implementada.
 * Recebe um array nums e um inteiro target.
 * Deve retornar os índices dos dois números cuja soma seja igual a target.
 */
function twoSum(nums, target) {
    return [-1, -1]; // Implementação placeholder
}

function main() {
    const testCases = [
        { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
        { nums: [3, 2, 4], target: 6, expected: [1, 2] },
        { nums: [3, 3], target: 6, expected: [0, 1] },
        { nums: [1, 5, 3, 7], target: 8, expected: [0, 3] },
        { nums: [-1, -2, -3, -4, -5], target: -8, expected: [2, 4] },
        { nums: [10, 20, 30, 40, 50], target: 90, expected: [3, 4] },
        { nums: [0, 4, 3, 0], target: 0, expected: [0, 3] },
        { nums: [1, 2, 3, 4, 5, 6], target: 11, expected: [4, 5] },
        { nums: [100, 200, 300, 400], target: 700, expected: [2, 3] },
        { nums: [5, 75, 25], target: 100, expected: [1, 2] },
        { nums: [0, -3, 2, 7, 11], target: 9, expected: [1, 4] },
        { nums: [2, 5, 5, 11], target: 10, expected: [1, 2] },
        { nums: [1, 3, 4, 2], target: 6, expected: [2, 3] },
        { nums: [8, 7, 2, 5], target: 9, expected: [1, 2] },
        { nums: [99, 1, 5, 10, 4], target: 15, expected: [2, 3] },
    ];

    let passed = 0;

    testCases.forEach((test, index) => {
        const result = twoSum(test.nums, test.target);
        const isCorrect = arraysEqual(result, test.expected) || arraysEqual(result, test.expected.reverse());
        if (isCorrect) {
            console.log(`✅ Teste ${index + 1} passou.`);
            passed++;
        } else {
            console.log(`❌ Teste ${index + 1} falhou. Entrada: nums = [${test.nums}], target = ${test.target}. Esperado: [${test.expected}] | Obtido: [${result}]`);
        }
    });

    console.log(`\n${passed} de ${testCases.length} testes passaram.`);
}

function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, index) => val === b[index]);
}

main();
