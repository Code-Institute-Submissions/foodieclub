import { useState } from "react";
import { Media } from "react-bootstrap";
import { MoreDropdown } from "../../components/MoreDropdown";
import styles from "../../styles/Ingredients.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import IngredientsEditForm from "./IngredientsEditForm";
// import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
// import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import useAlert from "../../hooks/useAlert";

const Ingredients = (props) => {
  const { profile_id, owner, ingredient, method, id, setIngredients } = props;

  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const { setAlert } = useAlert();

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/ingredients/${id}/`);
      setIngredients((prevIngredients) => ({
        ...prevIngredients,
        results: prevIngredients.results.filter((ingredients) => ingredients.id !== id),
      }));
      setAlert("Recipe deleted!", "Let's upload a new one!");
    } catch (err) {
      setAlert(err.message, "error");
    }
  };

  return (
    <>
      <hr />
      <Media>
        <Media.Body className="align-self-center ml-2">
          {is_owner && showEditForm ? (
            <IngredientsEditForm
              id={id}
              profile_id={profile_id}
              ingredient={ingredient}
              method={method}
              setIngredients={setIngredients}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <>
              <div className={styles.IngredientsDiv}>
                <h5 className={styles.IngredientsTitle}>
                  {/* <FormatListBulletedOutlinedIcon /> */} 
                  Ingredients
                </h5>
                <p className={styles.CssFix}>{ingredient}</p>
              </div>
              <div className={styles.IngredientsDiv}>
                <h5 className={styles.IngredientsTitle}>
                  {/* <MenuBookOutlinedIcon /> /> */}
                  Method
                </h5>
                <p className={styles.CssFix}>{method}</p>
              </div>
            </>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default Ingredients;
