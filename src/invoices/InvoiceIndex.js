import { useState, useEffect } from "react";
import { InvoiceTable } from "./InvoiceTable";
import { apiDelete, apiGet } from "../utils/api";

export default function InvoiceIndex() {

    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        async function fetchInvoices() {
            const data = await apiGet("/api/invoices");
            setInvoices(data);
        }
        fetchInvoices();
    }, []);

    async function deletePerson(id) {
        try {
            await apiDelete("/api/invoices/" + id);
        } catch (error) {
            alert(error.message);
            console.log(error.message);
        }
        setInvoices(invoices.filter((invoice) => invoice._id !== id));
    }

    return (
        <div>
            <h1>Seznam faktur</h1>
            <InvoiceTable items={invoices} deletePerson={deletePerson} />
        </div>
    )
}