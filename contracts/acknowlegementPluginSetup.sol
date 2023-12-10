// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.8.21;

import {PluginSetup, IPluginSetup} from "@aragon/osx/framework/plugin/setup/PluginSetup.sol";
import {AcknowlegementPlugin} from "./AcknowlegementPlugin.sol";

contract AcknowlegementPluginSetup is PluginSetup {
    address public AcknowlegementPluginImplementation;

    constructor() {
        AcknowlegementPluginImplementation = address(
            new AcknowlegementPlugin()
        );
    }

    function implementation() external view returns (address) {
        return AcknowlegementPluginImplementation;
    }
}
