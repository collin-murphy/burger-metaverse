import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BurgerNFT, BurgerNFTInterface } from "../BurgerNFT";
export declare class BurgerNFT__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BurgerNFT>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BurgerNFT;
    connect(signer: Signer): BurgerNFT__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f4275726765724e465400000000000000000000000000000000000000000000008152506040518060400160405280600681526020017f4255524745520000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620001a6565b508060019080519060200190620000af929190620001a6565b505050620000d2620000c6620000d860201b60201c565b620000e060201b60201c565b620002bb565b600033905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b49062000285565b90600052602060002090601f016020900481019282620001d8576000855562000224565b82601f10620001f357805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022357825182559160200191906001019062000206565b5b50905062000233919062000237565b5090565b5b808211156200025257600081600090555060010162000238565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200029e57607f821691505b60208210811415620002b557620002b462000256565b5b50919050565b612c1980620002cb6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063a22cb46511610071578063a22cb465146102f6578063b88d4fde14610312578063c87b56dd1461032e578063e985e9c51461035e578063f2fde38b1461038e57610121565b806370a0823114610262578063715018a61461029257806384c4bd4b1461029c5780638da5cb5b146102ba57806395d89b41146102d857610121565b80631c75cfb4116100f45780631c75cfb4146101c057806323b872dd146101de57806340d097c3146101fa57806342842e0e146102165780636352211e1461023257610121565b806301ffc9a71461012657806306fdde0314610156578063081812fc14610174578063095ea7b3146101a4575b600080fd5b610140600480360381019061013b9190611a9e565b6103aa565b60405161014d9190611ae6565b60405180910390f35b61015e61048c565b60405161016b9190611b9a565b60405180910390f35b61018e60048036038101906101899190611bf2565b61051e565b60405161019b9190611c60565b60405180910390f35b6101be60048036038101906101b99190611ca7565b6105a3565b005b6101c86106bb565b6040516101d59190611cf6565b60405180910390f35b6101f860048036038101906101f39190611d11565b6106c5565b005b610214600480360381019061020f9190611d64565b610725565b005b610230600480360381019061022b9190611d11565b6107c8565b005b61024c60048036038101906102479190611bf2565b6107e8565b6040516102599190611c60565b60405180910390f35b61027c60048036038101906102779190611d64565b61089a565b6040516102899190611cf6565b60405180910390f35b61029a610952565b005b6102a46109da565b6040516102b19190611cf6565b60405180910390f35b6102c26109e0565b6040516102cf9190611c60565b60405180910390f35b6102e0610a0a565b6040516102ed9190611b9a565b60405180910390f35b610310600480360381019061030b9190611dbd565b610a9c565b005b61032c60048036038101906103279190611f32565b610ab2565b005b61034860048036038101906103439190611bf2565b610b14565b6040516103559190611b9a565b60405180910390f35b61037860048036038101906103739190611fb5565b610bbb565b6040516103859190611ae6565b60405180910390f35b6103a860048036038101906103a39190611d64565b610c4f565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061047557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610485575061048482610d47565b5b9050919050565b60606000805461049b90612024565b80601f01602080910402602001604051908101604052809291908181526020018280546104c790612024565b80156105145780601f106104e957610100808354040283529160200191610514565b820191906000526020600020905b8154815290600101906020018083116104f757829003601f168201915b5050505050905090565b600061052982610db1565b610568576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055f906120c8565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105ae826107e8565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561061f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106169061215a565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661063e610e1d565b73ffffffffffffffffffffffffffffffffffffffff16148061066d575061066c81610667610e1d565b610bbb565b5b6106ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a3906121ec565b60405180910390fd5b6106b68383610e25565b505050565b6000600754905090565b6106d66106d0610e1d565b82610ede565b610715576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070c9061227e565b60405180910390fd5b610720838383610fbc565b505050565b61072d610e1d565b73ffffffffffffffffffffffffffffffffffffffff1661074b6109e0565b73ffffffffffffffffffffffffffffffffffffffff16146107a1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610798906122ea565b60405180910390fd5b6107ad81600754611223565b600760008154809291906107c090612339565b919050555050565b6107e383838360405180602001604052806000815250610ab2565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610891576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610888906123f4565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561090b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090290612486565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61095a610e1d565b73ffffffffffffffffffffffffffffffffffffffff166109786109e0565b73ffffffffffffffffffffffffffffffffffffffff16146109ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c5906122ea565b60405180910390fd5b6109d86000611241565b565b60075481565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610a1990612024565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4590612024565b8015610a925780601f10610a6757610100808354040283529160200191610a92565b820191906000526020600020905b815481529060010190602001808311610a7557829003601f168201915b5050505050905090565b610aae610aa7610e1d565b8383611307565b5050565b610ac3610abd610e1d565b83610ede565b610b02576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af99061227e565b60405180910390fd5b610b0e84848484611474565b50505050565b6060610b1f82610db1565b610b5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5590612518565b60405180910390fd5b6000610b686114d0565b90506000815111610b885760405180602001604052806000815250610bb3565b80610b92846114e7565b604051602001610ba3929190612574565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610c57610e1d565b73ffffffffffffffffffffffffffffffffffffffff16610c756109e0565b73ffffffffffffffffffffffffffffffffffffffff1614610ccb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc2906122ea565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d329061260a565b60405180910390fd5b610d4481611241565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610e98836107e8565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610ee982610db1565b610f28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1f9061269c565b60405180910390fd5b6000610f33836107e8565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610fa257508373ffffffffffffffffffffffffffffffffffffffff16610f8a8461051e565b73ffffffffffffffffffffffffffffffffffffffff16145b80610fb35750610fb28185610bbb565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610fdc826107e8565b73ffffffffffffffffffffffffffffffffffffffff1614611032576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110299061272e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611099906127c0565b60405180910390fd5b6110ad838383611648565b6110b8600082610e25565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461110891906127e0565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461115f9190612814565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461121e83838361164d565b505050565b61123d828260405180602001604052806000815250611652565b5050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611376576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136d906128b6565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516114679190611ae6565b60405180910390a3505050565b61147f848484610fbc565b61148b848484846116ad565b6114ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114c190612948565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b6060600082141561152f576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611643565b600082905060005b6000821461156157808061154a90612339565b915050600a8261155a9190612997565b9150611537565b60008167ffffffffffffffff81111561157d5761157c611e07565b5b6040519080825280601f01601f1916602001820160405280156115af5781602001600182028036833780820191505090505b5090505b6000851461163c576001826115c891906127e0565b9150600a856115d791906129c8565b60306115e39190612814565b60f81b8183815181106115f9576115f86129f9565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856116359190612997565b94506115b3565b8093505050505b919050565b505050565b505050565b61165c8383611835565b61166960008484846116ad565b6116a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169f90612948565b60405180910390fd5b505050565b60006116ce8473ffffffffffffffffffffffffffffffffffffffff16611a0f565b15611828578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026116f7610e1d565b8786866040518563ffffffff1660e01b81526004016117199493929190612a7d565b6020604051808303816000875af192505050801561175557506040513d601f19601f820116820180604052508101906117529190612ade565b60015b6117d8573d8060008114611785576040519150601f19603f3d011682016040523d82523d6000602084013e61178a565b606091505b506000815114156117d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117c790612948565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061182d565b600190505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156118a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161189c90612b57565b60405180910390fd5b6118ae81610db1565b156118ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118e590612bc3565b60405180910390fd5b6118fa60008383611648565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461194a9190612814565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611a0b6000838361164d565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611a7b81611a46565b8114611a8657600080fd5b50565b600081359050611a9881611a72565b92915050565b600060208284031215611ab457611ab3611a3c565b5b6000611ac284828501611a89565b91505092915050565b60008115159050919050565b611ae081611acb565b82525050565b6000602082019050611afb6000830184611ad7565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b3b578082015181840152602081019050611b20565b83811115611b4a576000848401525b50505050565b6000601f19601f8301169050919050565b6000611b6c82611b01565b611b768185611b0c565b9350611b86818560208601611b1d565b611b8f81611b50565b840191505092915050565b60006020820190508181036000830152611bb48184611b61565b905092915050565b6000819050919050565b611bcf81611bbc565b8114611bda57600080fd5b50565b600081359050611bec81611bc6565b92915050565b600060208284031215611c0857611c07611a3c565b5b6000611c1684828501611bdd565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c4a82611c1f565b9050919050565b611c5a81611c3f565b82525050565b6000602082019050611c756000830184611c51565b92915050565b611c8481611c3f565b8114611c8f57600080fd5b50565b600081359050611ca181611c7b565b92915050565b60008060408385031215611cbe57611cbd611a3c565b5b6000611ccc85828601611c92565b9250506020611cdd85828601611bdd565b9150509250929050565b611cf081611bbc565b82525050565b6000602082019050611d0b6000830184611ce7565b92915050565b600080600060608486031215611d2a57611d29611a3c565b5b6000611d3886828701611c92565b9350506020611d4986828701611c92565b9250506040611d5a86828701611bdd565b9150509250925092565b600060208284031215611d7a57611d79611a3c565b5b6000611d8884828501611c92565b91505092915050565b611d9a81611acb565b8114611da557600080fd5b50565b600081359050611db781611d91565b92915050565b60008060408385031215611dd457611dd3611a3c565b5b6000611de285828601611c92565b9250506020611df385828601611da8565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611e3f82611b50565b810181811067ffffffffffffffff82111715611e5e57611e5d611e07565b5b80604052505050565b6000611e71611a32565b9050611e7d8282611e36565b919050565b600067ffffffffffffffff821115611e9d57611e9c611e07565b5b611ea682611b50565b9050602081019050919050565b82818337600083830152505050565b6000611ed5611ed084611e82565b611e67565b905082815260208101848484011115611ef157611ef0611e02565b5b611efc848285611eb3565b509392505050565b600082601f830112611f1957611f18611dfd565b5b8135611f29848260208601611ec2565b91505092915050565b60008060008060808587031215611f4c57611f4b611a3c565b5b6000611f5a87828801611c92565b9450506020611f6b87828801611c92565b9350506040611f7c87828801611bdd565b925050606085013567ffffffffffffffff811115611f9d57611f9c611a41565b5b611fa987828801611f04565b91505092959194509250565b60008060408385031215611fcc57611fcb611a3c565b5b6000611fda85828601611c92565b9250506020611feb85828601611c92565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061203c57607f821691505b602082108114156120505761204f611ff5565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b60006120b2602c83611b0c565b91506120bd82612056565b604082019050919050565b600060208201905081810360008301526120e1816120a5565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612144602183611b0c565b915061214f826120e8565b604082019050919050565b6000602082019050818103600083015261217381612137565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b60006121d6603883611b0c565b91506121e18261217a565b604082019050919050565b60006020820190508181036000830152612205816121c9565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6000612268603183611b0c565b91506122738261220c565b604082019050919050565b600060208201905081810360008301526122978161225b565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006122d4602083611b0c565b91506122df8261229e565b602082019050919050565b60006020820190508181036000830152612303816122c7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061234482611bbc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156123775761237661230a565b5b600182019050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b60006123de602983611b0c565b91506123e982612382565b604082019050919050565b6000602082019050818103600083015261240d816123d1565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000612470602a83611b0c565b915061247b82612414565b604082019050919050565b6000602082019050818103600083015261249f81612463565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000612502602f83611b0c565b915061250d826124a6565b604082019050919050565b60006020820190508181036000830152612531816124f5565b9050919050565b600081905092915050565b600061254e82611b01565b6125588185612538565b9350612568818560208601611b1d565b80840191505092915050565b60006125808285612543565b915061258c8284612543565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006125f4602683611b0c565b91506125ff82612598565b604082019050919050565b60006020820190508181036000830152612623816125e7565b9050919050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612686602c83611b0c565b91506126918261262a565b604082019050919050565b600060208201905081810360008301526126b581612679565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612718602583611b0c565b9150612723826126bc565b604082019050919050565b600060208201905081810360008301526127478161270b565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006127aa602483611b0c565b91506127b58261274e565b604082019050919050565b600060208201905081810360008301526127d98161279d565b9050919050565b60006127eb82611bbc565b91506127f683611bbc565b9250828210156128095761280861230a565b5b828203905092915050565b600061281f82611bbc565b915061282a83611bbc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561285f5761285e61230a565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006128a0601983611b0c565b91506128ab8261286a565b602082019050919050565b600060208201905081810360008301526128cf81612893565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612932603283611b0c565b915061293d826128d6565b604082019050919050565b6000602082019050818103600083015261296181612925565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006129a282611bbc565b91506129ad83611bbc565b9250826129bd576129bc612968565b5b828204905092915050565b60006129d382611bbc565b91506129de83611bbc565b9250826129ee576129ed612968565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b6000612a4f82612a28565b612a598185612a33565b9350612a69818560208601611b1d565b612a7281611b50565b840191505092915050565b6000608082019050612a926000830187611c51565b612a9f6020830186611c51565b612aac6040830185611ce7565b8181036060830152612abe8184612a44565b905095945050505050565b600081519050612ad881611a72565b92915050565b600060208284031215612af457612af3611a3c565b5b6000612b0284828501612ac9565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612b41602083611b0c565b9150612b4c82612b0b565b602082019050919050565b60006020820190508181036000830152612b7081612b34565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612bad601c83611b0c565b9150612bb882612b77565b602082019050919050565b60006020820190508181036000830152612bdc81612ba0565b905091905056fea2646970667358221220c70ce3fffc2d24b73488b7db0f166167ca0286cda97532c880879754528dfaab64736f6c634300080b0033";
    static readonly abi: ({
        inputs: never[];
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
    static createInterface(): BurgerNFTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BurgerNFT;
}
