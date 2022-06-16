import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 138px);
    border-radius: 3rem 3rem 0 0;
    background: var(--gradient);
    overflow: hidden;
`

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 55%;
    height: 100%;
    padding: 2.5rem 0 2.5rem 5rem;

    @media screen and (max-width: 900px) {
        padding: 2.5rem 0 2.5rem 1rem;
    }
`

export const HeaderInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .7rem;
    color: #ffffff;

    h2 {
        font-size: 2rem;
        font-weight: 700;

        span {
            display: block;
            font-weight: 300;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
        
        p, span {
            display: flex;
        }

        p {
            font-size: 7rem;
            font-weight: 600;
            line-height: 1;
        }

        span {
            font-size: 1.3rem;
            font-weight: 300;
        }
    }

    @media screen and (max-width: 900px) {
        div {
            p {
                font-size: 5rem;
            }
        }
    }
`

export const MainInfos = styled.div`
    align-self: flex-start;
    display: grid;
    grid-template-columns: repeat(2, 13rem);
    gap: 20px;
    max-height: 13rem;
    padding-right: 5px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0.3rem;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--button-gradient);
        border-radius: 1rem;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        width: 13rem;
        height: 5rem;
        background: var(--beige);
        border-radius: .6rem;

        .calories {
            font-size: .8rem;
            color: var(--dark-purple);
        }

        .food-name {
            font-size: 1.2rem;
            color: #2E2E2E;
        }

        span {
            color: #767676;
            font-size: .8rem;
            font-weight: 300;
        }
    }
`

export const SearchFood = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 100%;
    padding: 2.5rem 5rem 2.5rem 0;
    width: 45%;

    input {
        height: 3rem;
        width: 100%;
        border-radius: 2rem;
        padding: 1rem;
        border: none;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    @media screen and (max-width: 900px) {
        padding: 2.5rem 1rem 2.5rem 0;
    }
`

export const ContainerCardFood = styled.div`
    height: 25rem;
    padding: 1rem;
    background: #ffffff;
    border-radius: .6rem;

    div {
        text-transform: capitalize;
        padding: .2rem;
    }

    div + div {
        border-top: 1px solid var(--light-gray);
    }
`
