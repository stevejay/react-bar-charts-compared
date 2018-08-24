import styled from "styled-components";
import { FaCircle as CircleIcon } from "react-icons/fa";

const Dot = styled(CircleIcon)`
  color: ${props => props.theme.color.brightForeground};
  opacity: ${props => (props.selected ? 0.75 : 0.25)};
  width: 10px;
  height: 10px;
  display: inline-block;
  margin: 0 3px;
  transform: scale(${props => (props.selected ? 1.15 : 1)});
  will-change: transform, opacity;
  transition: opacity ${props => props.theme.timing.hover} ease-in-out,
    transform ${props => props.theme.timing.hover} ease-in-out;
`;

export default Dot;
