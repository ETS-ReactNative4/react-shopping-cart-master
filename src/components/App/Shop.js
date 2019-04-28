import React, { Component } from "react";

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';

class Shop extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <GithubCorner />
                    <main>
                        <Filter />
                        <Shelf />
                    </main>
                    <FloatCart />
                </React.Fragment>
            </div>
        );
    }
}

export default Shop;