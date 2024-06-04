import React from "react";
import { useEffect, useState } from "react";
import { apiGet } from "../utils/api";

export default function StatsPersons() {
    const [personStats, setPersonStats] = useState([]);

    useEffect(() => {
        async function fetchPersonStats() {
            const data = await apiGet("/api/persons/statistics");
            setPersonStats(data);
        }
        fetchPersonStats();
    }, []);

    if (personStats.length === 0) {
        return <p>Načítám...</p>
    }

    return (
        <div>
            {personStats.map((stat, index) =>
                <p key={index}>
                    <strong>{stat.personName}</strong>
                    <br/>
                    {stat.revenue} Kč
                </p>
            )}
        </div>
    )
}