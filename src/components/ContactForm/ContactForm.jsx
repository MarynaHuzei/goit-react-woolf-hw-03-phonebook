import React, { Component } from 'react';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name' && /\d/.test(value)) {
      alert(
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      );
      return;
    }
    if (name === 'number' && !/^[\d\s()+-]*$/.test(value)) {
      alert(
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      );
      return;
    }
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <label htmlFor="number">Phone Number:</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
