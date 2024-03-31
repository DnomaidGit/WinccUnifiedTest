// contract (same as manifest.json)
const CONTRACT = {
    methods: {
		DrawTableData: function(tableDataString){
			ArrayData = tableDataString;			
			drawTable(ArrayColumn,ArrayData);
		}
	},  
    events: ["SelectedRow"],
    properties: {"TableDataString": " ","ColumnStyleString": " "},
    types: {}
};
// placeholder to include additional Unified dependencies (not used in this example)
const EXTENSIONS = ['HMI'];
// connection timeout
const TIMEOUT = 1000;

var webccInterface = function () {
    var init_ = function () {
        console.log('Interface initialized');
		ArrayColumn = "[{\"title\":\"ID\", \"field\":\"ID\"},{\"title\":\"Name\", \"field\":\"Name\"},{\"title\":\"Temperature\", \"field\":\"Temperature\"},{\"title\":\"Time\", \"field\":\"Time\"}]";			
		ArrayData = "[{\"ID\":\"1\",\"Name\":\"Test1\",\"Temperature\":\"1°C\",\"Time\":\"00_00_00 00_00_1999\"},{\"ID\":\"2\",\"Name\":\"Test2\",\"Temperature\":\"2°C\",\"Time\":\"00_00_01 00-00-1999\"}]"; 
		WebCC.Properties.ColumnStyleString = ArrayColumn;
		WebCC.Properties.TableDataString = ArrayData;
		drawTable(ArrayColumn,ArrayData);
		// Subscribe for value changes
		webccInterface.subscribe();																	   							 
    };
	// Set current values when CWC shows up
    var setProperty_ = function (data) {
		switch (data.key) {
			case "TableDataString":
				if (data.value) {
					ArrayData = data.value;
				}
				break;			
			case "ColumnStyleString":
				if (data.value) {
					ArrayColumn = data.value;
				}
				break;
			}
		drawTable(ArrayColumn,ArrayData);		
		console.log('Set property: Key <', data.key, '>',' Value <', data.value, '>');
    };
	var subscribe_ = function () {		
		WebCC.onPropertyChanged.subscribe(webccInterface.setProperty);
		console.log('Subscribe');				
    };	
    return {
		init: init_,
		setProperty: setProperty_,
		subscribe: subscribe_,
        contract: CONTRACT
    };
}();

var webccInterfaceInit = function () {
    // Initialize
	if (WebCC.isDesignMode) {
		webccInterface.init();
		showDemoData();
		console.log('Design Mode');
	}else {
		webccInterface.init();
		showRuntimeData();
		console.log('Connection OK');
	}		    
};