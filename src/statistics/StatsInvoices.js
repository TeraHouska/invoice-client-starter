import React from "react";
import { useState, useEffect } from "react";
import { apiGet } from "../utils/api";


export default function StatsInvoices() {
    const [stats, setStats] = useState({});

    useEffect(() => {
        async function fetchStats() {
            const data = await apiGet("/api/invoices/statistics");
            setStats(data);
        }
        fetchStats();
    }, [])

    if (stats.length === 0) {
        return <p>Načítám...</p>
    }

    return (
        <div>
            <p>
                <strong>Suma za tento rok:</strong>
                <br/>
                {stats.currentYearSum} Kč
            </p>
            <p>
                <strong>Suma celkem:</strong>
                <br/>
                {stats.allTimeSum} Kč
            </p>
            <p>
                <strong>Celkem faktur:</strong>
                <br/>
                {stats.invoicesCount}
            </p>
        </div>
    )
}