import React from 'react';
import PropTypes from 'prop-types';
import NoteList from './NoteList';

function NoteBody({
  notes,
}) {
  return (
    <NoteList notes={notes} />
  );
}

NoteBody.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteBody;
