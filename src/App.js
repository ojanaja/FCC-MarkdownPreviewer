import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`\`\`
  // This is a code block
  const hello = 'Hello World';
  alert(hello);
  \`\`\`
  {
    "firstName": "John",
    "LastName": "Smith",
    "age": 16
  }
  1. First item
  2. Second item
  3. Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
`);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App">
      <textarea
        id="editor"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      />
    </div>
  );
}

export default App;
