import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function NoteHeader() {
  return (
    <header>
      <h1><Link to="/">Aplikasi Catatan</Link></h1>
      <Navigation />
    </header>
  );
}

export default NoteHeader;
