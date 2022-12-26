import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './blog.css';
import { Button } from '@material-ui/core';
const Token = localStorage.getItem('Token');


const Details = () => {
    const [data, setData] = useState({ dataContainer: [] });
    const [flag, setFlag] = useState('no');
    const chooseItem = [];
    const history = useHistory()


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
                }).catch((err) => {
                    console.log(err);
                })
        }
        Datas();
    }, [setData]);
    
    const DataForSave = async () => {
        const obj = {
            clothesId: chooseItem
        }
        await axios.post('http://127.0.0.1:3455/purchase', obj, config)
            .then((result) => {
                console.log('result', result)
                if(result.data.status === 201) {
                    history.push('/purchase')
                }
                // setData({ dataContainer: result.data.clothes })
            }).catch((err) => {
                console.log(err);
        })
        // }
    }
    // DataForSave();

    const selectItem = async(value) => {
        // chooseItem = [];
        setFlag('yes')
        chooseItem.push(value)

        // await DataForSave(chooseItem);
    }


    useEffect(() => {


    }, [flag === 'yes'])


    useEffect(() => {
        
    }, [])

    const renderCard = (card, index) => {
        let imageUrl;
        if(card.file) {
            imageUrl = `http://127.0.0.1:3455/${card.file.path}`
        }

        return (
            <div className='container' >
                <div className='card-img-top'>
                    <div className="card mb-4" key={card._id}>
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
                        <Button onClick={() => selectItem(card._id)}>Select</Button>
                    </div>
                </div>
                {/* <Button onClick={() => selectItem(card._id)}>Done</Button> */}

            </div>
            
        );
    }
    return (
        <div>
            {data.dataContainer.map(renderCard)}
            <div>

                <Button onClick={() => DataForSave()}>Done</Button>
            </div>
        </div>
    );
}

export default Details;
