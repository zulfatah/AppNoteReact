import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePageWrapper from '../pages/HomePage';
import NoteHeader from './NoteHeader';
import AddNewPage from '../pages/AddNewPage';
import DetailPageWrapper from '../pages/DetailPage';
import NotFoundPage from '../pages/NotFoundPage';
import ArchivesPage from '../pages/ArchivesPage';

function NoteApp() {
  return (
    <div className="app-container">
      <NoteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/notes/new" element={<AddNewPage />} />
          <Route path="/notes/:id" element={<DetailPageWrapper />} />
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default NoteApp;
