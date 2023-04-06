import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/IngredientsCreateEditForm.module.css";
import useAlert from "../../hooks/useAlert";

function IngredientsEditForm(props) {
  const { ingredient, setShowEditForm, setIngredients } = props;

  const [formRecipe, setFormRecipe] = useState(ingredient.recipe);
  const [formMethod, setFormMethod] = useState(ingredient.method);
  const { setAlert } = useAlert();

  const handleIngredient = (event) => {
    setFormRecipe(event.target.value);
  };

  const handleMethod = (event) => {
    setFormMethod(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/ingredients/${ingredient.id}/`, {
        recipe: formRecipe.trim(),
        method: formMethod.trim(),
      });

      setIngredients((prevIngredients) => 
        prevIngredients.map((ing) => {
          return ing.id === ingredient.id
            ? {
                ...ing,
                recipe: formRecipe.trim(),
                method: formMethod.trim(),
                updated_at: "now",
              }
            : ing;
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
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          name="ingredient"
          value={formRecipe}
          onChange={handleIngredient}
          rows={4}
        />
      </Form.Group>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          name="method"
          value={formMethod}
          onChange={handleMethod}
          rows={4}
        />
      </Form.Group>
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
          disabled={!formRecipe.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default IngredientsEditForm;
