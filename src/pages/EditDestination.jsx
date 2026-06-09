import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function EditDestination() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    getDestination();
  }, []);

  async function getDestination() {
    const response = await api.get(`/destinations/${id}`);
    setFormData(response.data);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.put(
      `/destinations/${id}`,
      formData
    );

    navigate("/destinations");
  }

  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="country"
        value={formData.country}
        onChange={handleChange}
      />

      <input
        name="image"
        value={formData.image}
        onChange={handleChange}
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <button className='submit-btn'>Update Destination</button>
    </form>
    </div>
  );
}

export default EditDestination;