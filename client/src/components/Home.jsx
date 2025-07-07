import React from 'react';
import { InputForm } from './inputForm';

export default function Home() {
  return (
    <>
      <h1>
        URL Shortener
      </h1>
      <div className="card">
        <InputForm />
      </div>
      <p className="helper-text" style={{ textAlign: 'center', margin: '20px 0 0 0' }}>
          Made by Me (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ayushtripathi1025/"
          >
            Ayush Tripathi
          </a>
          )
      </p>
    </>
  );
}
