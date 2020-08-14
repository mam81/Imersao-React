import styled from 'styled-components';

import LogoDev from '../LogoDev'

const FooterDev = styled.footer `
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16rem;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    padding: 20rem 0;

    & > ${LogoDev} {
        margin-bottom: 5rem;
    }
`;

export default FooterDev;