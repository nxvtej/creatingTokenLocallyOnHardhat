# creatingTokenLocallyOnHardhat
**Token Creation Smart Contract**

This project demonstrates the creation of a custom token on a local Hardhat 
network using a smart contract. The contract allows the contract owner to 
mint tokens to a provided address, and any user can burn and transfer tokens.

**Description**

This project showcases the implementation of a token creation smart contract 
using Solidity. The contract utilizes the ERC20 standard, enabling 
\functionalities such as minting, burning, and transferring tokens. 
It provides a basic framework for creating your own token on a local 
Hardhat network and interacting with it using Remix.

**Getting Started**

To get started with this project, follow the steps outlined below:

Set up the necessary prerequisites, including Remix IDE and Hardhat.

Clone this repository to your local machine or download the source code.

Open Remix IDE in your web browser.

Set up a local Hardhat network by running npx hardhat node in your project directory.

Add the hardhat.config.js file to your Remix workspace.

Open the MyToken.sol file in Remix.

Compile the smart contract by clicking on the "Compile" button in the Remix interface.

Deploy the contract by selecting the contract name (MyToken) and clicking the "Deploy" button.

Interact with the contract using the available functions:

Use the "mint" function to mint tokens to a provided address. Only the contract owner can call this function.
Use the "burn" function to burn tokens from your own balance.
Use the "transfer" function to transfer tokens to another address.

**Authors**
Navdeep

**License**
This project is licensed under the MIT License.

