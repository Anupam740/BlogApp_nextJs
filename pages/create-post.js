import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:3000/api/createpost', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle success, maybe show a success message
        console.log('Post created successfully');
      } else {
        // Handle error, maybe show an error message
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" onChange={handleImageChange} accept="image/*" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
