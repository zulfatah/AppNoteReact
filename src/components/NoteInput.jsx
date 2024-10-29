import React from 'react';
import PropTypes from 'prop-types';
import NoteInputAction from './NoteInputAction';

class NoteInput extends React.Component {
  state = {
    title: '',
    body: '',
  };

  onTitleChangeEventHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      charLimit: prevState.charLimit - 1,
      title: event.target.value,
    }));
  };

  onBodyInputEventHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      body: event.target.innerHTML,
    }));
  };

  onSubmitEventHandler = () => {
    this.props.addNote(this.state);
  };

  render() {
    return (
      <>
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            type="text"
            placeholder="Catatan rahasia"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <div
            className="add-new-page__input__body"
            contentEditable
            data-placeholder="Sebenarnya saya adalah ...."
            onInput={this.onBodyInputEventHandler}
          />
        </div>
        <NoteInputAction onSubmit={this.onSubmitEventHandler} />
      </>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
