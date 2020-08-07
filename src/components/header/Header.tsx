import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-left weathy-header__container">
                    <h2 className="weathy-header__text">weather</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;