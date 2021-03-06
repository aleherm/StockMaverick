import React, {useContext} from 'react';
import {Grid} from "semantic-ui-react";

import Backdrop from "../../Components/Backdrop/Backdrop";
import Header from "../../Components/Header/Header";
import style from "../Containers.module.css";
import Navigation from "../../Components/Navigation/Navigation";
import Showcase from "../Showcase";
import Footer from "../../Components/Footer/Footer.";
import TransactionCard from "../../Components/Cards/TransactionsCard";
import GraphCard from "../../Components/Cards/GraphCard";
import StockCard from "../../Components/Cards/StockCard";
import RootStoreContext from "../../Stores/rootStore";
import {Redirect} from "react-router";


const Portfolio = () => {
    const rootStore = useContext(RootStoreContext);
    const {user} = rootStore.userStore;

    const isLoggedOut = (!user) ? <Redirect to="/" />: null;

    return(
        <>
            {isLoggedOut}
            <Backdrop/>
            <Header />
            <Grid className={style.showcaseContainer}>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Navigation/>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Showcase
                            GraphCard={GraphCard}
                            TransactionCard={TransactionCard}
                            StockCard={StockCard}
                            WalletCard={null}
                            BalanceCard={null}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer/>
        </>
    );
};

export default Portfolio;