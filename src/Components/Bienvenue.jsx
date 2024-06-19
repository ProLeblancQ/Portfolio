import React from 'react';
import '../Styles/Welcome.css';

function Bienvenue() {
  return (
    <div className='overlay-container-Welcome'>
      <div className='image-container'>
        <div className='Photo'><img src="/Assets/PhotoQLV2.png" alt="MyFace" /></div>
      </div>
      <div className='text-container'>
        <p>
          <h1 className='title'>A Propos de moi ! </h1>
          <p>
           Salut, moi c'est Quentin et bienvenue sur mon portfolio. Ici, vous pouvez trouver comment me contacter,
            des informations sur certains de mes projets, et plus encore.
           <br />
           Je suis actuellement a la recherche d'un apprentissage en developpement web pour obtenir un diplome de niveau Bac +4
            en tant que Concepteur et Developpeur d'Applications. Je suis egalement ouvert a travailler directement sans ce dernier diplome.
           <br />
           Apres des annees dans le domaine culinaire,
            j'ai fait une transition vers le developpement web et mobile 💻.
            J'ai initialement pense que ce changement de carriere etait impossible en raison de mon parcours scolaire, qui etait fortement oriente vers les arts culinaires.
             Cependant, j'ai pu realiser ce reve a l'ecole ForEach Academy.
           <br />
           J'adore les defis, le travail d'equipe, et l'apprentissage continu.
            Mon parcours unique me confere precision et creativite, que j'applique desormais dans ma nouvelle carriere.
           </p>
        </p>
      </div>
    </div>
  );
}

export default Bienvenue;