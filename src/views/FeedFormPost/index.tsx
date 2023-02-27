import { FC, memo } from "react";
import NavBar from "../../componets/NavBar";
import FeedForm from "../../componets/FeedForm";



const FeedFormPost: FC = () => {


    return (


        <>
            <NavBar />
            <FeedForm />

        </>
    )
}


export default memo(FeedFormPost)


