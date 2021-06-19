import styled from 'styled-components';
import { handleAlignmentStyle, handleDirectionStyle } from './MenuService';

const MenuChildDiv = styled.div`
  display: ${(props) => handleDirectionStyle(props.direction)};
  margin: ${(props) => handleAlignmentStyle(props.alignment)};
`

export default MenuChildDiv