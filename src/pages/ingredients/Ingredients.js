import { useEffect, useState, Fragment } from "react";
import { Media } from "react-bootstrap";
import { MoreDropdown } from "../../components/MoreDropdown";
import styles from "../../styles/Ingredients.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import IngredientsEditForm from "./IngredientsEditForm";
import IngredientsCreateForm from "./IngredientsCreateForm";
import useAlert from "../../hooks/useAlert";

const Ingredients = (props) => {
  const { postId, owner } = props;
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosRes.get(`/ingredients`);

      if (response.data.results.length) {
        setIngredients(response.data.results.filter(
          ingredient => ingredient.post === postId)
        );
      }
    }

    fetchData()
  }, [postId, setIngredients])
 
  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const { setAlert } = useAlert();

  const handleDelete = async (ingredientId) => {
    try {
      await axiosRes.delete(`/ingredients/${ingredientId}/`);
      setIngredients((prevIngredients) => prevIngredients.filter(i => i.id !== ingredientId));
      setAlert("Recipe deleted!", "Let's upload a new one!");
    } catch (err) {
      setAlert(err.message, "error");
    }
  };

  return (
    <>
      {ingredients.map(ingredient => (
        <Fragment key={ingredient.id}>
          <hr />
          <Media>
            <Media.Body className="align-self-center ml-2">
            {is_owner && showEditForm ? (
              <IngredientsEditForm
                ingredient={ingredient}
                setIngredients={setIngredients}
                setShowEditForm={setShowEditForm}
              />
            ) : (
              <>
                <div className={styles.IngredientsDiv}>
                  <h5 className={styles.IngredientsTitle}>
                    Ingredients
                  </h5>
                  <p className={styles.CssFix}>{ingredient.recipe}</p>
                </div>
                <div className={styles.IngredientsDiv}>
                  <h5 className={styles.IngredientsTitle}>
                    Method
                  </h5>
                  <p className={styles.CssFix}>{ingredient.method}</p>
                </div>
              </>
            )}
            </Media.Body>
            {is_owner && !showEditForm && (
              <MoreDropdown
                handleEdit={() => setShowEditForm(true)}
                handleDelete={() => handleDelete(ingredient.id)}
              />
            )}
          </Media>
        </Fragment>
        
      ))}
      {is_owner && (
        <IngredientsCreateForm post={postId} owner={owner} setIngredients={setIngredients} />
      )} 
    </>
  );
};

export default Ingredients;
