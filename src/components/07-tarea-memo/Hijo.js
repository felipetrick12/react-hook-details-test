import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => { //el valor que queremos que memorize

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3 mx-2"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
