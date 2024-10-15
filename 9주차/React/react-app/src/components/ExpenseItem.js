import React, { Component } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

export default class ExpenseItem extends Component {
  render() {
    return (
      <li>
        <div>
          <span></span>
          <span>원</span>
        </div>
        <div>
          <button>
            <MdEdit />
          </button>
          <button>
            <MdDelete />
          </button>
        </div>
      </li>
    );
  }
}
