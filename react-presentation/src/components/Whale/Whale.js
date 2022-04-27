import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Beluga from './Beluga';
import Blue from './Blue';

export default function Whale() {
    return (
      <>
        <h2>Whale</h2>
        <Routes>
          <Route path="beluga" element={<Beluga/>}/>
          <Route path="blue" element={<Blue/>}/>
        </Routes>
      </>
    );
  }