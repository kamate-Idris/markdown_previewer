import { useState } from 'react'

import './App.css'
import EditorBody from './components/Editor/EditorBody'
import PreviewerBody from './components/Previewer/PreviewerBody'
import "./styles.css"

function App() {


  return (
    <>
      <main className="main">
        <div className="main-container">
          <EditorBody />
          <PreviewerBody />
        </div>
      </main>
    </>
  )
}

export default App
