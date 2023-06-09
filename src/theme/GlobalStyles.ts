import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
    ${reset}

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
    }

    html {
        font-size: ${({ theme: { typography } }) => typography.size.reset};
    }

    body {
        background-color: ${({ theme: { palette } }) =>
          palette.neutral.bodyBackground};
        color: ${({ theme: { palette } }) => palette.common.white};
        font-family: 'Rubik', sans-serif;
        font-size: ${({ theme: { typography } }) => typography.size.body}
    }
`;
