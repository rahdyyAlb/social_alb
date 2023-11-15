import React, { useState } from 'react';

const RegistrationForm = () => {
    // État local pour les champs du formulaire
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        postalCode: '',
        city: '',
        phoneNumber: '',
    });

    // Fonction pour gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    // Fonction pour soumettre le formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Envoi des données au backend
            const response = await fetch('http://localhost:3001/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                console.log('Utilisateur créé avec succès');
                // Rediriger ou effectuer une action après la création de l'utilisateur
            } else {
                console.error('Erreur lors de la création de l\'utilisateur');
            }
        } catch (error) {
            console.error('Erreur lors de la communication avec le backend:', error);
        }
    };

    return (
        <div className="card bg-light">
            <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                <h4 className="card-title mt-3 text-center">Create Account</h4>
                <p className="text-center">Get started with your free account</p>
                <form onSubmit={handleSubmit}>
                    <div className=" mb-2 form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-100 h-100"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input
                            name="username"
                            className="form-control"
                            placeholder="Username"
                            type="text"
                            value={userData.username}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-2 form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-100 h-100 "> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input
                            name="email"
                            className="form-control"
                            placeholder="Email address"
                            type="email"
                            value={userData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-2 form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-100"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input
                            name="password"
                            className="form-control"
                            placeholder="Create password"
                            type="password"
                            value={userData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-2 form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-100"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input
                            name="firstName"
                            className="form-control"
                            placeholder="First name"
                            type="text"
                            value={userData.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-2 form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-100"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input
                            name="lastName"
                            className="form-control"
                            placeholder="Last name"
                            type="text"
                            value={userData.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-2 form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-100"> <i className="fa fa-building"></i> </span>
                        </div>
                        <input
                            name="address"
                            className="form-control"
                            placeholder="Address"
                            type="text"
                            value={userData.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-2 form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-100"> <i className="fa fa-building"></i> </span>
                        </div>
                        <input
                            name="postalCode"
                            className="form-control"
                            placeholder="Postal code"
                            type="text"
                            value={userData.postalCode}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-2 form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-100"> <i className="fa fa-building"></i> </span>
                        </div>
                        <input
                            name="city"
                            className="form-control"
                            placeholder="City"
                            type="text"
                            value={userData.city}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-2 form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-100"> <i className="fa fa-phone"></i> </span>
                        </div>
                        <input
                            name="phoneNumber"
                            className="form-control"
                            placeholder="Phone number"
                            type="text"
                            value={userData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-2 form-group">
                        <button type="submit" className="btn btn-primary btn-block">Create Account</button>
                    </div>

                    <p className="text-center">Have an account? <a href="">Log In</a></p>
                </form>
            </article>
        </div>
    );
};

export default RegistrationForm;
