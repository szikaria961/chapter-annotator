import React from 'https://cdn.skypack.dev/react';

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
    <div>
      <input
        onChange={handleChangeBookName}
        value={bookName}
        type='text'
      />
      <br />
      <input
        onChange={handleChangeChapterName}
        value={chapterName}
        type='text'
      />
      <br />
      <input
        onChange={handleChangeAuthorName}
        value={authorName}
        type='text'
      />
      <br />
      <textarea
        onChange={handleChangeKeyIdeas}
        value={keyIdeas}
      >
      </textarea>
      <br />
      <textarea
        onChange={handleChangeMainTakeaway}
        value={mainTakeaway}
      >
      </textarea>
      <br />
      <textarea
        onChange={handleChangeQuestions}
        value={questions}
      >
      </textarea>
    </div>
  );
}

export default ChapterInputs;

