import React from "react";
import { Link } from "react-router-dom";
import dateStringFormatter from "../utils/dateStringFormatter";

export function InvoiceTable({items, deletePerson}) {
    
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
                    <th>Částka (Kč)</th>
                    <th>Akce</th>
                </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => 
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{item.seller.name}</td>
                            <td>{item.buyer.name}</td>
                            <td>{dateStringFormatter(item.issued, true)}</td>
                            <td>{item.price}</td>
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
                                    onClick={() => deletePerson(item._id)}
                                    className="btn btn-sm btn-danger"
                                >
                                    Odstranit
                                </button>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Link to={"/invoices/create"} className="btn btn-success">
                Nová faktura
            </Link>
        </div>
    )
}