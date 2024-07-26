import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AutoFetch3 = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [countdown, setCountdown] = useState(30 * 60); // 30 minutes in seconds

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://ebook-haven.onrender.com');
                setData(response.data);
                setCountdown(60 * 60); // Reset countdown on new data fetch
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData(); // Initial fetch
        const fetchIntervalId = setInterval(fetchData, 60 * 60 * 1000); // Fetch every 30 minutes

        return () => clearInterval(fetchIntervalId); // Clean up interval on component unmount
    }, []);

    useEffect(() => {
        const countdownId = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown > 0) {
                    return prevCountdown - 1;
                } else {
                    return 0;
                }
            });
        }, 1000); // Decrease countdown every second

        return () => clearInterval(countdownId); // Clean up countdown interval on component unmount
    }, [data]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && (
                <div>
                    <div>Data: {JSON.stringify(data)}</div>
                    <div>Time until next fetch: {countdown} seconds</div>
                </div>
            )}
        </div>
    );
};

export default AutoFetch3;
