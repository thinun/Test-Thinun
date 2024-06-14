import {useState} from 'react';
import featuredProductsData from './card_data.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import './Card.css'
import star from '../../assets/Component 18.png'
import vector from '../../assets/Vector.png'
import checkbox from '../../assets/Checkbox.png'
import frame from '../../assets/Frame.png'


const Card = () => {

    const [id, setId] = useState(null)
    const [price, setPrice] = useState(null);
    const [container, setContainer] = useState(false)
    const order = [3, 1, 2];
    const [mobileButton, setMobileButton] = useState(false)

    const handleMobileButtonClick = (id,price) => {
        setMobileButton(true)
        setId(id)
        setPrice(price)
    };
    const handleMobileButton=()=>{
        if(id && price){
            alert(`Card id- ${id} price - ${price}`)
        }
    }


    const handleProductClick = (id, price) => {
        setContainer(true)
        if (container) {
            alert(`Plan ID- ${id} Plan Price-$${price} /Mo`);
        }
    }
    const handleProductButton = (id, price) => {
        setContainer(false)
        if (!container) {
            alert(`Card ID-${id} Price-${price}/Mo`);
        }
    }

    return (
        <>
            <div className={'card-container'}>
                {featuredProductsData.map((featuredProduct, index) => (
                    <div className={`product${index === 0 ? 'product-special' : ''}`}
                         onClick={() => handleProductClick(featuredProduct.id, featuredProduct.price)}
                         key={featuredProduct.id}
                         style={{order: order[index + 1]}}>

                        {index === 0 ? (
                            <div className='special-container'>
                                <img className={'product-discount-special'} src={star} alt={'star'}/>
                                <div className={'special'}>
                                    <img src={vector} alt={''}/>
                                    <p>Most Popular</p>
                                </div>
                            </div>
                        ) : (
                            <img className={'product-discount'} src={star} alt={'star'}/>
                        )}
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
                            <hr/>
                            {featuredProduct.features.map((features) => (
                                <div className={'product-features'} key={featuredProduct.id}>

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
                {featuredProductsData.map((featuredProduct,index) => (
                    <div className={'card-container-mobile'} key={featuredProduct.id}>

                        <div className="product"
                             key={featuredProduct.id}>
                            {index===0?<img src={frame} alt={''} className={'m-special'}/>:''}
                            <img className={'product-discount'} src={star} alt={'star'}/>
                            <div className={'product-left'}>
                                <form>
                                    <button type="button" className="tick-button"
                                            key={featuredProduct.id}
                                            onClick={() => {
                                                handleMobileButtonClick(featuredProduct.id, featuredProduct.price)
                                            }}>
                                        <img className={'mobile-checkbox-img'} src={checkbox} alt={''}/>
                                        <FontAwesomeIcon icon={faCircleCheck}
                                                         className={`mobile-icon${mobileButton && id===featuredProduct.id ?'clicked':''}`}/>
                                    </button>
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

                <div className={'m-button-container'}>
                    <button onClick={handleMobileButton}
                            className={'product-button'}>Buy Now
                    </button>
                </div>
                <div className={'features-title'}>Features</div>
                <div className={'product-dis'}>
                    <p>The following features are included in every plan</p>
                </div>

                <div className={'product-features'}>
                    <div className={'features'}>
                        <i><FontAwesomeIcon icon={faCircleCheck}
                                            className={'icon'}/>
                        </i>
                        <p>Access a Variety of QR types</p>
                    </div>
                    <div className={'features'}>
                        <i><FontAwesomeIcon icon={faCircleCheck}
                                            className={'icon'}/>
                        </i>
                        <p>Unlimited Editing of QR codes</p>
                    </div>
                    <div className={'features'}>
                        <i><FontAwesomeIcon icon={faCircleCheck}
                                            className={'icon'}/>
                        </i>
                        <p>Unlimited scans</p>
                    </div>
                    <div className={'features'}>
                        <i><FontAwesomeIcon icon={faCircleCheck}
                                            className={'icon'}/>
                        </i>
                        <p>Multiple QR Code download formats</p>
                    </div>
                    <div className={'features'}>
                        <i><FontAwesomeIcon icon={faCircleCheck}
                                            className={'icon'}/>
                        </i>
                        <p>Unlimited users</p>
                    </div>
                    <div className={'features'}>
                        <i><FontAwesomeIcon icon={faCircleCheck}
                                            className={'icon'}/>
                        </i>
                        <p>Premium Customer Support</p>
                    </div>
                    <div className={'features'}>
                        <i><FontAwesomeIcon icon={faCircleCheck}
                                            className={'icon'}/>
                        </i>
                        <p>Cancel at Anytime</p>
                    </div>
                </div>
            </div>
        </>
    )
        ;
};

export default Card;
