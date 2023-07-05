import { useState, useEffect } from 'react';

import './description.css';
import noImage from '../assets/img/noimage.png';


const Description = (props) => {
    const {category, name, pCommunity, shortDescription, description} = props.community;
    const [fState, setFState] = useState({});
    const [error, setError] = useState({});

    useEffect(
        () => {
            setFState({
                name,
                category,
                pCommunity,
                shortDescription,
                description
            });
        },
        [props.community]
    );

    const {addCommunityHandler} = props;

    const handleInputHandler = (e) => {
        const { name, value } = e.target;

        setFState({
            ...fState,
            [name]: value
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let error ={};

        if(!fState.name) {
            error.name = "Nombre Vacio";
        } else {
            error.name = ""
        }

        if(!fState.shortDescription) {
            error.sdescription = "Short Description Vacio"
        } else {
            error.sdescription = ""
        }

        if(!error.name && !error.sdescription) {
            addCommunityHandler(fState);
            setError({})
        } else {
            setError(error);
        }
    }


    return (
        <>
            <div className="block2">
                <img className="theImage" src={noImage} alt="" />
                <form onSubmit={submitHandler} noValidate>
                    <div className="form-group row mt-5 mb-5">
                        <label htmlFor="name" className="col-sm-2 col-form-label">name</label>
                        <div className="col-sm-7">
                            <input name="name" type="text" className="form-control" id="name"
                                   placeholder="Name"
                                   value={fState.name}
                                   onChange={handleInputHandler}
                            />
                            { error.name ? <span className="text-danger">{error.name}</span> : "" }
                        </div>
                    </div>

                    <div className="form-group row mb-5">
                        <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                        <div className="col-sm-7">
                            <input name="category" type="text" className="form-control" id="category"
                                   placeholder="category"
                                   value={fState.category}
                                   onChange={handleInputHandler}
                            />
                        </div>
                    </div>

                    <div className="form-group row mb-5">
                        <label htmlFor="pCategory" className="col-sm-2 col-form-label">Parent Community</label>
                        <div className="col-sm-7">
                            <input name="pCommunity" type="text" className="form-control" id="pCommunity"
                                   placeholder="Parent Community"
                                   value={fState.pCommunity}
                                   onChange={handleInputHandler}
                            />
                        </div>
                    </div>

                    <div className="form-group row mb-5">
                        <label htmlFor="sDescription" className="col-sm-2 col-form-label">Short Descripcion</label>
                        <div className="col-sm-10">
                            <input name="shortDescription" type="text" className="form-control" id="sDescription"
                                   placeholder="Short Description"
                                   value={fState.shortDescription}
                                   onChange={handleInputHandler}
                            />
                            { error.sdescription ? <span className="text-danger">{error.sdescription}</span> : "" }
                        </div>
                    </div>

                    <div className="form-group row mb-5">
                        <label htmlFor="description" className="col-sm-2 col-form-label">Descripcion</label>
                        <div className="col-sm-10">
                            <textarea name="description" className="form-control" id="description" rows="3"
                                      placeholder="Description"
                                      value={fState.description}
                                      onChange={handleInputHandler}
                            >
                            </textarea>
                        </div>
                    </div>

                    <div className="form-group row mb-5">
                        <label htmlFor="" className="col-sm-2 col-form-label"></label>
                        <div className="offset-10 col-sm-2">
                            <button className="btn btn-warning text-white" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Description;
