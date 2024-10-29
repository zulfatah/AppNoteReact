import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { BiCheck } from 'react-icons/bi';

function NoteInputAction({ onSubmit }) {
  const navigate = useNavigate();

  function onClickHandler() {
    onSubmit();
    navigate('/');
  }

  return (
    <div className="add-new-page__action">
      <button onClick={onClickHandler} className="action" type="button" title="Simpan"><BiCheck /></button>
    </div>
  );
}

NoteInputAction.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NoteInputAction;
