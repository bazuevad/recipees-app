import React from 'react';
import Image from'react';
import style from './recipe.module.css';


const Recipe = ({title,time, image,ingredients,url}) => {
    return(
        <div className={style.recipe}>
            <a href={url} className = {style.title}> {title} </a>
            <img className = {style.img} src={image} alt = ""/>
            
            <o1 className = {style.ingr}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </o1>
            
            
        </div>
    );
}

export default Recipe;
