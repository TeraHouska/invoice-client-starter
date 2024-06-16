import { useState, useEffect } from "react";
import { InvoiceTable } from "./InvoiceTable";
import { apiDelete, apiGet } from "../utils/api";
import InvoiceFilter from "./InvoiceFilter";
import FlashMessage from "../components/FlashMessage";

export default function InvoiceIndex() {

    const [invoices, setInvoices] = useState([]);
    const [people, setPeople] = useState([]);
    const [filter, setFilter] = useState({
        buyerID: undefined,
        sellerID: undefined,
        product: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        limit: undefined
    });
    const [showDeleteMessage, setShowDeleteMessage] = useState(false);

    useEffect(() => {
        async function fetchInvoices() {
            const data = await apiGet("/api/invoices");
            setInvoices(data);
        }
        async function fetchPeople() {
            const data = await apiGet("/api/persons");
            setPeople(data);
        }
        fetchInvoices();
        fetchPeople();
    }, []);

    async function deleteInvoice(id) {
        try {
            await apiDelete("/api/invoices/" + id);
            setInvoices(invoices.filter((invoice) => invoice._id !== id));
            setShowDeleteMessage(true);
            const sleep = ms => new Promise(r => setTimeout(r, ms));
            await sleep(2500);
            setShowDeleteMessage(false);
        } catch (error) {
            alert(error.message);
            console.log(error.message);
        }
    }

    function handleChange(e) {
        // pokud vybereme prázdnou hodnotu (máme definováno jako true/false/'' v komponentách), nastavíme na undefined
        if (e.target.value === "false" || e.target.value === "true" || e.target.value === '') {
            setFilter(prevState => {
                return {...prevState, [e.target.name]: undefined}
            });
        } else {
            setFilter(prevState => {
                return { ...prevState, [e.target.name]: e.target.value}
            });
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();
    
        const data = await apiGet("/api/invoices", filter);
        setInvoices(data);
    };

    return (
        <div>
            <h1>Seznam faktur</h1>
            {showDeleteMessage ? 
                <FlashMessage theme="success" text="Faktura byla úspěšně odstraněna."/>
                : null}
            <InvoiceFilter handleChange={handleChange} handleSubmit={handleSubmit} filter={filter} people={people} />
            <InvoiceTable items={invoices} deleteInvoice={deleteInvoice} />
        </div>
    )
}