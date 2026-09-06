
// throw new Error("An exception occurred");
// console.log("remains after the exception");

// let arr: number[] = [1, 2];
// console.log(arr[3]);


try {
    throw new Error("An exception occurred");
}

catch (error: Error | any) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}

console.log("remains after the exception");