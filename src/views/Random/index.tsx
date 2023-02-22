import { FC, memo } from "react";
import CardRandom from "../../componets/CardRandom";
import NavBar from "../../componets/NavBar";
import NavBarBottom from "../../componets/NavBarBottom";


const Random: FC = () => {

    return (

        <>
            <NavBar />
            <CardRandom />
            <NavBarBottom />

        </>
    )

}

export default memo(Random)