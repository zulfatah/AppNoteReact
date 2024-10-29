import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import HomePageAction from '../components/HomePageAction';
import NoteBody from '../components/NoteBody';
import NoteSearch from '../components/NoteSearch';
import { getActiveNotes } from '../utils/local-data';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage onSearch={changeSearchParams} activeKeyword={keyword} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: props.activeKeyword ? getActiveNotes()
        .filter((note) => note.title.toLowerCase()
          .includes(props.activeKeyword.toLowerCase()))
        : getActiveNotes(),
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState(() => ({
      notes: getActiveNotes()
        .filter((note) => note.title.toLowerCase()
          .includes(keyword.toLowerCase())),
    }));

    this.props.onSearch(keyword);
  }

  render() {
    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <NoteSearch defaultKeyword={this.props.activeKeyword} search={this.onSearch} />
        <NoteBody
          notes={this.state.notes}
        />
        <HomePageAction />
      </section>
    );
  }
}

HomePage.propTypes = {
  onSearch: PropTypes.func.isRequired,
  activeKeyword: PropTypes.string,
};

export default HomePageWrapper;
