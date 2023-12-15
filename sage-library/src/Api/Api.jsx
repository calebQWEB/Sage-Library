import axios from 'axios'
import { useState, useEffect } from 'react'

const useApi = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url)
                setData(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return {data, error, loading}
}

export default useApi