import { FormGroup } from "@mui/material";
import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/IngredientsCreateEditForm.module.css";
import useAlert from "../../hooks/useAlert";

function IngredientsEditForm(props) {
  const { id, ingredient, method, setShowEditForm, setIngredients } = props;

  const [formIngredient, setFormIngredient] = useState(ingredient);
  const [formMethod, setFormMethod] = useState(method);
  const { setAlert } = useAlert();

  const handleIngredient = (event) => {
    setFormIngredient(event.target.value);
  };

  const handleMethod = (event) => {
    setFormMethod(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/ingredients/${id}/`, {
        ingredient: formIngredient.trim(),
        method: formMethod.trim(),
      });
      setIngredients((prevIngredients) => ({
        ...prevIngredients,
        results: prevIngredients.results.map((ingredients) => {
          return ingredients.id === id
            ? {
                ...ingredients,
                ingredient: formIngredient.trim(),
                method: formMethod.trim(),
                updated_at: "now",
              }
            : ingredients;
        }),
      }));
      setShowEditForm(false);
      setAlert("Recipe edited!", "Let's cook!");
    } catch (err) {
      // console.log(err);
      setAlert(err.message, "error");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          className={styles.Form}
          as="textarea"
          name="ingredient"
          value={formIngredient}
          onChange={handleIngredient}
          rows={4}
        />
      </Form.Group>
      <FormGroup>
        <Form.Control
          className={styles.Form}
          as="textarea"
          name="method"
          value={formMethod}
          onChange={handleMethod}
          rows={4}
        />
      </FormGroup>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={styles.Button}
          disabled={!formIngredient.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default IngredientsEditForm;
