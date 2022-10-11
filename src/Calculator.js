import "./Calculator.css"
import { useState } from "react"

function Calculator() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    

    const operators = ["/", "*", "-", "+", "."];

    const update = value => {

        if(operators.includes(value) && calc === "" ||
           operators.includes(value) && operators.includes(calc.slice(-1))
        )
        {
            return;
        }

        setCalc(calc + value);

        if (!operators.includes(value)) {
            setResult(eval (calc+value).toString());
        }
    }

    const create = () => {
        const numbers = [];

        for (let i=1; i < 10; i++) {
            numbers.push(
                <button onClick={() => update(i.toString())} key={i}>{i}</button>
            )
        }
        
        return numbers;

    }

    const calculate = () => {
        const value=" "
        setCalc(eval (calc).toString());
        setResult(value);
        const color=document.getElementById('h4')
    }
    const clear = () => {
        const value=" "
        setCalc(value)
        setResult(value)
    }

    const del = () => {
        if (calc === " ") {
            return;
        }
        const value =calc.slice(0,-1);

        setCalc(value);
        setResult(eval (value).toString())
    }

    return (
        <div className="calculator">
            <div className="display">
               <h4 id="h1"> { calc || "0"} </h4>
                {result ? <p>{result}</p>: '' }
            </div>
            <div className='operators'>
                <button onClick={ clear }>C</button>
                <button onClick={() => update('/')}>÷</button>
                <button onClick={() => update('*')}>×</button>
                <button onClick={del}>DEL</button> 
            </div>
            <div className="outer">
            <div className="numero">
                {create()}
                <button onClick={() => update('0')}>0</button>
                <button id='white'> </button>
                <button onClick={() => update('.')}>.</button>
            </div>
            <div className="signs">
            <button onClick={() => update('+')}>+</button>
            <button onClick={() => update('-')}>-</button>
            <button onClick={calculate} id='equals'>=</button>
            </div>
            </div>
        </div>
    )
}





export default Calculator;