
import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../utils/api";


export default function InvoiceDetail() {
    const {id} = useParams();
    const [invoice, setInvoice] = useState({
        invoiceNumber: "",
        issued: "",
        dueDate: "",
        product: "",
        price: "",
        vat: "",
        note: "",
        buyer: {},
        seller: {},
    });

    useEffect(() => {
        async function fetchInvoice() {
            const data = await apiGet("/api/invoices/" + id);
            setInvoice(data);
        }
        fetchInvoice();
    }, [id]);

    if (invoice.length === 0) {
        return <p>Načítám...</p>
    }

    return (
        <div>
            <h1>Detail faktury</h1>
            <hr/>
            <h3>Faktura č. {invoice.invoiceNumber}</h3>
            <p>
                <strong>Dodavatel</strong>
                <br/>
                {invoice.seller.name} ({invoice.seller.identificationNumber})
            </p>
            <p>
                <strong>Odběratel</strong>
                <br/>
                {invoice.buyer.name} ({invoice.buyer.identificationNumber})
            </p>
            <p>
                <strong>Vystaveno</strong>
                <br/>
                {invoice.issued}
            </p>
            <p>
                <strong>Splatnost</strong>
                <br/>
                {invoice.dueDate}
            </p>
            <p>
                <strong>Produkt</strong>
                <br/>
                {invoice.product}
            </p>
            <p>
                <strong>Částka</strong>
                <br/>
                {invoice.price}
            </p>
            <p>
                <strong>Poznámka</strong>
                <br/>
                {invoice.note}
            </p>
        </div>
    )   
}