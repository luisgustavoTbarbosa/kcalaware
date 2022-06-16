import { Container } from "./styles";

import logoImg from '../../assets/logo.svg';
import homeIcon from '../../assets/home.svg';
import balanceIcon from '../../assets/balance.svg';
import heartIcon from '../../assets/heart.svg';
import profileIcon from '../../assets/profile.svg';

export function Header() {
    return (
        <Container>
            <img src={logoImg} alt="Kcalaware"/>
            <nav>
                <img src={homeIcon} alt="Icon home"/>
                <img src={balanceIcon} alt="Icon balance"/>
                <img src={heartIcon} alt="Icon heart"/>
                <img src={profileIcon} alt="Icon profile"/>
            </nav>
        </Container>
    )
}