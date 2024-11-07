import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState("");
  const [calcState, setCalcState] = useState(1)

  const handleAddNumber = (number) => {
    if(calcState === 0){
      setCurrentNumber(prev => `${prev}${number}`);
    } else{
      setCurrentNumber(`${number}`);
      setCalcState(0);
    }
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setCalcState(1);
  }

  const handleSum = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
      setCalcState(1);
    }else {
      let val = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(val);
      setFirstNumber(val);
      setOperation('+');
      setCalcState(1);
    }
  }

  const handleSub = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
      setCalcState(1);
    }else {
      let val = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(val);
      setFirstNumber(val);
      setOperation('-');
      setCalcState(1);
    }
  }

  const handleMult = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
      setCalcState(1);
    }else {
      let val = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(val);
      setFirstNumber(val);
      setOperation('*');
      setCalcState(1);
    }
  }

  const handleDiv = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
      setCalcState(1);
    }else {
      let val = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(val);
      setFirstNumber(val);
      setOperation('/');
      setCalcState(1);
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== ''){
      switch(operation){
        case '+':
          handleSum();
          setFirstNumber("0")
          break;
        case '-':
          handleSub();
          setFirstNumber("0")
          break;
        case '*':
          handleMult();
          setFirstNumber("0")
          break;
        case '/':
          handleDiv();
          setFirstNumber("0")
          break;
        default:
          break;
      }
    }
  }
  
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
        <Button label="x" onClick={() => handleMult()}/>
        <Button label="/" onClick={() => handleDiv()}/>
        <Button label="c" onClick={() => handleOnClear()}/>
        <Button label={"-"} invisible={1}/>
        </Row>
        <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="-" onClick={() => handleSub()}/>
        </Row>
        <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="+" onClick={() => handleSum()}/>
        </Row>
        <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="=" onClick={() => handleEquals()}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
