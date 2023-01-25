import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, CheckboxSelectionCallbackParams, ColDef, GridReadyEvent, HeaderCheckboxSelectionCallbackParams } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public rowSelection: 'single' | 'multiple' = 'multiple';
  
  columnDefs: ColDef[] = [
    { field: 'Breakfast' , wrapText: true, autoHeight: true, headerCheckboxSelection: isFirstColumn, checkboxSelection: isFirstColumn, showDisabledCheckboxes: true,},
    { field: 'priceBreakfast' },
    { field: 'lunch',wrapText: true, autoHeight: true, headerCheckboxSelection: isFirstColumn, checkboxSelection: isFirstColumn, showDisabledCheckboxes: true, },
    { field: 'price' },
];
public defaultColDef: ColDef = {
  headerCheckboxSelection: isFirstColumn,
  checkboxSelection: isFirstColumn,
};
rowData = [
    { Breakfast: 'Avocado and Tuna Salad Wrap', priceBreakfast: 'Included', lunch: 'Ultimate Veggie Sandwich', price: 10 },
    { Breakfast: 'Greek Salad Wraps', priceBreakfast: 'Included', lunch: 'Classic Tuna Melt', price: 10 },
    { Breakfast: 'Supergreen Mushroom & Orzo Soup', priceBreakfast: 'included', lunch: 'Tofu Stir-Fry', price: 12 }
];

}
function isFirstColumn(
  params:
    | CheckboxSelectionCallbackParams
    | HeaderCheckboxSelectionCallbackParams
) {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
}

