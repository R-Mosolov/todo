import React, { Component } from 'react';
import $ from 'jquery';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        if (this.state.label.length !== 0) {
            e.preventDefault();
            this.props.onItemAdded(this.state.label);
            this.setState({
                label: ''
            });
            $('.hidden').hide();
        } else {
            e.preventDefault();
            $('.hidden').show();
        }
    };

    render() {
        return (
            <div className="item-add-form">
                <form className="d-flex"
                      onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control mt-3 mr-1"
                        onChange={this.onLabelChange}
                        placeholder="What needs to be done"
                        value={this.state.label}/>
                    <button
                        className="btn btn-outline-secondary mt-3 text-nowrap">
                        Add Item
                    </button>
                </form>
                <div className="hidden flex-grow-1 mt-3 w-100 bg-warning rounded">
                    <p className="p-2 text-light">Please, write a new task</p>
                </div>
            </div>
        );
    }
}