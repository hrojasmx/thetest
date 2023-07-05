import {AddIcon, CloseIcon, CopyIcon} from './Icons/Icons';

import './communities.css';


const Communities = ( {communities, searchIdHandler, deleteCommunityIdHandler, clearDescriptionHandler} ) => {
    return (
        <>
            <div className="block1">
                <div className="communities">
                    <div className="header">
                        <p className="">Communities</p>
                        <button
                            className="btn btn-warning"
                            onClick={clearDescriptionHandler}
                        >
                            <AddIcon/>
                        </button>
                    </div>
                    <p>Name</p>
                </div>

                    <div className="listContainer">
                    {
                        communities.map( community => {
                            return (
                                <div key={community.id} className="listItem">
                                    <p className="theName">
                                        { community.name }
                                    </p>

                                    <div className="theControls">
                                        <div className="btn btn-danger">
                                            <CloseIcon
                                                handler={() => deleteCommunityIdHandler(community.id)}
                                            />
                                        </div>

                                        <div className="btn btn-success">
                                                <CopyIcon
                                                    handler={
                                                        () => {
                                                            searchIdHandler(community.idCategory)
                                                        }
                                                    }
                                                />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Communities;
