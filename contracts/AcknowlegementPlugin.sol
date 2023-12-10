// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.8.21;

import {Plugin, IDAO} from "@aragon/osx/core/plugin/Plugin.sol";

contract AcknowlegementPlugin is Plugin {
    constructor(IDAO _dao, address user, address topicContract) Plugin(_dao) {
        IDAO.Action[] memory actions = new IDAO.Action[](1);
        actions[0] = IDAO.Action({
            to: address(topicContract),
            value: 0,
            data: abi.encodeCall()
        });
    }
}
