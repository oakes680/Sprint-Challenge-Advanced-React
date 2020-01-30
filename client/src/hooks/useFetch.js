import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState('')
    useEffect(() => {
        axios
        .get(url)
        .then(res => {
            setData(res.data);
            console.log('from custom hook', res.data)
        })
        .catch(err => console.log(err)) 
    }, [url])
    
    return [data]
}

export default useFetch
