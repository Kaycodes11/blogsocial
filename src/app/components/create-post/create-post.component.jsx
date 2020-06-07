import React, { useState } from "react";
import { connect } from "react-redux";
import { postCollectionsStart } from "../../../redux/post/post.action";
import "./create-post.styles.scss";
// UI COMPONET : CREATE a form , take the value and submit
const CreatePost = () => {
  const [createBlogPost, setCreateBlogPost] = useState({
    title: "",
    desc: "",
    labels: ["default"],
    mainContent: ""
  });
  const { title, desc, labels, mainContent } = createBlogPost;

  const handleSubmit = event => {
    event.preventDefault();
    postCollectionsStart(title, desc, labels, mainContent);
    // now as it goes to reduce middlware intecepts it and uses it; then if success put succss else failure
  };

  const handleChange = event => {
    const { name, value } = event.target;
    // setCreateBlogPost called & it expects an Object & since I intend to take all from createBlogPost so spread ...createBlogPost with its value that goes to setCreateBlogPost that's avaibale via createBlogPost
    setCreateBlogPost({ ...createBlogPost, [name]: value });
  };
  return (
    <div>
      <form className="form-post" onSubmit={handleSubmit}>
        <input
          className="create title"
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          label="title"
          placeholder="enter title"
          required
        />
        <input
          className="create desc"
          type="text"
          name="desc"
          maxLength="20"
          value={desc}
          onChange={handleChange}
          placeholder="desc should be within 20 words"
          label="Description"
          required
        />
        <input
          className="create labels"
          type="text"
          name="labels"
          value={labels}
          placeholder="optional"
          onChange={handleChange}
          label="labels"
        />
        <textarea
          className="create main"
          name="mainContent"
          value={mainContent}
          onChange={handleChange}
          placeholder="write your post here"
          cols="50"
          rows="4"
          label="Main Content"
        />
        <button className="btn" type="submit">
          SUBMIT POST
        </button>
      </form>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  postCollectionsStart: post => dispatch(postCollectionsStart(post))
});
export default connect(null, mapDispatchToProps)(CreatePost);
