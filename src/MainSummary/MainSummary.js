import React from 'react';

function MainSummary(props){

    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];

        return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                    {props.USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div>
        );
    });

    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
    );

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {props.USCurrencyFormat.format(total)}
                </div>
            </div>
        </section>
    )
}
export default MainSummary