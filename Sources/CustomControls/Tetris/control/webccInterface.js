// contract (same as manifest.json)
const CONTRACT = {
    methods: {
		StartGame: function(){
			startGame();
		},
		PauseGame: function(){
			pauseGame();
		},
		RestartGame: function(){
			restartGame();
		}
	},
    events: [],
	properties: {"Rotate": false,"Left": false,"Right": false,"Drop": false},
    types: {}
};
// placeholder to include additional Unified dependencies (not used in this example)
const EXTENSIONS = ['HMI'];
// connection timeout
const TIMEOUT = 1000;

var webccInterface = function () {
    var init_ = function () {
        console.log('Interface initialized');
		webccInterface.setProperty({ key: "Rotate", value: WebCC.Properties.Rotate});
		webccInterface.setProperty({ key: "Left", value: WebCC.Properties.Left});
		webccInterface.setProperty({ key: "Right", value: WebCC.Properties.Right});
		webccInterface.setProperty({ key: "Drop", value: WebCC.Properties.Drop});
		// Subscribe for value changes
		webccInterface.subscribe();
    };
	// Set current values when CWC shows up
    var setProperty_ = function (data) {
		switch (data.key) {
			case "Rotate":
				if (data.value) {
					move(data.key);
				}	
				break;			
			case "Left":
				if (data.value) {
					move(data.key);
				}	
				break;			
			case "Right":
				if (data.value) {
					move(data.key);
				}	
				break;
			case "Drop":
				if (data.value) {
					move(data.key);
				}	
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
	webccInterface.init();
	if (WebCC.isDesignMode) {
		//Init		
	}else {
		tetris();
	}		        
};