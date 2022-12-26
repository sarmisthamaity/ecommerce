import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './blog.css';
const Token = localStorage.getItem('Token');

const Purchase = () => {

    const [resData, setResData] = useState([])

    const config = {
        headers: {
            authorization: Token
        }
    }

    useEffect(() => {
        const Datas = async () => {
            await axios.get('http://127.0.0.1:3455/allpurchases', config)
                .then((result) => {
                    setResData(result.data.PurchasesData.clothesId)

                }).catch((err) => {
                    console.log(err);
                })
        }
        Datas();

    }, [])


    return (
        <div className='container' >
           <div class="row">
                {resData.map(k => {
                    return (
                        <div class="col-sm-6" key={k._id}>
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">{k.name}</h4>
                                    <h5 class="card-title">{k.price}</h5>
                                    <p class="card-text">{k.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Purchase;
