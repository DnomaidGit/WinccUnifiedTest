// contract (same as manifest.json)
const CONTRACT = {
    methods: {
		Add: function(){
			add();
		}
	},  
    events: ["Subtract"],
    properties: {"Value1": 0,"Value2": 0},
    types: {}
};
// placeholder to include additional Unified dependencies (not used in this example)
const EXTENSIONS = ['HMI'];
// connection timeout
const TIMEOUT = 1000;

var webccInterface = function () {
    var init_ = function () {
        console.log('Interface initialized');
		webccInterface.setProperty({ key: "Value1", value: WebCC.Properties.Value1});
		webccInterface.setProperty({ key: "Value2", value: WebCC.Properties.Value2});
		// Subscribe for value changes
		webccInterface.subscribe();																	   							 
    };
	// Set current values when CWC shows up
    var setProperty_ = function (data) {
		switch (data.key) {
			case "Value1":
				updateValue1();
				break;			
			case "Value2":
				updateValue2();
				break;
			}	
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
		clickSubtract();
	}		    
};