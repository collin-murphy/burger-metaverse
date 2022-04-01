import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BurgerToken, BurgerTokenInterface } from "../BurgerToken";
export declare class BurgerToken__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(name: string, symbol: string, initialSupply: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BurgerToken>;
    getDeployTransaction(name: string, symbol: string, initialSupply: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BurgerToken;
    connect(signer: Signer): BurgerToken__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162001f3b38038062001f3b83398181016040528101906200003791906200069f565b828281600390805190602001906200005192919062000417565b5080600490805190602001906200006a92919062000417565b5050506200007f3082620000dd60201b60201c565b620000ae60405180606001604052806031815260200162001f0a603191396200025660201b6200075c1760201c565b620000d4620000c330620002f960201b60201c565b6200034160201b620007f51760201c565b5050506200094b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000150576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000147906200079a565b60405180910390fd5b6200016460008383620003e460201b60201c565b8060026000828254620001789190620007eb565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001cf9190620007eb565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000236919062000859565b60405180910390a36200025260008383620003e960201b60201c565b5050565b620002f6816040516024016200026d9190620008c2565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620003ee60201b60201c565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b620003e18160405160240162000358919062000859565b6040516020818303038152906040527ff5b1bba9000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620003ee60201b60201c565b50565b505050565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b828054620004259062000915565b90600052602060002090601f01602090048101928262000449576000855562000495565b82601f106200046457805160ff191683800117855562000495565b8280016001018555821562000495579182015b828111156200049457825182559160200191906001019062000477565b5b509050620004a49190620004a8565b5090565b5b80821115620004c3576000816000905550600101620004a9565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200053082620004e5565b810181811067ffffffffffffffff82111715620005525762000551620004f6565b5b80604052505050565b600062000567620004c7565b905062000575828262000525565b919050565b600067ffffffffffffffff821115620005985762000597620004f6565b5b620005a382620004e5565b9050602081019050919050565b60005b83811015620005d0578082015181840152602081019050620005b3565b83811115620005e0576000848401525b50505050565b6000620005fd620005f7846200057a565b6200055b565b9050828152602081018484840111156200061c576200061b620004e0565b5b62000629848285620005b0565b509392505050565b600082601f830112620006495762000648620004db565b5b81516200065b848260208601620005e6565b91505092915050565b6000819050919050565b620006798162000664565b81146200068557600080fd5b50565b60008151905062000699816200066e565b92915050565b600080600060608486031215620006bb57620006ba620004d1565b5b600084015167ffffffffffffffff811115620006dc57620006db620004d6565b5b620006ea8682870162000631565b935050602084015167ffffffffffffffff8111156200070e576200070d620004d6565b5b6200071c8682870162000631565b92505060406200072f8682870162000688565b9150509250925092565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000782601f8362000739565b91506200078f826200074a565b602082019050919050565b60006020820190508181036000830152620007b58162000773565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620007f88262000664565b9150620008058362000664565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200083d576200083c620007bc565b5b828201905092915050565b620008538162000664565b82525050565b600060208201905062000870600083018462000848565b92915050565b600081519050919050565b60006200088e8262000876565b6200089a818562000739565b9350620008ac818560208601620005b0565b620008b781620004e5565b840191505092915050565b60006020820190508181036000830152620008de818462000881565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200092e57607f821691505b60208210811415620009455762000944620008e6565b5b50919050565b6115af806200095b6000396000f3fe6080604052600436106100a75760003560e01c80634e71d92d116100645780634e71d92d146101e457806370a08231146101ee57806395d89b411461022b578063a457c2d714610256578063a9059cbb14610293578063dd62ed3e146102d0576100a7565b806306fdde03146100ac578063095ea7b3146100d757806318160ddd1461011457806323b872dd1461013f578063313ce5671461017c57806339509351146101a7575b600080fd5b3480156100b857600080fd5b506100c161030d565b6040516100ce9190610e3a565b60405180910390f35b3480156100e357600080fd5b506100fe60048036038101906100f99190610ef5565b61039f565b60405161010b9190610f50565b60405180910390f35b34801561012057600080fd5b506101296103c2565b6040516101369190610f7a565b60405180910390f35b34801561014b57600080fd5b5061016660048036038101906101619190610f95565b6103cc565b6040516101739190610f50565b60405180910390f35b34801561018857600080fd5b506101916103fb565b60405161019e9190611004565b60405180910390f35b3480156101b357600080fd5b506101ce60048036038101906101c99190610ef5565b610404565b6040516101db9190610f50565b60405180910390f35b6101ec6104ae565b005b3480156101fa57600080fd5b506102156004803603810190610210919061101f565b6104ee565b6040516102229190610f7a565b60405180910390f35b34801561023757600080fd5b50610240610536565b60405161024d9190610e3a565b60405180910390f35b34801561026257600080fd5b5061027d60048036038101906102789190610ef5565b6105c8565b60405161028a9190610f50565b60405180910390f35b34801561029f57600080fd5b506102ba60048036038101906102b59190610ef5565b6106b2565b6040516102c79190610f50565b60405180910390f35b3480156102dc57600080fd5b506102f760048036038101906102f2919061104c565b6106d5565b6040516103049190610f7a565b60405180910390f35b60606003805461031c906110bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610348906110bb565b80156103955780601f1061036a57610100808354040283529160200191610395565b820191906000526020600020905b81548152906001019060200180831161037857829003601f168201915b5050505050905090565b6000806103aa61088e565b90506103b7818585610896565b600191505092915050565b6000600254905090565b6000806103d761088e565b90506103e4858285610a61565b6103ef858585610aed565b60019150509392505050565b60006012905090565b60008061040f61088e565b90506104a3818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461049e919061111c565b610896565b600191505092915050565b6104cf6040518060600160405280602f815260200161154b602f913961075c565b6104e06104db306104ee565b6107f5565b6104eb33600a6106b2565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054610545906110bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610571906110bb565b80156105be5780601f10610593576101008083540402835291602001916105be565b820191906000526020600020905b8154815290600101906020018083116105a157829003601f168201915b5050505050905090565b6000806105d361088e565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610699576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610690906111e4565b60405180910390fd5b6106a68286868403610896565b60019250505092915050565b6000806106bd61088e565b90506106ca818585610aed565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6107f2816040516024016107709190610e3a565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d6e565b50565b61088b816040516024016108099190610f7a565b6040516020818303038152906040527ff5b1bba9000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d6e565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610906576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108fd90611276565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610976576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096d90611308565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a549190610f7a565b60405180910390a3505050565b6000610a6d84846106d5565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610ae75781811015610ad9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad090611374565b60405180910390fd5b610ae68484848403610896565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5490611406565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610bcd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc490611498565b60405180910390fd5b610bd8838383610d97565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c559061152a565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cf1919061111c565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d559190610f7a565b60405180910390a3610d68848484610d9c565b50505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ddb578082015181840152602081019050610dc0565b83811115610dea576000848401525b50505050565b6000601f19601f8301169050919050565b6000610e0c82610da1565b610e168185610dac565b9350610e26818560208601610dbd565b610e2f81610df0565b840191505092915050565b60006020820190508181036000830152610e548184610e01565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e8c82610e61565b9050919050565b610e9c81610e81565b8114610ea757600080fd5b50565b600081359050610eb981610e93565b92915050565b6000819050919050565b610ed281610ebf565b8114610edd57600080fd5b50565b600081359050610eef81610ec9565b92915050565b60008060408385031215610f0c57610f0b610e5c565b5b6000610f1a85828601610eaa565b9250506020610f2b85828601610ee0565b9150509250929050565b60008115159050919050565b610f4a81610f35565b82525050565b6000602082019050610f656000830184610f41565b92915050565b610f7481610ebf565b82525050565b6000602082019050610f8f6000830184610f6b565b92915050565b600080600060608486031215610fae57610fad610e5c565b5b6000610fbc86828701610eaa565b9350506020610fcd86828701610eaa565b9250506040610fde86828701610ee0565b9150509250925092565b600060ff82169050919050565b610ffe81610fe8565b82525050565b60006020820190506110196000830184610ff5565b92915050565b60006020828403121561103557611034610e5c565b5b600061104384828501610eaa565b91505092915050565b6000806040838503121561106357611062610e5c565b5b600061107185828601610eaa565b925050602061108285828601610eaa565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806110d357607f821691505b602082108114156110e7576110e661108c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061112782610ebf565b915061113283610ebf565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611167576111666110ed565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006111ce602583610dac565b91506111d982611172565b604082019050919050565b600060208201905081810360008301526111fd816111c1565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611260602483610dac565b915061126b82611204565b604082019050919050565b6000602082019050818103600083015261128f81611253565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006112f2602283610dac565b91506112fd82611296565b604082019050919050565b60006020820190508181036000830152611321816112e5565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061135e601d83610dac565b915061136982611328565b602082019050919050565b6000602082019050818103600083015261138d81611351565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006113f0602583610dac565b91506113fb82611394565b604082019050919050565b6000602082019050818103600083015261141f816113e3565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611482602383610dac565b915061148d82611426565b604082019050919050565b600060208201905081810360008301526114b181611475565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611514602683610dac565b915061151f826114b8565b604082019050919050565b6000602082019050818103600083015261154381611507565b905091905056fe7468657265206172652074686973206d616e7920746f6b656e732068656c6420696e2074686520636f6e7472616374a2646970667358221220f3a3a6b532256644462922f812c7aa70abc001435c57de6e5c6883e1447f264064736f6c634300080b0033746f6b656e206465706c6f7965643a2074686973206d616e7920746f6b656e732073656e7420746f20636f6e7472616374";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): BurgerTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BurgerToken;
}