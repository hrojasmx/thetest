import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { DUMMY_communities, DUMMY_descriptions } from "./data/dummy-data";
// import './App.css';

import Navbar from "./components/Navbar";
import Communities from "./components/Communities";
import Description from "./components/Description";


function App() {
    const [communities, setCommunities] = useState(DUMMY_communities);
    const [descriptions, setDescriptions] = useState(DUMMY_descriptions);
    const [currCommunity, setCurrCommunity] = useState({});

    function searchIdHandler(cate) {
        let filtered =
            descriptions.find(
                (description) => {
                    return description.idCategory === cate;
                }
            );

        setCurrCommunity(filtered);
    }

    const deleteCommunityIdHandler = (id) => {
        let filtered =
            communities.filter(
                (community) => {
                    return community.id !== id;
                }
            );

        setCommunities(filtered);
    };

    const clearDescriptionHandler = () => {
        setCurrCommunity({
            id: "",
            idCategory: "",
            category: "",
            name: "",
            pCommunity: "",
            shortDescription: "",
            description: ""
        });
    }

    const addCommunityHandler = (community) => {
        setCommunities([...communities, {
                id: uuidv4(),
                name: community.name,
                idCategory: community.category
            }]);

        setDescriptions([...descriptions, {
            id: uuidv4(),
            idCategory: community.category,
            ...community
            }
        ]);

        clearDescriptionHandler();
    }

  return (
      <>
          <div className="container">
                <Navbar />
          </div>

          <br />

          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5">
                <Communities
                    communities={communities}
                    clearDescriptionHandler={clearDescriptionHandler}
                    searchIdHandler={searchIdHandler}
                    deleteCommunityIdHandler={deleteCommunityIdHandler}
                />
              </div>

              <div className="col-lg-7">
                <Description
                    community={currCommunity}
                    addCommunityHandler={addCommunityHandler}
                />
              </div>
            </div>
          </div>
      </>
  );
}

export default App;
