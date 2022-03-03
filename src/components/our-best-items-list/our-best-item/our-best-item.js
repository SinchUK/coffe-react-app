import './our-best-item.css';


const OurBestItem = ({data}) => {
    const items = data.map( item => {
        const {id, name, price, src} = item;
        return (
            <div key={id} className="our-best-item_block">
                <img src={src} alt="Product view"/>
                <span>{name}</span>
                <div className="our-best-item_price">
                    <span>{price}</span>
                </div>
            </div>
        )
    })
   
    return (
        <div className="our-best-item_container">
            <h3>Our best</h3>
            <div className="our-best-item">
                {items}
            </div>
        </div>
    )
}

export default OurBestItem;