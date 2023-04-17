import React from 'react';
import styles from './Description.module.css';

const RecipeAuthor = () => {
   let authorLink = "https://www.saltandlavender.com/";
   let authorPhoto = "data:image/jpeg;base64,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";
   let authorName = "Natasha Bull";

   return (
      <div className = {styles.recipeAuthorBlock}>
         <img src={authorPhoto} alt = "Natasha Bull in her kitchen" className={styles.imageUpdates} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Salt and Lavender</a> 
         </div>
      </div>
   );
}

class RecipeDescription extends React.Component {

   render() {
      return (
         <div> 
            <div>
               <h1>Fancy Pasta</h1>
               <p>This recipe is full  of yummy farm-fresh ingredients. So simple you could make it for any weeknight</p>
            </div>
            <RecipeAuthor />
         </div>
      );
   }
}

export default RecipeDescription;