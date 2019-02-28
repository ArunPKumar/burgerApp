import React from 'react';

import Aux from '../auxi';

import Model from '../../components/UI/Model/Model';

const withErrorHandler = (WrappedComponent) =>{
    return(props) =>{
        return(
            <Aux>
                <Model>
                        Something Went Wrong
                    </Model>
            <WrappedComponent {...props} />
            </Aux>
        );

    }
}

export default withErrorHandler;