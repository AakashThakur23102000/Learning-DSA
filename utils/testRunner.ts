export type TestCase<TArgs extends unknown[], TResult> = {
    input: TArgs;
    expected: TResult;
};

function isEqual(actual: unknown, expected: unknown): boolean {
    return JSON.stringify(actual) === JSON.stringify(expected);
}

function formatMemory(bytes: number): string {
    return `${(bytes / 1024).toFixed(2)} KB`;
}

function getCurrentTimeMs(): number {
    const globalPerformance = (globalThis as any).performance;

    if (globalPerformance?.now) {
        return globalPerformance.now();
    }

    return Date.now();
}

function getHeapUsed(): number {
    const nodeProcess = (globalThis as any).process;

    if (!nodeProcess?.memoryUsage) {
        return 0;
    }

    return nodeProcess.memoryUsage().heapUsed;
}

export function runTests<TArgs extends unknown[], TResult>(
    fn: (...args: TArgs) => TResult,
    testCases: TestCase<TArgs, TResult>[]
): void {
    let passedCount = 0;
    const functionName = fn.name || "Anonymous Function";

    const totalStartTime = getCurrentTimeMs();
    const totalStartMemory = getHeapUsed();

    console.log(`\n🧪 Running Test Cases for ${functionName}`);
    console.log("==================================================");

    testCases.forEach((testCase, index) => {
        const testStartTime = getCurrentTimeMs();
        const testStartMemory = getHeapUsed();

        let actual: TResult;

        try {
            actual = fn(...testCase.input);
        } catch (error) {
            console.log(`❌ Test Case ${index + 1} Failed`);
            console.log(`Input: ${JSON.stringify(testCase.input)}`);
            console.log(`Expected: ${JSON.stringify(testCase.expected)}`);
            console.log(`Error: ${error}`);
            console.log("--------------------------------------------------");
            return;
        }

        const testEndTime = getCurrentTimeMs();
        const testEndMemory = getHeapUsed();

        const passed = isEqual(actual, testCase.expected);
        const timeTaken = testEndTime - testStartTime;
        const memoryUsed = testEndMemory - testStartMemory;

        if (passed) {
            passedCount++;
            console.log(`✅ Test Case ${index + 1} Passed`);
        } else {
            console.log(`❌ Test Case ${index + 1} Failed`);
        }

        console.log(`Input: ${JSON.stringify(testCase.input)}`);
        console.log(`Expected: ${JSON.stringify(testCase.expected)}`);
        console.log(`Output: ${JSON.stringify(actual)}`);
        console.log(`Runtime: ${timeTaken.toFixed(4)} ms`);
        console.log(`Memory Change: ${formatMemory(memoryUsed)}`);
        console.log("--------------------------------------------------");
    });

    const totalEndTime = getCurrentTimeMs();
    const totalEndMemory = getHeapUsed();

    console.log(`\nResult: ${passedCount}/${testCases.length} test cases passed`);
    console.log(`Total Runtime: ${(totalEndTime - totalStartTime).toFixed(4)} ms`);
    console.log(`Approx Memory Change: ${formatMemory(totalEndMemory - totalStartMemory)}`);

    if (passedCount === testCases.length) {
        console.log("🎉 Accepted");
    } else {
        console.log("❌ Wrong Answer");
    }
}