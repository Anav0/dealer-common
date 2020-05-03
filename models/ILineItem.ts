/*
 WZORZEZ ADAPTER
 Interfejs określający parametry przedmiotów które można kupić. Wykorzystywany przez bibliotekę płatniczą stripe.
*/
export interface ILineItem {
    /**
     * The amount to be collected per unit of the line item.
     */
    amount?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * The description for the line item, to be displayed on the Checkout page.
     */
    description?: string;

    /**
     * A list of images representing this line item. Each image can be up to 5 MB in size.
     */
    images?: string[];

    /**
     * The name for the line item.
     */
    name?: string;

    /**
     * The quantity of the line item being purchased.
     */
    quantity: number;

    /**
     * The tax rates which apply to this line item. This is only allowed in subscription mode.
     */
    tax_rates?: string[];
}

