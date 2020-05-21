import styled, { css } from 'styled-components';

export const Line = styled.div`
  position: absolute;

  ${props => {
    const color = props.active ? '#4AABFF' : '#a5a5a5';

    if (props.backward) {
      return css`
        background: linear-gradient(to bottom right, rgba(0,0,0,0) calc(50% - 2px), ${color}, rgba(0,0,0,0) calc(50% + 2px))
      `;
    }

    return css`
      background: linear-gradient(to top right, rgba(0,0,0,0) calc(50% - 2px), ${color}, rgba(0,0,0,0) calc(50% + 2px));
    `;
  }}
`;
