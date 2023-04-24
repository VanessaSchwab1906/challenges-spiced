// - Inside of the `components` folder, create a file `BoxWithStyledComponents.js`.
// - It should export a function which
//   - accepts a prop `isBlack`
//   - returns a `div` which accepts the `isBlack` prop.
// - Inside of the same file, create a styled component called `StyledBox` which features a `div`.
//   - Inside of the return statement of your function, replace the `div` with `StyledBox`.
//   - `StyledBox` should have the same styling as the `BoxWithClassName` component.
//   - Check whether the `isBlack` prop is true and set the correct `background-color` accordingly.
//   - How could you set the styling for the hover effect again?
// - Switch to [`pages/index.js`](./pages/index.js):
//   - import `BoxWithStyledComponents` and
//   - below the two `BoxWithClassName` components, render two `BoxWithStyledComponents`, one green and one black.

import styled from "styled-components";

export default function BoxWithStyledComponents({ isBlack }) {
  return <StyledBox isBlack={isBlack} v></StyledBox>;
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  &:hover {
    background-color: red;
  }

  ${(props) =>
    props.isBlack &&
    `
      background-color: black;
    `}

  &:hover {
    background-color: red;
  }
`;
