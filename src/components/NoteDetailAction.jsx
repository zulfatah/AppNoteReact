import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { BiArchiveIn, BiArchiveOut, BiTrash } from 'react-icons/bi';

function NoteDetailAction({
  id, archived, onArchive, onUnArchive, onDelete,
}) {
  const navigate = useNavigate();

  function onArchiveHandler() {
    onArchive(id);
    navigate('/');
  }

  function onUnArchiveHandler() {
    onUnArchive(id);
    navigate('/');
  }

  function onDeleteHandler() {
    onDelete(id);
    navigate('/');
  }

  return (
    <div className="detail-page__action">
      {
        archived ? (<button onClick={onUnArchiveHandler} className="action" type="button" title="Aktifkan"><BiArchiveOut /></button>) : (<button onClick={onArchiveHandler} className="action" type="button" title="Arsipkan"><BiArchiveIn /></button>)
      }
      <button onClick={onDeleteHandler} className="action" type="button" title="Hapus"><BiTrash /></button>
    </div>
  );
}

NoteDetailAction.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetailAction;
