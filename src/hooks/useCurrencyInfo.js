import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/f3b6f69a28f5bd3bdf55d82f/latest/${currency}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Update the state with fetched data
                setCurrencyInfo(data.conversion_rates); // Assuming 'conversion_rates' holds currency data
                console.log(data); // Log the data structure
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [currency]);

    return currencyInfo;
}

export default useCurrencyInfo;
