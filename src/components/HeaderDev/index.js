import styled from 'styled-components';

import LogoDev from '../LogoDev'
import ButtonDev from '../ButtonDev'


const HeaderDev = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-black-dark);
    padding: 20px 30px;
    border-bottom: 2px solid var(--color-primary-medium);

    @media(max-width: 800px) {
        justify-content: center;
        padding: 15px;

        & > ${LogoDev} {
            height: 35px;
        }

        & >  ${ButtonDev} {
            background-color: var(--color-primary-medium);
            color: var(--color-black-dark);
            border-top: 1px solid var(--color-black-dark);
            border-radius: 0;
            position: fixed;
            bottom: 0;
            width: 100vw;
        }
    }
`
export default HeaderDev;