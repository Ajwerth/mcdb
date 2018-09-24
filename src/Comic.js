import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comic extends Component {
    static propTypes = {
        comic: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }),
    }
    
    render() {
        return (
            <div>
                <h3>{this.props.comic.title}</h3>
            </div>
        )
    }
}