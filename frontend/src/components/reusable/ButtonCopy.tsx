import { FC } from 'react';
import styled from 'styled-components';

interface CopyButtonInterface {
  $isHovered?: boolean;
  $isClicked?: boolean;
}

const Button = styled.button<CopyButtonInterface>`
  height: 3rem;
  width: 10rem;
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  background-color: ${({ $isHovered, $isClicked }) =>
    $isClicked
      ? 'black'
      : $isHovered
      ? 'hsl(180, 66%, 79%)'
      : 'hsl(180, 66%, 49%)'};
`;

interface ButtonCopyProps {
  handleCopyButtonClick: () => void;
  isHovered: boolean;
  setIsHovered: (val: boolean) => void;
  isClicked: boolean;
}

const ButtonCopy: FC<ButtonCopyProps> = ({
  handleCopyButtonClick,
  isHovered,
  setIsHovered,
  isClicked,
}) => {
  return (
    <Button
      onClick={() => handleCopyButtonClick()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $isClicked={isClicked}
      $isHovered={isHovered}
    >
      {isClicked ? 'Copied' : 'Copy'}
    </Button>
  );
};
export default ButtonCopy;
