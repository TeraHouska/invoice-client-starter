import React from "react";
import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";

export default function InvoiceFilter(props) {
    
    function handleChange(e) {
        props.handleChange(e);
    }

    function handleSubmit(e) {
        props.handleSubmit(e);
    }

    const filter = props.filter;

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                    <InputSelect
                        items={props.people}
                        name="sellerID"
                        label="Dodavatel"
                        prompt="nevybrán"
                        handleChange={handleChange}
                        value={filter.sellerID}
                    />
                </div>
                <div className="col">
                    <InputField 
                        type="number"
                        min="0"
                        name="minPrice"
                        label="Minimální cena"
                        prompt="neuvedena"
                        handleChange={handleChange}
                        value={filter.minPrice}
                    />
                </div>
                <div className="col">
                    <InputField 
                        type="text"
                        name="product"
                        label="Produkt"
                        prompt="neuveden"
                        handleChange={handleChange}
                        value={filter.product}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <InputSelect
                        items={props.people}
                        name="buyerID"
                        label="Odběratel"
                        prompt="nevybrán"
                        handleChange={handleChange}
                        value={filter.buyerID}
                    />
                </div>
                <div className="col">
                    <InputField 
                        type="number"
                        min="0"
                        name="maxPrice"
                        label="Maximální cena"
                        prompt="neuvedena"
                        handleChange={handleChange}
                        value={filter.maxPrice}
                    />
                </div>
                <div className="col">
                    <InputField 
                        type="number"
                        name="limit"
                        label="Limit položek"
                        prompt="neuveden"
                        handleChange={handleChange}
                        value={filter.limit}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input
                        type="submit"
                        className="btn btn-secondary float-right mt-2"
                        value="Filtrovat"
                    />
                </div>
            </div>
        </form>
    )
}