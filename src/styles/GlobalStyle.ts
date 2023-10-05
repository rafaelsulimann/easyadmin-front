import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    :root {
        --gray1: #292929;
        --gray2: #434343;
        --gray3: #8D8D8D;
        --white: #FFF;
        --green: #30E584;
        --red: #ff5353;
        --yellow: #E5BD30;
        --purple: #7371FF;
    }

    body {
        background-color: var(--gray1);
        color: var(--white);
    }

`;
