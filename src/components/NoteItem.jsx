import React from 'react';
import PropTypes from 'prop-types';
import NoteItemContent from './NoteItemContent';
import { showFormattedDate } from '../utils/index';

function NoteItem({
  id,
  title,
  createdAt,
  body,
}) {
  return (
    <article className="note-item">
      <NoteItemContent
        id={id}
        title={title}
        createdAt={showFormattedDate(createdAt)}
        body={body}
      />
    </article>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
