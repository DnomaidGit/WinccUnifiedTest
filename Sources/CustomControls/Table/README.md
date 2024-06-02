***
# Custom Web Controls Table Installation Guide
***

This guide provides instructions on how to install Custom Web Controls for a TIA Portal project, enabling the addition of freely-programmable web controls that extend beyond the functionalities offered by the default toolbox.

## Prerequisites

- A project has been created in TIA Portal.
- An HMI device has been added to the project.
- At least one screen has been created for the HMI device.

## Installation Steps

1. **Open Project Directory**: Navigate to the directory where your TIA Portal project is stored.

2. **Access UserFiles**: Open the `UserFiles` subfolder within the project directory.

3. **Create CustomControls Folder**: Within the `UserFiles` subfolder, create a new folder named `CustomControls`.

4. **Add Control File**: Store the custom web control program as a <span style="color: blue;">{9DE938AC-F10E-4DED-B46D-5B3B0618B180}.zip</span> file in the `CustomControls` folder.

5. **Update Toolbox in TIA Portal**:
    - Open TIA Portal.
    - Navigate to the `Toolbox` > `My Controls` task card.
    - Click on the `Update` button. Your Custom Web Control will now be displayed in the task card.

6. **Use the Control**:
    - Drag the Custom Web Control from the `Toolbox` > `My Controls` task card onto your screen.
    - Select the Control to configure it.

7. **Configure Events**:
    - In the Inspector window, navigate to `Properties > Events`.
    - Configure system functions or scripts for the events used in the Control.

8. **Set Interface Properties**:
    - Go to `Properties > Properties > Interface` in the Inspector window.
    - Assign static values for the interface properties or dynamize them according to your requirements.
    - Note: By default, the Control's access to tags is "Read only". If you want the Control to modify tag values, you need to uncheck this option.

9. **Compile and Load**:
    - Compile and load the Runtime project to your HMI device.

## Development Environment
* TIA PORTAL V17 update 01
* Pc Windows 10



