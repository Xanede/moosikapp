import styled from 'styled-components';
import { Theme } from '@components/ThemeProvider';

const Button = styled.input.attrs({ type: 'submit' })`
  margin: 0;
  padding: 6px 12px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background: ${(props: Theme) => props.theme.forms.button.background.inactive};
  color: ${(props: Theme) => props.theme.forms.button.text};
  border: 0;
  border-radius: 0;
  outline: 0;
  cursor: pointer;
  transition: all ${(props: Theme) => props.theme.transition};

  &:hover {
    background: ${(props: Theme) => props.theme.forms.button.background.active};
    box-shadow: 0 0 2px ${(props: Theme) => props.theme.forms.button.background.active};
  }
`;

interface FormButtonProps {
  children: string;
  className?: string;
}

const SubmitButton = ({ children, className }: FormButtonProps) => (
  <Button className={className} value={children} />
);

export default SubmitButton;
