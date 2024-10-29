import React from 'react';
import PropTypes from 'prop-types';
import NoteDetailAction from './NoteDetailAction';

function NoteDetailContent({
  id,
  title,
  createdAt,
  body,
  archived,
  onArchive,
  onUnArchive,
  onDelete,
}) {
  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{createdAt}</p>
      <div className="detail-page__body">{body}</div>
      <NoteDetailAction
        id={id}
        archived={archived}
        onArchive={onArchive}
        onUnArchive={onUnArchive}
        onDelete={onDelete}
      />
    </section>
  );
}

NoteDetailContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetailContent;
