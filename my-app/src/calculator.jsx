import React, { useState } from 'react';
import index from './index.css'

<input type="number" />
const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [firstOperand, setFirstOperand] = useState(null);
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

    const inputDigit = (digit) => {
        if (waitingForSecondOperand === true) {
            setDisplayValue(String(digit));
            setWaitingForSecondOperand(false);
        } else {
            setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
        }
    };
    <input type="number" />
    const inputDecimal = () => {
        if (waitingForSecondOperand === true) {
            setDisplayValue('.');
            setWaitingForSecondOperand(false);
            return;
        }
        if (!displayValue.includes('.')) {
            setDisplayValue(displayValue + '.');
        }
    };

    const clearDisplay = () => {
        setDisplayValue('0');
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
    };

    const handleOperator = (nextOperator) => {
        const inputValue = parseFloat(displayValue);

        if (firstOperand === null) {
            setFirstOperand(inputValue);
        } else if (operator && !waitingForSecondOperand) {
            const result = performCalculation[operator](firstOperand, inputValue);
            setDisplayValue(String(result));
            setFirstOperand(result);
        }

        setWaitingForSecondOperand(true);
        setOperator(nextOperator);
    };

    const performCalculation = {
        '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
        '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
        '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
        '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
        '=': (firstOperand, secondOperand) => secondOperand
    };

    return (
        <div className="calculator">
            <div className="calculator-display">{displayValue}</div>
            <div className="calculator-buttons">
                <button onClick={() => inputDigit(7)}>7</button>
                <button onClick={() => inputDigit(8)}>8</button>
                <button onClick={() => inputDigit(9)}>9</button>
                <button className="operator" onClick={() => handleOperator('/')}>&divide;</button>

                <button onClick={() => inputDigit(4)}>4</button>
                <button onClick={() => inputDigit(5)}>5</button>
                <button onClick={() => inputDigit(6)}>6</button>
                <button className="operator" onClick={() => handleOperator('*')}>&times;</button>

                <button onClick={() => inputDigit(1)}>1</button>
                <button onClick={() => inputDigit(2)}>2</button>
                <button onClick={() => inputDigit(3)}>3</button>
                <button className="operator" onClick={() => handleOperator('-')}>&minus;</button>

                <button onClick={() => inputDigit(0)}>0</button>
                <button onClick={() => inputDecimal()}>.</button>
                <button className="all-clear" onClick={() => clearDisplay()}>AC</button>
                <button className="operator" onClick={() => handleOperator('+')}>+</button>

                <button className="equal-sign" onClick={() => handleOperator('=')}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
