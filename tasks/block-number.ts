// const { task } = require("hardhat/config")
import { task } from "hardhat/config"

export default task("block-number", "Prints the current block number").setAction(
  // const blockTask = async function() => {}
  // async function blockTask() {}
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber()
    console.log(`Current block number: ${blockNumber}`)
  }
)

