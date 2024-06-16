import React, { useEffect, useState } from "react";
import { apiGet } from "../utils/api";
import { InvoiceTable } from "./InvoiceTable";

export default function InvoicesByPerson({personIdentificationNumber}) {

    const [purchases, setPurchases] = useState([]);
    const [sales, setSales] = useState([]);

    useEffect(() => {
        async function fetchPurchases() {
            const data = await apiGet("/api/identification/" + personIdentificationNumber + "/purchases");
            setPurchases(data);
        };
        async function fetchSales() {
            const data = await apiGet("/api/identification/" + personIdentificationNumber + "/sales");
            setSales(data);
        };
        if (personIdentificationNumber) {
            fetchPurchases();
            fetchSales();
        }
        }, [personIdentificationNumber]);

    return (
        <div>
            <h3>Přijaté faktury</h3>
            <InvoiceTable items={purchases} actionsEnabled={false} />
            <h3>Vystavené faktury</h3>
            <InvoiceTable items={sales} actionsEnabled={false} />
        </div>
    )
}