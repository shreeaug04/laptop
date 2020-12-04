import React from 'react';

import Feature from '../Feature/Feature'

 function MainForm(props){
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        return(
          <Feature
            featureHash={featureHash}
            feature={feature}
            features={props.features}
            selected={props.selected}
            updateFeature={props.updateFeature}
            USCurrencyFormat={props.USCurrencyFormat}

        />  
        )

    });


    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    )
}
    export default MainForm