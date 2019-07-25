import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });

        console.log(this.state.label);
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label)
    };

    render() {
        return (
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control  mt-3 mr-1"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done"/>
                <button
                    className="btn btn-outline-secondary mt-3 text-nowrap">
                    Add Item
                </button>
            </form>
        );
    }
}