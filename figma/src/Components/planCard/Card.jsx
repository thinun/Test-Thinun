import React, {useState} from 'react';
import featuredProductsData from './card_data.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import './Card.css'
import star from '../../assets/Component 18.png'

const Card = () => {

    const [id, setId] = useState(null)
    const [price, setPrice] = useState(null);
    const [container, setContainer] = useState(false)
    const [button, setButton] = useState(false)

    const handleRadioClick = (id, price) => {
        setId(id)
        setPrice(price)
    }
    const handleMobileButtonClick = () => {
        if (id) {
            alert(`Plan ID- ${id} Plan Price-$${price} /Mo`);
        } else {
            alert('Please Select a plan');
        }
    };


    const handleProductClick = (id, price) => {
        setContainer(true)
        setButton(false)
        if (container && button) {
            alert(`Plan ID- ${id} Plan Price-$${price} /Mo`);
        } else {

        }
    }
    const handleProductButton = (id, price) => {
        setButton(true)
        alert(`Card ID-${id} Price-${price}/Mo`);
    }

    return (
        <>
            <div className={'card-container'}>
                {featuredProductsData.map(featuredProduct => (
                    <div className="product"
                         onClick={() => handleProductClick(featuredProduct.id, featuredProduct.price)}
                         key={featuredProduct.id}>
                        <img className={'product-discount'} src={star} alt={'star'}/>
                        <div className={'product-title'}>
                            {featuredProduct.title}
                        </div>
                        <div className={'product-price'}>
                            {featuredProduct.price}/Mo
                        </div>
                        <div className="product-description">
                            {featuredProduct.description}
                        </div>
                        <div className={'product-b'}>
                            <button onClick={() => handleProductButton(featuredProduct.id, featuredProduct.price)}
                                    className={'product-button'}>Buy Now
                            </button>
                        </div>
                        <div className={'product-features-container'}>
                            {featuredProduct.features.map((features) => (
                                <div className={'product-features'}>
                                    <i><FontAwesomeIcon icon={faCircleCheck}
                                                        className={'icon'}/>
                                    </i>
                                    <p>{features}</p>
                                </div>
                            ))}

                        </div>

                    </div>
                ))}
            </div>
            <div className={'mobile'}>
                {featuredProductsData.map(featuredProduct => (
                    <div className={'card-container-mobile'}>

                        <div className="product"
                             key={featuredProduct.id}>
                            <img className={'product-discount'} src={star} alt={'star'}/>
                            <div className={'product-left'}>
                                <form>
                                    <input type={"radio"}
                                           onClick={() => handleRadioClick(featuredProduct.id, featuredProduct.price)}/>
                                </form>
                            </div>
                            <div className={'product-right'}>
                                <div className={'product-title'}>
                                    {featuredProduct.title}
                                </div>
                                <div className={'product-price'}>
                                    $ {featuredProduct.price} /Mo
                                </div>
                                <div className={'product-description'}>
                                    {featuredProduct.description}
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

                <div className={'product-b'}>
                    <button onClick={handleMobileButtonClick}
                            className={'product-button'}>Buy Now
                    </button>
                </div>


                <div className={'product-dis'}>
                    <p>The Following Features are included in every Package</p>
                </div>

                <div className={'product-features'}>
                    <div className={'features'}>
                        <i><FontAwesomeIcon icon={faCircleCheck}
                                            className={'icon'}/>
                        </i>
                        <p>Create ultimate Dynamic QR code</p>
                    </div>
                    <div className={'features'}>
                        <i><FontAwesomeIcon icon={faCircleCheck}
                                            className={'icon'}/>
                        </i>
                        <p>Access to variety of QR types</p>
                    </div>
                    <div className={'features'}>
                        <i><FontAwesomeIcon icon={faCircleCheck}
                                            className={'icon'}/>
                        </i>
                        <p>Unlimited editing of QR code</p>
                    </div>
                    <div className={'features'}>
                        <i><FontAwesomeIcon icon={faCircleCheck}
                                            className={'icon'}/>
                        </i>
                        <p>Unlimited Scan</p>
                    </div>
                    <div className={'features'}>
                        <i><FontAwesomeIcon icon={faCircleCheck}
                                            className={'icon'}/>
                        </i>
                        <p>ultimate Users</p>
                    </div>

                </div>


            </div>
        </>
    )
        ;
};

export default Card;
