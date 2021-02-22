import React from 'https://cdn.skypack.dev/react';
import './index.css';

const ChapterInputs = ({
  authorName,
  bookName,
  chapterName,
  handleChangeAuthorName,
  handleChangeBookName,
  handleChangeChapterName,
  handleChangeKeyIdeas,
  handleChangeMainTakeaway,
  handleChangeQuestions,
  keyIdeas,
  mainTakeaway,
  questions
}) => {
  return (
    <div className="chapter-inputs">
      <div className="book-name-title-label">Title</div>
      <input
        className="book-name-title"
        onChange={handleChangeBookName}
        type="text"
        value={bookName}
      />
      <br />
      <div className="author-name-label">Authors Name</div>
      <input
        className="author-name"
        onChange={handleChangeAuthorName}
        value={authorName}
        type="text"
      />
      <br />
      <div className="chapter-name-label">Chapter Name</div>
      <input
        className="chapter-name"
        onChange={handleChangeChapterName}
        value={chapterName}
        type="text"
      />
      <br />
      <div className="key-ideas-label">What are key the ideas?</div>
      <textarea
        className="key-ideas"
        onChange={handleChangeKeyIdeas}
        value={keyIdeas}
      >
      </textarea>
      <br />
      <div className="main-takeaway-label">What is the main takeaway?</div>
      <textarea
        className="main-takeaway"
        onChange={handleChangeMainTakeaway}
        value={mainTakeaway}
      >
      </textarea>
      <br />
      <div className="questions-label">Questions?</div>
      <textarea
        className="questions"
        onChange={handleChangeQuestions}
        value={questions}
      >
      </textarea>
      <br />
    </div>
  );
}

export default ChapterInputs;

