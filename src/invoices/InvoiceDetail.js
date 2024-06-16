
import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../utils/api";
import dateStringFormatter from "../utils/dateStringFormatter";
import { Link } from "react-router-dom";


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
                <strong>Dodavatel</strong> <small>(IČ)</small>
                <br/>
                {invoice.seller.name} <small>({invoice.seller.identificationNumber})</small>
            </p>
            <p>
                <strong>Odběratel</strong> <small>(IČ)</small>
                <br/>
                {invoice.buyer.name} <small>({invoice.buyer.identificationNumber})</small>
            </p>
            <p>
                <strong>Vystaveno</strong>
                <br/>
                {dateStringFormatter(invoice.issued, true)}
            </p>
            <p>
                <strong>Splatnost</strong>
                <br/>
                {dateStringFormatter(invoice.dueDate, true)}
            </p>
            <p>
                <strong>Produkt</strong>
                <br/>
                {invoice.product}
            </p>
            <p>
                <strong>Částka</strong>
                <br/>
                {invoice.price} Kč
            </p>
            
            { invoice.note ? 
            <p>
                <strong>Poznámka</strong>
                <br/>
                {invoice.note}
            </p> 
            : <></>}
            <Link className="btn btn-small btn-primary" to={"/invoices"} >Zpět</Link>
        </div>
    )   
}