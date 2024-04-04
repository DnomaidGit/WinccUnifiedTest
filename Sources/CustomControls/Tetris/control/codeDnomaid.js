		let UnifiedPushbutton = CONTRACT.properties;	
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
		function move(key) {
			switch (key) {
				case "Rotate":
					UnifiedPushbutton[key] = WebCC.Properties[key];
					break;
				case "Left":
					UnifiedPushbutton[key] = WebCC.Properties[key];
					break;
				case "Right":
					UnifiedPushbutton[key] = WebCC.Properties[key];
					break;
				case "Drop":
					UnifiedPushbutton[key] = WebCC.Properties[key];
					break;			
				}
		}
		function tetris() {
			var script = document.createElement('script');
			script.src = 'tetris.js';
			document.head.appendChild(script);
			console.log('Connection OK');
		}
		function startGame() {
			start();
		}
		function pauseGame() {
			pause();
		}
		function restartGame() {
			restart();
		}

		
