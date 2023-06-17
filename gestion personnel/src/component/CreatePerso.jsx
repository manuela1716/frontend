import { useState } from 'react';
import axios from 'axios';

const CreatePerso = () => {

    const [nomPerso, setnom] = useState('');
    const [prenomPerso, setprenom] = useState('');
    const [emailPerso, setemail] = useState('');
    const [sexePerso, setsexe] = useState('');
    const [telPerso, settel] = useState('');
    const [diplomePerso, setDiplome] = useState('');
    const [imagePerso, setimage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newPerso = {
        nomPerso,
        prenomPerso,
        emailPerso,
        sexePerso,
        telPerso,
        diplomePerso,
        imagePerso
      };
  
      axios
        .post('http://localhost:8000/admin', newPerso)
        .then((res) => {
          console.log('Personnel crée');
        })
        .catch((err) => {
          console.error(err);
        });
    };
    return (
        <main className='container mt-5'>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-2">

              </div>
              <div className="col-lg-8">
                <h2 className='text-center fw-5 fs-3 mb-3'>Créer Un Personnel</h2>
                <form action="/CreatePerso" method="post">
                  <div className="mb-3">
                    <label for="nom" className="form-label">Entrer Votre Nom:</label>
                    <input type="text" className="form-control" id="nom" name='nom' value={nomPerso}
            onChange={(e) => setnom(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <label for="prenom" className="form-label">Entrer Votre Prénom:</label>
                    <input type="text" className="form-control" id="prenom" name='prenom'value={prenomPerso}
            onChange={(e) => setprenom(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">Entrer Votre Email:</label>
                    <input type="text" className="form-control" id="email" name='email'value={emailPerso}
            onChange={(e) => setemail(e.target.value)}/>
                  </div>
                  <div className="mb-3 d-flex">
                    <div className="form-check me-3">
                      <input className="form-check-input" type="radio" name="sexe" id="feminin" value={'feminin'}
            onChange={(e) => setsexe(e.target.value)}/>
                      <label className="form-check-label" for="feminin">
                        Féminin
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="sexe" id="masculin" value={'masculin'}
            onChange={(e) => setsexe(e.target.value)}/>
                      <label className="form-check-label" for="masculin">
                        Masculin
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="tel" className="form-label">Entrer Votre Téléphone:</label>
                    <input type="tel" className="form-control" id="tel" name='tel' value={telPerso}
            onChange={(e) => settel(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <label for="diplome" className="form-label">Entrer Votre Diplome:</label>
                    <input type="text" className="form-control" id="diplome" name='diplome' value={diplomePerso}
            onChange={(e) => setDiplome(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <label for="file" className="form-label">Choisir Un Fichier Image</label>
                    <input className="form-control" type="file" id="file" name='file' value={imagePerso}
            onChange={(e) => setimage(e.target.files[0])} 
            accept=".jpg,.png,.apng,.avif,.gif,.jpeg, .jfif, .pjpeg, .pjp,.svg,.webp"/>
                  </div>
                  <button type="submit" className='btn btn-primary w-50'>Créer</button>
                </form>
              </div>
            </div>

            
        </main>
    );
};

export default CreatePerso;
