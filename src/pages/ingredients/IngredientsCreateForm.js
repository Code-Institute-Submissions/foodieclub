import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import styles from "../../styles/IngredientsCreateEditForm.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import useAlert from "../../hooks/useAlert";

function IngredientsCreateForm(props) {
  const { post, setIngredients, owner } = props;
  const [ingredient, setIngredient] = useState("");
  const [method, setMethod] = useState("");
  const { setAlert } = useAlert();

  const handleIngredient = (event) => {
    setIngredient(event.target.value);
  };

  const handleMethod = (event) => {
    setMethod(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/ingredients/", {
        recipe: ingredient,
        method,
        post,
        owner,
      });

      setIngredients((prevIngredients) => [...prevIngredients, data]);

      setAlert("Recipe uploaded!", "Let's cook!");
    } catch (err) {
      // console.log(err);
      setAlert(err.message, "error");
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          className={styles.Form}
          placeholder="Ingredient"
          as="textarea"
          name="ingredient"
          value={ingredient}
          onChange={handleIngredient}
          rows={4}
        />
        <Form.Control
          className={styles.Form}
          placeholder="Method"
          name="method"
          as="textarea"
          value={method}
          onChange={handleMethod}
          rows={4}
        />
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!ingredient.trim()}
        type="submit"
      >
        Add Recipe
      </button>
    </Form>
  );
}

export default IngredientsCreateForm;
