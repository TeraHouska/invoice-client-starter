import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {apiGet, apiPost, apiPut} from "../utils/api";

import InputField from "../components/InputField";
import FlashMessage from "../components/FlashMessage";
import InputSelect from "../components/InputSelect";

export default function InvoiceForm() {
    const {id} = useParams();
    const navigate = useNavigate();

    //useStates
    const [invoice, setInvoice] = useState({
        invoiceNumber: "",
        issued: "",
        dueDate: "",
        product: "",
        price: "",
        vat: "",
        note: "",
        buyer: {_id: 0},
        seller: {_id: 0},
    });
    const [people, setPeople] = useState([]);
    const [sentState, setSent] = useState(false);
    const [successState, setSuccess] = useState(false);
    const [errorState, setError] = useState(null);

    useEffect(() => {
        if (id) {
            apiGet("/api/invoices/" + id).then((data) => setInvoice(data));
        }
    }, [id]);

    useEffect(() => {
        async function fetchPeople() {
            const data = await apiGet("/api/persons");
            setPeople(data);
            const defaultId = data[0]._id;
            setInvoice({...invoice, buyer: {_id: defaultId}, seller: {_id: defaultId}});
            console.log(JSON.stringify(invoice));
        }
        fetchPeople();
    }, [])

    function handleSubmit(e) {
        e.preventDefault();

        (id ? apiPut("/api/invoices/" + id, invoice) : apiPost("/api/invoices", invoice))
            .then((data) => {
                setSent(true);
                setSuccess(true);
                const sleep = ms => new Promise(r => setTimeout(r, ms));
                sleep(2500).then(
                    () => {navigate("/invoices");}
                )
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
                setSent(true);
                setSuccess(false);
            });
    }

    const sent = sentState;
    const success = successState;

    if (people.length == 0) {
        return <p>Nenalezeny žádné osoby</p>
    } 
        
    return (
        <div>
            <h1>{id ? "Upravit" : "Vytvořit"} fakturu</h1>
            <hr/>
            {errorState ? (
                <div className="alert alert-danger">{errorState}</div>
            ) : null}
            {sent && (
                <FlashMessage
                    theme={success ? "success" : ""}
                    text={success ? "Uložení faktury proběhlo úspěšně." : ""}
                />
            )}
            <form onSubmit={handleSubmit}>
                <InputField 
                    required={true}
                    type="number"
                    name="invoiceNumber"
                    label="Číslo faktury"
                    prompt="Zadejte číslo faktury"
                    value={invoice.invoiceNumber}
                    handleChange={(e) => {
                        setInvoice({...invoice, invoiceNumber: e.target.value});
                    }}
                />

                <InputField 
                    required={true}
                    type="date"
                    name="issued"
                    label="Datum vystavení"
                    prompt="Zadejte datum vystavení faktury"
                    value={invoice.issued}
                    handleChange={(e) => {
                        setInvoice({...invoice, issued: e.target.value});
                    }}
                />

                <InputField 
                    required={true}
                    type="date"
                    name="dueDate"
                    label="Datum splatnosti"
                    prompt="Zadejte datum splatnosti faktury"
                    value={invoice.dueDate}
                    handleChange={(e) => {
                        setInvoice({...invoice, dueDate: e.target.value});
                    }}
                />

                <InputField 
                    required={true}
                    type="text"
                    name="product"
                    label="Název produktu"
                    prompt="Zadejte název produktu"
                    value={invoice.product}
                    handleChange={(e) => {
                        setInvoice({...invoice, product: e.target.value});
                    }}
                />

                <InputField 
                    required={true}
                    type="number"
                    name="price"
                    label="Cena"
                    prompt="Zadejte cenu"
                    value={invoice.price}
                    handleChange={(e) => {
                        setInvoice({...invoice, price: e.target.value});
                    }}
                />

                <InputField 
                    required={true}
                    type="number"
                    name="vat"
                    label="Číslo vat"
                    prompt="Zadejte číslo vat"
                    value={invoice.vat}
                    handleChange={(e) => {
                        setInvoice({...invoice, vat: e.target.value});
                    }}
                />

                <InputSelect 
                    required={true}
                    name="seller"
                    label="Dodavatel"
                    prompt="Vyberte dodavatele"
                    items={people}
                    value={invoice.seller._id}
                    handleChange={(e) => {
                        setInvoice({...invoice, seller: {_id: e.target.value}});
                        console.log(e.target.value);
                    }}
                />

                <InputSelect 
                    required={true}
                    name="buyer"
                    label="Odběratel"
                    prompt="Vyberte odběratele"
                    items={people}
                    value={invoice.buyer._id}
                    handleChange={(e) => {
                        setInvoice({...invoice, buyer: {_id: e.target.value}});
                        console.log(e.target.value);
                    }}
                />

                <InputField 
                    required={false}
                    type="text"
                    name="note"
                    label="Poznámka"
                    prompt="Zadejte poznámku"
                    value={invoice.note}
                    handleChange={(e) => {
                        setInvoice({...invoice, note: e.target.value});
                    }}
                />

                <input type="submit" className="btn btn-primary mt-2" value="Uložit"/>
            </form>
        </div>
    )
}