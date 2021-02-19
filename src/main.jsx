import React, { useState } from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import ChapterInputs from './components/chapter-inputs'

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

  return (
    <div>
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
      <div>
        Title: {bookName} <br />
        Chapter Name: {chapterName} <br />
        Author's Name: {authorName} <br />
        What are the key ideas? <br />
          {keyIdeas} <br />
        Main Takeaways: <br />
          {mainTakeaway} <br />
        Questions: <br />
          {questions} <br />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
