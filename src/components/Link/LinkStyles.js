import styled from 'styled-components';
import { handleColor, handleHoverColor } from './LinkService';

const LinkDiv = styled.div`
  color: ${(props) => handleColor(props.color)};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  &:hover {
    color: ${(props) => handleHoverColor(props.color)};
    transition-duration: .3s;
  }
  &:not(&:hover) {
    color: ${(props) => handleColor(props.color)};
    transition-duration: .3s;
  }
`

export default LinkDiv