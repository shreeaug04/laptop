import React from 'react';
import slugify from 'slugify';
import FeatureItem from '../FeatureItem/FeatureItem';

function Feature(props){
    console.log(props.features)
    const options = props.features[props.feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return(
        <FeatureItem
            feature={props.feature}
            updateFeature={props.updateFeature}
            USCurrencyFormat={props.USCurrencyFormat}
            selected={props.selected}
            itemHash={itemHash}
            item={item}
        />
        )
    });

    return (
        <fieldset className="feature" key={props.featureHash}>
            <legend className="feature__name">
                <h3>{props.feature}</h3>
            </legend>
            {options}
        </fieldset>
    );

    
    
}
export default Feature;
