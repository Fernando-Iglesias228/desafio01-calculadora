import styled, {css} from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 10px;
    border 1px solid #CDCDCD;
    background-color: #00AAF0;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Roboto';
    flex: 1;

    &:hover {
        opacity: 0.6;
    }

    ${({ invisible }) =>
        invisible &&
        css`
            color: transparent;
            pointer-events: none;
        `}
`