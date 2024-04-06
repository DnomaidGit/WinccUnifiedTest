		let resultAdd = 0;
		let resultSubtract = 0;
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

		function add() {
			resultAdd = WebCC.Properties.Value1 + WebCC.Properties.Value2;
			document.getElementById("result").textContent = "Result: " + resultAdd;
		}
		function updateValue1() {
			document.getElementById("val1").textContent = "Value1: " + WebCC.Properties.Value1;
		}
		function updateValue2() {
			document.getElementById("val2").textContent = "Value2: " + WebCC.Properties.Value2;
		}				
		function showDemoData() {
			document.getElementById("info").textContent = "¡Design Mode WinccUnified!";
		}
		function showRuntimeData() {
			document.getElementById("info").textContent = "¡Runtime WinccUnified!";		
		}		
		function clickSubtract() {
			document.body.addEventListener("click", function () {
				subtract();
				WebCC.Events.fire("Subtract",resultSubtract);
			});
		}
		function subtract() {
			resultSubtract = WebCC.Properties.Value1 - WebCC.Properties.Value2;
			document.getElementById("result").textContent = "Result: " + resultSubtract;
		}

		document.addEventListener('DOMContentLoaded', (event) => {
			clickSubtract();
		});
		
