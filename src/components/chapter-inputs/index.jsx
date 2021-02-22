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
      <div className="book-name-title-label label">Title</div>
      <input
        className="book-name-title"
        onChange={handleChangeBookName}
        type="text"
        value={bookName}
      />
      <div className="author-name-label label">Authors Name</div>
      <input
        className="author-name"
        onChange={handleChangeAuthorName}
        value={authorName}
        type="text"
      />
      <div className="chapter-name-label label">Chapter Name</div>
      <input
        className="chapter-name"
        onChange={handleChangeChapterName}
        value={chapterName}
        type="text"
      />
      <div className="key-ideas-label label">What are key the ideas?</div>
      <textarea
        className="key-ideas"
        onChange={handleChangeKeyIdeas}
        value={keyIdeas}
        rows="5"
      >
      </textarea>
      <div className="main-takeaway-label label">What is the main takeaway?</div>
      <textarea
        className="main-takeaway"
        onChange={handleChangeMainTakeaway}
        value={mainTakeaway}
        rows="5"
      >
      </textarea>
      <div className="questions-label label">Questions?</div>
      <textarea
        className="questions"
        onChange={handleChangeQuestions}
        value={questions}
        rows="5"
      >
      </textarea>
    </div>
  );
}

export default ChapterInputs;

