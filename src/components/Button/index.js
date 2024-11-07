import { ButtonContainer } from './styles'

const Button = ({label, onClick, invisible}) => {
    return (
      <ButtonContainer onClick={onClick} invisible={invisible}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  