function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            const b = stack.pop()!;
            const a = stack.pop()!;

            let result: number;
            switch (token) {
                case "+":
                    result = a + b;
                    break;
                case "-":
                    result = a - b;
                    break;
                case "*":
                    result = a * b;
                    break;
                case "/":
                    result = Math.trunc(a / b); // truncate toward zero
                    break;
            }

            stack.push(result);
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
};