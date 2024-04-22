import {
  prepareEvent,
  prepareContractCall,
  readContract,
  type BaseTransactionOptions,
  type AbiParameterToPrimitiveType,
} from "thirdweb";

/**
* Contract read functions
*/

/**
 * Represents the parameters for the "campaigns" function.
 */
export type CampaignsParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "campaigns" function on the contract.
 * @param options - The options for the campaigns function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { campaigns } from "TODO";
 * 
 * const result = await campaigns({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function campaigns(
  options: BaseTransactionOptions<CampaignsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x141961bc",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "title",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "description",
      "type": "string"
    },
    {
      "internalType": "uint256",
      "name": "target",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "deadline",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "amountCollected",
      "type": "uint256"
    },
    {
      "internalType": "string",
      "name": "image",
      "type": "string"
    }
  ]
],
    params: [options.arg_0]
  });
};




/**
 * Calls the "getCampaigns" function on the contract.
 * @param options - The options for the getCampaigns function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getCampaigns } from "TODO";
 * 
 * const result = await getCampaigns();
 * 
 * ```
 */
export async function getCampaigns(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa6b03633",
  [],
  [
    {
      "components": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "target",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountCollected",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "image",
          "type": "string"
        },
        {
          "internalType": "address[]",
          "name": "donators",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "donations",
          "type": "uint256[]"
        }
      ],
      "internalType": "struct CrowdFunding.Campaign[]",
      "name": "",
      "type": "tuple[]"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getDonators" function.
 */
export type GetDonatorsParams = {
  id: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_id","type":"uint256"}>
};

/**
 * Calls the "getDonators" function on the contract.
 * @param options - The options for the getDonators function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getDonators } from "TODO";
 * 
 * const result = await getDonators({
 *  id: ...,
 * });
 * 
 * ```
 */
export async function getDonators(
  options: BaseTransactionOptions<GetDonatorsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x0fa91fa9",
  [
    {
      "internalType": "uint256",
      "name": "_id",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "address[]",
      "name": "",
      "type": "address[]"
    },
    {
      "internalType": "uint256[]",
      "name": "",
      "type": "uint256[]"
    }
  ]
],
    params: [options.id]
  });
};




/**
 * Calls the "numberOfCampaigns" function on the contract.
 * @param options - The options for the numberOfCampaigns function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { numberOfCampaigns } from "TODO";
 * 
 * const result = await numberOfCampaigns();
 * 
 * ```
 */
export async function numberOfCampaigns(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x07ca140d",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
* Contract write functions
*/

/**
 * Represents the parameters for the "createCampaign" function.
 */
export type CreateCampaignParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"_owner","type":"address"}>
title: AbiParameterToPrimitiveType<{"internalType":"string","name":"_title","type":"string"}>
description: AbiParameterToPrimitiveType<{"internalType":"string","name":"_description","type":"string"}>
target: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_target","type":"uint256"}>
deadline: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_deadline","type":"uint256"}>
image: AbiParameterToPrimitiveType<{"internalType":"string","name":"_image","type":"string"}>
};

/**
 * Calls the "createCampaign" function on the contract.
 * @param options - The options for the "createCampaign" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { createCampaign } from "TODO";
 * 
 * const transaction = createCampaign({
 *  owner: ...,
 *  title: ...,
 *  description: ...,
 *  target: ...,
 *  deadline: ...,
 *  image: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function createCampaign(
  options: BaseTransactionOptions<CreateCampaignParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x9943e3a1",
  [
    {
      "internalType": "address",
      "name": "_owner",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "_title",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "_description",
      "type": "string"
    },
    {
      "internalType": "uint256",
      "name": "_target",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "_deadline",
      "type": "uint256"
    },
    {
      "internalType": "string",
      "name": "_image",
      "type": "string"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.owner, options.title, options.description, options.target, options.deadline, options.image]
  });
};


/**
 * Represents the parameters for the "donationToCampaign" function.
 */
export type DonationToCampaignParams = {
  id: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_id","type":"uint256"}>
};

/**
 * Calls the "donationToCampaign" function on the contract.
 * @param options - The options for the "donationToCampaign" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { donationToCampaign } from "TODO";
 * 
 * const transaction = donationToCampaign({
 *  id: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function donationToCampaign(
  options: BaseTransactionOptions<DonationToCampaignParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x97c2c1a0",
  [
    {
      "internalType": "uint256",
      "name": "_id",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.id]
  });
};


