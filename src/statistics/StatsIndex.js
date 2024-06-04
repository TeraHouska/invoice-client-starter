import React from "react";
import { useState, useEffect } from "react";
import StatsInvoices from "./StatsInvoices";

export default function StatsIndex() {

    return (
        <div>
            <h1>Statistiky faktur</h1>
            <StatsInvoices />
        </div>
    )
}