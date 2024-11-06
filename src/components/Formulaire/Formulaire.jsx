import React from 'react'
import{Section} from '../index'
import './Formulaire.css'

const Formulaire = () => {
  return (
    <>
     <div class="formulaire">

        
<form   >
    <h2>
        Contactez-nous !
    </h2>
    <div class="col">
        <div class="col1">
            <label for="nom" >Nom:</label><br/>
            <input type="text"/><br/>
            <label for="sujet" >Sujet:</label><br/>
            <input type="text"/><br/>
        </div>
        <div class="col2">
            <label for="prenom">Prénom:</label><br/>
        <input type="text"/><br/>
        <label for="E-mail">E-mail:</label><br/>
        <input type="email"/><br/>

        </div>
    </div>
    <br/>

    <div class="message">
        <label for="Message">Message:</label><br/>
    <textarea name="Message" id="" cols="30" rows="10"></textarea>
    
    <button type="submit"className='bg-primary'>Envoyer le message</button>
</div>

</form>

</div>  
    </>
  )
}

export default Formulaire