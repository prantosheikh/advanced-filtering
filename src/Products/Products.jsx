import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';

import "./Products.css";

const Products = () => {
    return (
        <section className="card-container">
            <section className="card">
                <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe" />
                <div className="card-details">
                    <h3 className="card-title">Shone</h3>
                    <section className="card-section">
                        <AiFillStar  className='rating-star'/>   <AiFillStar className='rating-star'/>   <AiFillStar className='rating-star'/>   <AiFillStar className='rating-star'/>
                        <span className="total-reviews">4</span>
                        <div className="card-price">
                            <del>$300</del> $200
                        </div>
                        <div className="bag">
                            <BsFillBagHeartFill />
                        </div>
                    </section>
                </div>
            </section>
        </section>
    );
};

export default Products;