import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BurgerNFT is ERC721, Ownable{
    using Counters for Counters.Counter;

    uint public _tokenIdCounter = 0;

    constructor() ERC721("BurgerNFT", "BURGER"){}

    function safeMint(address to) public onlyOwner {
        _safeMint(to, _tokenIdCounter);
        _tokenIdCounter++;
    }

    /*
    function checkTokenBalance(address _tokenBalanceAddress) public view returns (uint256)
    {
        IERC20 tokenBalanceContract = IERC20(_tokenBalanceAddress);
        uint256 tokenBalance = tokenBalanceContract.balanceOf(address(this));
        return tokenBalance;
    }
    */
}
