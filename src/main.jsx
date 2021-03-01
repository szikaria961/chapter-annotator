import React, { useState } from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import ChapterInputs from './components/chapter-inputs';
import CopyToClipboard from 'react-copy-to-clipboard';
import './index.css';

const App = () => {
  const [bookName, setBookName] = useState("");
  const [chapterName, setChapterName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [keyIdeas, setKeyIdeas] = useState("");
  const [mainTakeaway, setMainTakeaway] = useState("");
  const [questions, setQuestions] = useState("");

  const handleChangeBookName = event => {
    const { value } = event.target;

    setBookName(value);
  }

  const handleChangeChapterName = event => {
    const { value } = event.target;

    setChapterName(value);
  }

  const handleChangeAuthorName = event => {
    const { value } = event.target;

    setAuthorName(value);
  }

  const handleChangeKeyIdeas = event => {
    const { value } = event.target;

    setKeyIdeas(value);
  }

  const handleChangeMainTakeaway = event => {
    const { value } = event.target;

    setMainTakeaway(value);
  }

  const handleChangeQuestions = event => {
    const { value } = event.target;

    setQuestions(value);
  }

  const getChapterOutputs = () => {
    return `${bookName}\n${authorName}\n${chapterName}\n${keyIdeas}\n${mainTakeaway}\n${questions}\n`
  }

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-content">
          <h1 className="header-title">Chapter Annotator</h1>
          <ChapterInputs
            authorName={authorName}
            bookName={bookName}
            chapterName={chapterName}
            handleChangeAuthorName={handleChangeAuthorName}
            handleChangeBookName={handleChangeBookName}
            handleChangeChapterName={handleChangeChapterName}
            handleChangeKeyIdeas={handleChangeKeyIdeas}
            handleChangeMainTakeaway={handleChangeMainTakeaway}
            handleChangeQuestions={handleChangeQuestions}
            keyIdeas={keyIdeas}
            mainTakeaway={mainTakeaway}
            questions={questions}
          />
          <div className="chapter-outputs">
            <div className="book-name">{bookName}</div>
            <div className="author-name">{authorName}</div>
            <div className="chapter-name">{chapterName}</div>
            <div className="key-ideas">{keyIdeas}</div>
            <div className="main-takeaway">{mainTakeaway}</div>
            <div className="questions">{questions}</div>
          </div>
          <CopyToClipboard
            text={getChapterOutputs()}
          >
            <button>Copy</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
