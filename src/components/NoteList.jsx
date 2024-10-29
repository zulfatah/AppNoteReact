import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteListEmpty() {
  return (
    <section className="notes-list-empty">
      <p className="notes-list__empty">Tidak ada catatan</p>
    </section>
  );
}

function NoteList({ notes }) {
  return notes.length > 0
    ? (
      <section className="notes-list">
        {
          notes.map((note) => (
            <NoteItem
              key={note.id}
              {...note}
            />
          ))
        }
      </section>
    )
    : <NoteListEmpty />;
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
