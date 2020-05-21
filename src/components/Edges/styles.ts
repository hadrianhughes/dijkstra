import styled, { css } from 'styled-components';

export const Line = styled.div`
  background: linear-gradient(to top right, rgba(0,0,0,0) calc(50% - 2px), #a5a5a5, rgba(0,0,0,0) calc(50% + 2px) );
  position: absolute;

  ${props => (
    props.backward
      ? css`background: linear-gradient(to bottom right, rgba(0,0,0,0) calc(50% - 2px), #a5a5a5, rgba(0,0,0,0) calc(50% + 2px))`
      : ''
  )}
`;
