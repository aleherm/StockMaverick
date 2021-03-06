import React, {useContext, useEffect} from 'react';
import {Chart} from "react-google-charts";
import {observer} from "mobx-react-lite";

import style from './Cards.module.css';
import {Card} from "semantic-ui-react";
import RootStoreContext from "../../Stores/rootStore";

const GraphCard: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const {loadStocks, stocks} = rootStore.stockStore;

    const graphData = [['Stocks', 'Stock Per Symbol']];

    stocks.forEach(stock => {
        const newStock: any = [stock.companyName, stock.amount];
        graphData.push(newStock);
    });

    useEffect(() => {
            loadStocks();
        },
        [rootStore.stockStore]);

    return (
        <Card raised className={style.graphCard}>
            <Chart
                className={style.chart}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={graphData}
                options={{
                    title: 'Current Stock Porfolio',
                    colors: [ '#8A0F0F', '#D4D4D4', '#CA3939', '#333', '#B81414', '#545454', '#9f9f9f', '#B30024', '#B30024']
                    // Just add this option
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        </Card>
    );
};

export default observer(GraphCard);