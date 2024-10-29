import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import NoteBody from '../components/NoteBody';
import NoteSearch from '../components/NoteSearch';
import { getArchivedNotes } from '../utils/local-data';

function ArchivesPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <ArchivesPage onSearch={changeSearchParams} activeKeyword={keyword} />;
}

class ArchivesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: props.activeKeyword ? getArchivedNotes()
        .filter((note) => note.title.toLowerCase()
          .includes(props.activeKeyword.toLowerCase())) : getArchivedNotes(),
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState(() => ({
      notes: getArchivedNotes()
        .filter((note) => note.title.toLowerCase()
          .includes(keyword.toLowerCase())),
    }));

    this.props.onSearch(keyword);
  }

  render() {
    return (
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <NoteSearch defaultKeyword={this.props.activeKeyword} search={this.onSearch} />
        <NoteBody notes={this.state.notes} />
      </section>
    );
  }
}

ArchivesPage.propTypes = {
  onSearch: PropTypes.func.isRequired,
  activeKeyword: PropTypes.string,
};

export default ArchivesPageWrapper;
