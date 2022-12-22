import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
    },
    preview: {
        marginTop: 50,
        display: "flex",
        flexDirection: "column",
    },
    image: { maxWidth: "100%", maxHeight: 320 },
    delete: {
        cursor: "pointer",
        padding: 15,
        background: "red",
        color: "white",
        border: "none",
    },
};

const CreatePost = () => {
    const [blog, setBlog] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [selectedImage, setSelectedImage] = useState();
    const Token = localStorage.getItem('Token');
    const history = useHistory()
    const formData = new FormData();

    const Send = event => {
        formData.append("description", blog);
        formData.append("file", selectedImage)
        formData.append("name", name)
        formData.append("price", price)

        const config = {
            headers: {
                authorization: Token
            }
        }
        
        axios.post('http://127.0.0.1:3455/blogs', formData, config)
            .then(response => {
                history.push('/')

            }).catch(err => {
                console.log(err);
            })
    };

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => {
        setSelectedImage();
    };

    return (

        <section className="vh-100" style={{
            backgroundColor: 'white'
        }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-10 col-xl-9">
                        <div className="card text-black" style={{ borderRadius: 25 }}>
                            <div className="card-body p-md-5" style={{ color: 'black', borderRadius: 25, backgroundColor: 'lightgrey' }}>
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                            upload stuff
                                        </p>
                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <div style={styles.container}>
                                                        <input
                                                            accept="image/*"
                                                            type="file"
                                                            onChange={imageChange}
                                                        />
                                                        {selectedImage && (
                                                            <div style={styles.preview}>
                                                                <img src={URL.createObjectURL(selectedImage)}
                                                                    style={styles.image}
                                                                    alt="Thumb" />
                                                                <button onClick={removeSelectedImage} style={styles.delete}>
                                                                    Remove This Image
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <textarea type="text" id="Cloth" placeholder="Description" onChange={event => {
                                                const { value } = event.target
                                                setBlog(value)
                                            }} />
                                            <br/>
                                            <input type="text" id="name" placeholder="Write Name of things" onChange={event => {
                                                const { value } = event.target
                                                setName(value)
                                            }} />  <br/>
                                            <input type="number" id="price" placeholder="Enter Price" onChange={event => {
                                                const { value } = event.target
                                                setPrice(value)
                                            }} />
                                            <br />
                                            <br />
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg" onClick={Send}>
                                                    Save
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default CreatePost;
