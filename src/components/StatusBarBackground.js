import {
  Platform,
} from 'react-native';
import styled from 'styled-components/native';

const StatusBarBackground = styled.View`
  height: ${() => ((Platform.OS === 'ios') ? 20 : 0)};
  backgroundColor: ${props => props.background || 'white'};
`;

export default StatusBarBackground;
