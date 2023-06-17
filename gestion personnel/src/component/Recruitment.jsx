import {BsFilter} from "react-icons/bs"
import {AiFillPrinter} from "react-icons/ai"
import {IoAddCircleOutline} from "react-icons/io5"
import { NavLink } from "react-router-dom";

const Recruitment = () => {
    return (
        <main className="container">
            <div className="row d-flex justify-content-center">
                
                <div className="col-lg-2">
                </div>
                <div className="col-lg-10">
                    
                    <div className="row d-flex">
                        <BsFilter className="me-2"/>Filtre Par :
                        <div class="mb-3 w-25">
                            <label for="prenom" class="form-label">Prénom</label>
                            <input type="text" class="form-control" id="prenom"/>
                        </div>
                        <div class="mb-3 w-25">
                            <label for="poste" class="form-label">Poste</label>
                            <input type="text" class="form-control" id="poste"/>
                        </div>
                        <div class="mb-3 w-25">
                            <label for="diplome" class="form-label">Diplome</label>
                            <input type="text" class="form-control" id="diplome"/>
                        </div>
                        <div class="mb-3 w-25">
                            <button type="submit" class="btn btn-primary me-2">Chercher</button>
                            <button type="submit" class="btn btn-warning"><AiFillPrinter className="me-2" />Imprimer</button>
                        </div>
                        
                    </div>
                    <div className="row bg-warning w-100 my-3">
                        <p className="fs-3 fw-5">Liste du Personnel</p>
                        <NavLink to="/CreatePerso"><IoAddCircleOutline className="me-2 text-dark"/>Ajouter un Personnel</NavLink>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <table>
                            <thead>
                                <tr>
                                    <th>Details</th>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Email</th>
                                    <th>sexe</th>
                                    <th>Téléphone</th>
                                    <th>Poste</th>
                                    <th>Diplôme</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
            {console.log('fait')}
        </main>
    );
};

export default Recruitment;