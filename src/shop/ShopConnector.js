import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadData } from '../data/ActionCreators';
import { DataTypes } from '../data/Types';
import { Shop } from '../shop/Shop';

const mapStateToProps = (dataStore) => ({
    ...dataStore
});

const mapDispatchToProps = {
    loadData
};

const filterProducts = (products = [], category) => {
    const productsToReturn = (!category || category === 'All') ? products : products.filter(p => p.category.toLowerCase() === category.toLowerCase());

    return productsToReturn;
};

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps) (
    class extends Component {
        render() {
            return <Switch>
            <Route path="/shop/products/:category?"
                    render={ (routeProps) => 
                        <Shop { ...this.props } { ...routeProps } 
                            products={ filterProducts(this.props.products, 
                                routeProps.match.params.category) } />} />                        
                <Redirect to="/shop/products" />
            </Switch>
        }

        componentDidMount() {
            this.props.loadData(DataTypes.CATEGORIES);
            this.props.loadData(DataTypes.PRODUCTS);
        }
    }
);