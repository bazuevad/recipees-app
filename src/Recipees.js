import React from 'react';
import Image from'react';
import style from './recipe.module.css';


const Recipe = ({title,time, image,ingredients,url}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            
            <o1>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </o1>
            <img className = {style.img} src={image} alt = ""/>
            <a href={url}> Read full recipee here </a>
        </div>
    );
}

export default Recipe;
