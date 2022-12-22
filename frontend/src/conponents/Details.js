import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './blog.css';
const Token = localStorage.getItem('Token');


const Details = () => {
    const [data, setData] = useState({ dataContainer: [] });
    const [image, setImage] = useState('')

    const config = {
        headers: {
            authorization: Token
        }
    }

    useEffect(() => {
        const Datas = async () => {
            await axios.get('http://127.0.0.1:3455/allClothes', config)
                .then((result) => {
                    setData({ dataContainer: result.data.clothes })
                    // setImage(`http://127.0.0.1:8080/${resp.data.userProfile.image}`)
                }).catch((err) => {
                    console.log(err);

                })
        }
        Datas();
    }, [setData]);

    const renderCard = (card, index) => {
        const imageUrl = `http://127.0.0.1:3455/${card.path}`
        return (
            <div className='container' >
                <div className='card-img-top'>
                    <div className="card mb-4" key={index}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={imageUrl} className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                <h5 className="card-title">{`clothes Name: ${card.name}`}</h5>
                                <h5 className="card-title">{`clothes Price: ${card.price}`}</h5>
                                </div>
                                <div className='card-body'>
                                    <p className="card-text">{`Description: ${card.description}`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
    return (
        <div>
            {data.dataContainer.map(renderCard)}
        </div>
    );
}


export default Details;
