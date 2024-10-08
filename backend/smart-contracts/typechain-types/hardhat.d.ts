/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "PolicyManagement",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PolicyManagement__factory>;
    getContractFactory(
      name: "VehicleManagement",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VehicleManagement__factory>;

    getContractAt(
      name: "PolicyManagement",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.PolicyManagement>;
    getContractAt(
      name: "VehicleManagement",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.VehicleManagement>;

    deployContract(
      name: "PolicyManagement",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PolicyManagement>;
    deployContract(
      name: "VehicleManagement",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VehicleManagement>;

    deployContract(
      name: "PolicyManagement",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PolicyManagement>;
    deployContract(
      name: "VehicleManagement",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VehicleManagement>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
