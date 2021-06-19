import styled from 'styled-components';
import { handleAlignment, handleDirection } from './MenuService';

const MenuChildDiv = styled.div`
  display: ${(props) => handleDirection(props.direction)};
  margin: ${(props) => handleAlignment(props.alignment)};
`

export default MenuChildDiv