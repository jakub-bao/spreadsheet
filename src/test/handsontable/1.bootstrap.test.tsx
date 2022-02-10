import React from 'react';
import {render, screen} from '@testing-library/react';
import {Handsontable} from "../../modules/examples/handsontable/handsontable.component";

test('#1 Renders table with headers and dropdowns', async () => {
    render(<Handsontable/>);
    let header1 = screen.getByText('Record Number (optional)');
    expect(header1.classList.contains('htDimmed')).toBe(true);
    screen.getByText('Sum of Annual PEPFAR Expenditure, excluding Fringe');
    // screen.debug(null, 1000000)
});

test('#2 Gender is a dropdown', () => {
    render(<Handsontable/>);
    let genderCell = document.querySelector('tr:nth-of-type(2) td.htAutocomplete');
    console.log(genderCell)
});