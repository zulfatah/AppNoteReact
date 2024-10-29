import React from 'react';
import PropTypes from 'prop-types';

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

   
    const { defaultKeyword } = props;
    this.state = {
      keyword: defaultKeyword || '', 
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(event) {
    const { value } = event.target;

    this.setState(() => ({
      keyword: value,
    }));

    this.props.search(value);
  }

  render() {
    return (
      <section className="search-bar">
        <input type="text" placeholder="Cari berdasarkan judul ..." value={this.state.keyword} onChange={this.onKeywordChangeHandler} />
      </section>
    );
  }
}

NoteSearch.propTypes = {
  defaultKeyword: PropTypes.string, 
  search: PropTypes.func.isRequired,
};

export default NoteSearch;
