import OurBestItem from "./our-best-item/our-best-item";
import './our-best-items-list.css'


const OurBestItemsList = ({data}) => {
   
    return (
        <div className="our-best-items-list">
            <OurBestItem data={data}/>
        </div>
    )
}

export default OurBestItemsList;