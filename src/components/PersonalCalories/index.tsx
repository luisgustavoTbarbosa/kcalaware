import { useEffect, useState } from "react";
import { Container, ContainerCardFood, HeaderInfos, Infos, MainInfos, SearchFood } from "./styles";

import { api } from "../../services/api"

interface Food {
    descricao: string;
    calorias: number;
}

export function PersonalCalories() {
    const [search, setSearch] = useState(" ");
    const [arrayFood, setArrayFood] = useState<Food[]>([])
    
    useEffect(() => {
        const newApi = api.filter(data => data.descricao.startsWith(search))

        setArrayFood(newApi)
    }, []);

    useEffect(() => {
        const newApi = api.filter(data => data.descricao.startsWith(search))

        setArrayFood(newApi)
    }, [search]);

    return (
        <Container>
            <Infos>
                <HeaderInfos>
                    <h2>
                        Tranquilinho,
                        <span>este é seu valor diário restante</span>
                    </h2>
                    <div>
                        <p>1896kcal</p>
                        <span>(2000kcal/dia)</span>
                    </div>
                </HeaderInfos>
                <MainInfos>
                    <div>
                        <p className="calories">165 kcal</p>
                        <p className="food-name">Batata</p>
                        <span>1 batata</span>
                    </div>
                    <div>
                        <p className="calories">147 kcal</p>
                        <p className="food-name">Refrigerante</p>
                        <span>1 lata (350ml)</span>
                    </div>
                    <div>
                        <p className="calories">25 kcal</p>
                        <p className="food-name">Cenoura</p>
                        <span>1 cenoura</span>
                    </div>
                    <div>
                        <p className="calories">282 kcal</p>
                        <p className="food-name">Frango assado</p>
                        <span>1 peito (172g)</span>
                    </div>
                    <div>
                        <p className="calories">25 kcal</p>
                        <p className="food-name">Cenoura</p>
                        <span>1 cenoura</span>
                    </div>
                </MainInfos>
            </Infos>
            <SearchFood>
                <input type="text" name="" id="" placeholder="Pesquiser por um alimento" onChange={(e) => {setSearch(e.target.value)}} />
                <ContainerCardFood>
                    {
                       arrayFood.map(food => {
                        return <div>{food.descricao}</div>
                       })
                    }
                </ContainerCardFood>
            </SearchFood>
        </Container>
    )
}