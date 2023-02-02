import FlexExample from "../atoms/FlexExample";
import "../../assets/styles/FlexStyle.css"

function FlexComponent() {
    const flexItem = [1,2,3,4,5]

    return ( 
        <div id="div-container">
            {FlexExample.map(flexItem =>(
                <FlexExample key={flexItem} item={flexItem}></FlexExample>
            )
            )}
        </div>
     );
}

export default FlexComponent;