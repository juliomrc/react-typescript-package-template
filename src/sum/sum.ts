export const sum = (...numbers: number[]) => {
    return numbers.reduce((acc, nextNumber) => acc + nextNumber, 0);
};
