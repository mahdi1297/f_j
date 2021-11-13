import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { FormGroup, Label } from "reactstrap";

const TextEditor = ({ title, isRequired, setBodyValue, initialValue }) => {
  const [editorValue, setEditorValue] = useState("");

  useEffect(() => {
    setBodyValue(editorValue);
  }, [editorValue, setBodyValue]);

  const editorRef = useRef(null);
  const editorOnchangeHandler = (e) => {
    setEditorValue(e.target.getContent());
  };

  return (
    <FormGroup>
      <Label className={`col-form-label`}>
        {title} {isRequired && <span className="text-danger">(*)</span>}
      </Label>
      <Editor
        apiKey="trtvhes2el6zikxr7d8cz07gx3y2q77cgw9dcmqsvv0ktlqu"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={
          initialValue ? initialValue : "<p>لطفا متن  خود را وارد کنید</p>"
        }
        onChange={(e) => editorOnchangeHandler(e)}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style: "body {  text-align:right;direction:rtl }",
        }}
      />
    </FormGroup>
  );
};

export default TextEditor;
