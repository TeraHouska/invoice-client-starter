import React from "react";
import { useEffect, useState } from "react";
import { apiGet } from "../utils/api";
import { Link } from "react-router-dom";

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
            {personStats.filter((stat) => stat.revenue != 0)
            .map((stat, index) =>
                <p key={index}>
                    <Link to={"/persons/show/" + stat.personId} className="text-decoration-none text-reset">
                        <strong>{stat.personName}</strong> <small>({stat.personId})</small>
                    </Link>
                    <br/>
                    {stat.revenue} Kč
                </p>
            )}
        </div>
    )
}