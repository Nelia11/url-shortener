import { FC, useState } from 'react';
import styled from 'styled-components';

interface ButtonInterface {
  $isHovered?: boolean;
  $isRounded?: boolean;
}

const Button = styled.button<ButtonInterface>`
  color: white;
  background-color: ${({ $isHovered }) =>
    $isHovered ? 'hsl(180, 66%, 75%)' : 'hsl(180, 66%, 49%)'};
  border: none;
  padding: 1rem 2rem;
  font-weight: 700;
  font-size: 1.8rem;
  border-radius: ${({ $isRounded }) => ($isRounded ? '2rem' : '0.5rem')};
  cursor: pointer;
`;

interface ButtonCyanProps {
  isRounded: boolean;
  text: string;
}

const ButtonCyan: FC<ButtonCyanProps> = ({ isRounded, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $isRounded={isRounded}
      $isHovered={isHovered}
    >
      {text}
    </Button>
  );
};
export default ButtonCyan;
