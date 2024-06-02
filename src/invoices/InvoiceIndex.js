import { useState, useEffect } from "react";
import { InvoiceTable } from "./InvoiceTable";
import { apiGet } from "../utils/api";

export function InvoiceIndex() {

    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        async function fetchInvoices() {
            const data = await apiGet("/api/invoices");
            setInvoices(data);
        }
        fetchInvoices();
    }, []);

    return (
        <div>
            <h1>Seznam faktur</h1>
            <InvoiceTable items={invoices} />
        </div>
    )
}