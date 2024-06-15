import React from "react";
import { Link } from "react-router-dom";
import dateStringFormatter from "../utils/dateStringFormatter";

export function InvoiceTable({items, deleteInvoice, actionsEnabled=true}) {
    
    return (
        <div>
            <p>
                Počet položek: {items.length}
            </p>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Dodavatel</th>
                    <th>Odběratel</th>
                    <th>Datum vystavení</th>
                    <th>Částka</th>
                    {actionsEnabled? 
                    <th>Akce</th>
                    : <></>}
                </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => 
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>
                                <Link to={"/persons/show/" + item.seller._id} className="text-decoration-none text-reset">
                                    {item.seller.name}
                                </Link>
                            </td>
                            <td>
                                <Link to={"/persons/show/" + item.buyer._id} className="text-decoration-none text-reset">
                                    {item.buyer.name}
                                </Link>
                            </td>
                            <td>{dateStringFormatter(item.issued, true)}</td>
                            <td>{item.price} Kč</td>
                            {actionsEnabled? 
                            <td>
                                <div className="btn-group">
                                <Link
                                    to={"/invoices/show/" + item._id}
                                    className="btn btn-sm btn-info"
                                >
                                    Zobrazit
                                </Link>
                                <Link
                                    to={"/invoices/edit/" + item._id}
                                    className="btn btn-sm btn-warning"
                                >
                                    Upravit
                                </Link>
                                <button
                                    onClick={() => deleteInvoice(item._id)}
                                    className="btn btn-sm btn-danger"
                                >
                                    Odstranit
                                </button>
                                </div>
                            </td>
                            : <></>}
                        </tr>
                    )}
                </tbody>
            </table>
            {actionsEnabled?
            <Link to={"/invoices/create"} className="btn btn-success">
                Nová faktura
            </Link>
            : <></>}
        </div>
    )
}