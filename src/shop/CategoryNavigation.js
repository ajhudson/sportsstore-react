import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalButton from './ModalButton';

export class CategoryNavigation extends Component {

    render() {
        return <React.Fragment>
            <Link className='btn btn-secondary btn-block' to={ this.props.baseUrl }>All</Link>

            {
                this.props.categories && this.props.categories.map(c => 
                    <Link className='btn btn-secondary btn-block' key={ c } to={ `${this.props.baseUrl}/${c.toLowerCase()}` }>
                        { c }
                    </Link>
                )
            }

            <ModalButton />
        </React.Fragment>
    }
}