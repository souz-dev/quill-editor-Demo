import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function App() {
  const [body, setBody] = useState("");

  const handleBody = (e: any) => {
    console.log(e);
    setBody(e);
  };
  return (
    <div className="App">
      <h1>Quill Edit</h1>
      <ReactQuill
        placeholder="Write ..."
        modules={App.modules}
        formats={App.formats}
        value={body}
        onChange={handleBody}
      />
    </div>
  );
}

App.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "order" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clear"],
    ["code-block"],
  ],
};

App.formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "size",
  "color",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "align",
];
export default App;
