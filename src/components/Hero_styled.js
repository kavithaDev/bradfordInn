import styled from 'styled-components'
import defaultImage from '../images/room-1.jpeg'

const Hero_styled = styled.header`
  min-height: 60vh;
  background: url(${props => (props.banner ? props.banner : defaultImage)});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Hero_styled;