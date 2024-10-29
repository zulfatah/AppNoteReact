import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import NoteDetailContent from '../components/NoteDetailContent';
import {
  archiveNote, unarchiveNote, deleteNote, getNote,
} from '../utils/local-data';
import { showFormattedDate } from '../utils/index';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function onArchiveHandler(id) {
    archiveNote(id);
    navigate('/');
  }

  function onDeleteHandler(id) {
    deleteNote(id);
    navigate('/');
  }

  return <DetailPage id={id} onArchive={onArchiveHandler} onDelete={onDeleteHandler} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    if (this.state.note === undefined) {
      return <NotFoundPage />;
    }

    return (
      <NoteDetailContent
        {...this.state.note}
        createdAt={showFormattedDate(this.state.note.createdAt)}
        onArchive={archiveNote}
        onUnArchive={unarchiveNote}
        onDelete={deleteNote}
      />
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
