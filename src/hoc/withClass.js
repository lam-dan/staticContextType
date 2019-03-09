import React from 'react';

//takes component and wraps div in CSS and outputs it 
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className = {className}>
            <WrappedComponent {...props}
            
            />

        </div>
    );
};

export default withClass;
