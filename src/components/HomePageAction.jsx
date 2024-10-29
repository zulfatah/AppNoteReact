import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';

function HomePageAction() {
  const navigate = useNavigate();

  function onClickHandler() {
    navigate('/notes/new');
  }

  return (
    <div className="homepage__action">
      <button onClick={onClickHandler} className="action" type="button" title="Tambah"><BiPlus /></button>
    </div>
  );
}

export default HomePageAction;
