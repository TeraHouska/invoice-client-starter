import React from "react";
import { useState, useEffect } from "react";
import StatsInvoices from "./StatsInvoices";
import StatsPersons from "./StatsPersons";

export default function StatsIndex() {

    return (
        <div className="row">
            <div className="col">
                <h1>Statistiky osob</h1>
                <StatsPersons />
            </div>
            <div className="col">
                <h1>Statistiky faktur</h1>
                <StatsInvoices />
            </div>
        </div>
    )
}