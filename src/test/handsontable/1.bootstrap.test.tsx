import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {Handsontable} from "../../modules/examples/handsontable/handsontable.component";

test('#1 Column names are read-only', () => {
    render(<Handsontable/>);
    let header1 = screen.getByText('Record Number (optional)');
    expect(header1.classList.contains('htDimmed')).toBe(true);
    screen.getByText('Sum of Annual PEPFAR Expenditure, excluding Fringe');
});

test('#2 Gender cell has a dropdown', async () => {
    render(<Handsontable/>);
    let genderCell = document.querySelector('tr:nth-of-type(2) td.htAutocomplete');
    fireEvent.mouseDown(genderCell.querySelector('.htAutocompleteArrow'));
    await screen.findByText("Male")
    //TODO: check we can click
    // fireEvent.mouseDown(document.querySelector(".handsontableEditor .listbox"));
    // await waitFor(()=>expect(screen.queryByText("Male")).not.toBeInTheDocument());
});