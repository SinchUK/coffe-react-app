import './our-best-item.css';




const OurBestItem = () => {
    return (
        <div className="our-best-item_container">
            <h3>Our best</h3>
            <div className="our-best-item">
                <div className="our-best-item_block">
                    <img src="/img/solimo.png" alt="Product view"/>
                    <span>Solimo Coffee Beans 2kg</span>
                    <div className="our-best-item_price">
                        <span>Price: 10.73$</span>
                    </div>
                </div>
                <div className="our-best-item_block">
                    <img src="img/presto-1.png" alt="Product view"/>
                    <span>Presto Coffee Beans 1kg</span>
                    <div className="our-best-item_price">
                        <span>Price: 15.99$</span>
                    </div>
                </div>
                <div className="our-best-item_block">
                    <img src="img/aromistico.png" alt="Product view"/>
                    <span>AROMISTICO Coffee 1 kg</span>
                    <div className="our-best-item_price">
                        <span>Price: 6.99$</span>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}


export default OurBestItem;