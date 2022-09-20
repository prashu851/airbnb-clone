import './Locations.css';
import Location from './Location';


const Locations = (props) => {


    return (
        <div>
            {props.destinationData.length !== 0?
        <div className="locations-container">
        {
        props.destinationData.map((data) => {
            return <Location key={data.id} data={data} />
        })}
        
        </div>
        :
        <div>
            <h2>No exact matches</h2>
            <p>Try changing or removing your filter or adjusting your search area.</p>
        </div>
}
        </div>
    )
}

export default Locations;