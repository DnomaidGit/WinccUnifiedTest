		let ArrayData = [];
		let ArrayColumn = [];
		let table;
		let selectedRow = null;
		// Initialize the custom control (without a successful initialization, the CWC will remain empty. Make sure to include the webcc.min.js script!)
		// "result" is a boolean defining if the connection was successfull or not.
		function init(result) {
            if (result) {
                webccInterfaceInit();				
            } else {
                console.log('Connection NOK');
            }
        }
		WebCC.start(init, webccInterface.contract, EXTENSIONS, TIMEOUT);		
		function showDemoData() {
			// Get the table container element
			var tableContainer = document.getElementById("example-table");
		}
		function drawTable(columnStyleString, tableDataString) {
			try {
				var tabledata = (tableDataString && JSON.parse(tableDataString)) || [];
				var columnStyle = (columnStyleString && JSON.parse(columnStyleString)) || [];
			} catch(e) {
				console.error('Error parsing JSON:', e);
				return; 
			}
			//choose how the table should look like or behave. More information on http://tabulator.info/
			table = new Tabulator("#example-table", {
				height: 'calc(100% - 2px)', // set height of table to 100% minus 2 px, because the border of the table is 1px top and border
				data: tabledata, //load initial data into table
				layout: "fitColumns", //fit columns to width of table (optional)
				columns: columnStyle,
				selectable: true, // Enable selection				
				rowClick: function (e, row) { // Table configuration options
					// Deselect all rows
					if (selectedRow) {				
					table.deselectRow();
					}
					// Select the clicked row
					row.select();
					selectedRow = row;
				}  			
			});
		}
		function showRuntimeData() {
			// Get the table container element
			var tableContainer = document.getElementById("example-table");
			// Attach a click event listener to the table container
			tableContainer.addEventListener("click", function () {
			// Get the selected row(s)
			var selectedRows = table.getSelectedRows();
			WebCC.Events.fire("SelectedRow",selectedRows[0]._row.data);						
			});		
		}	