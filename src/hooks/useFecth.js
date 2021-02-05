import { useEffect, useState } from 'react'

export const useFecth = (url) => {
    const [state, setState] = useState({data:null,loading:true, error:null });

    useEffect(() => {

        fetch(url)
        .then(resp=> resp.json())
        .then(data => {
            setState({
                data,
                loading: false,
                error:null
            })
        }).catch(() => {
            setState({
                data: null,
                loading: false,
                error: 'no se pudo cargar la api'
            })
        })
    }, [url]);
    
    return state;
}
