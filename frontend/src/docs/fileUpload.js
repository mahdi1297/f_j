import axios from "axios";
import React, { useState } from "react";
// import HeroHome from "./components/hero";
import { Button, Container, Label } from "reactstrap";

const Home = () => {
  const [uploadPercent, setUploadPercent] = useState(0);
  const [filename, setFilename] = useState("Choose file");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState("");

  const onchange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    var form_data = new FormData();
    form_data.append("file", file);

    try {
      const request = await axios.post(
        "http://localhost:5000/upload",
        form_data,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            setUploadPercent(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );
          },
        }
      );

      const { fileName, filePath } = request.data;

      setAddress({ fileName, filePath });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <form onSubmit={onSubmitForm}>
          <input type="file" id="file-uploader" onChange={onchange} />
          <Label htmlFor="file-uploader">{filename}</Label>
          {uploadPercent}%<Button type="submit">Upload</Button>
        </form>
      </Container>
      {address && <img src={`/uploads/${address.fileName}`} alt="x" />}
      {/* <HeroHome /> */}
    </>
  );
};

export default Home;