import { useState } from "react";
import { submitBlogs } from "../../api/internal";
import { useSelector } from "react-redux";
import styles from "./SubmitBlog.module.css";
import TextInput from "../../components/TextInput/TextInput";
import { useNavigate } from "react-router-dom";

function SubmitBlog() {
  const navigate = useNavigate();

  const [title, setTitle] = useState([""]);
  const [content, setContent] = useState([""]);
  const [photo, setPhoto] = useState([""]);

  const author = useSelector((state) => state.user._id);

  const getPhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
  };

  const submitHandler = async () => {
    const data = {
      author: author,
      title: title,
      content: content,
      photo: photo,
    };

    const response = await submitBlogs(data);

    if (response.status === 201) {
      navigate("/");
    }
  };
  return (
    <div>
      <div className={styles.header}>Create a Blog</div>
      <TextInput
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "60%" }}
      />
      <textarea
        className={styles.content}
        placeholder="Your content goes here"
        maxLength={400}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className={styles.photoPrompt}>
        <p>Choose a Photo</p>
        <input
          type="file"
          name="photo"
          id="photo"
          accept="image/jpg, image/jpeg, image/png"
          onChange={getPhoto}
        />
        {photo !== "" ? <img src={photo} width={150} height={150} /> : ""}
      </div>
      <button
        className={styles.submit}
        onClick={submitHandler}
        disabled={title === "" || content === "" || photo === ""}
      >
        Submit Blog
      </button>
    </div>
  );
}

export default SubmitBlog;
