import global from './enUS/global'
import { Language } from "./type"

const locale = {
  ...global,
  'preMiner.days': 'Days',
  'preMiner.hours': 'Hours',
  'preMiner.mins': 'Mins',
  'preMiner.left': 'Left',
  'preMiner.unstake': 'unstake {n}',
  'preMiner.stake': 'stake {n}',
  'preMiner.volumeMined': 'Volume Mined',
  'preMiner.youStake': 'Your Staked',
  'preMiner.ofTotal': 'of Total',
  'preMiner.yourCoinEarn': '{coinName} Your Earn',

  'home.statistics': 'Statistics',
  'home.totalLiquidity': 'Total Liquidity',
  'home.volume': 'Volume',
  'home.priceMGS': 'Price MGS',
  'home.pools': 'Pools',
  'home.tokens': 'Tokens',
  'home.name': 'Name',
  'home.liquidity': 'Liquidity',
  'home.symbol': 'Symbol',
  'home.Volume24': 'Volume(24hrs)',
  'home.Volume7d': 'Volume (7d)',
  'home.fees24h': 'Fees(24hrs)',
  'home.fees1y': '1y Fees/ Liquidity',
  'home.Action': 'Action',
  'home.price': 'Price',
  'home.priceChange24h': 'Price Change (24hrs)',
  'home.Search': 'Search',
  'home.SearchMangoSwap': 'Search MangoSwap',
  'home.SearchPairsAndTokens': 'Search pairs and tokens...',
  'home.SearchMangoSwapPairsAndTokens': 'Search MangoSwap pairs and tokens...',
  'home.volumeAnnualized': 'Based on 24hr volume annualized',
  'home.pairs': 'Pairs',
  'home.noResults': 'No results',
  'home.seeMore': 'See more',
  'home.topText': 'The first AMM and yield farm on OkexChain',


  'menu.Home': 'Home',
  'menu.Trade': 'Trade',
  'menu.Farms': 'Farms',
  'menu.Pools': 'Pools',
  'menu.Info': 'Info',
  'menu.IFO': 'IFO',
  'menu.More': 'More',
  'menu.Exchange': 'Exchange',
  'menu.Liquidity': 'Liquidity',
  'menu.Overview': 'Overview',
  'menu.Tokens': 'Tokens',
  'menu.Pairs': 'Pairs',
  'menu.Accounts': 'Accounts',
  'menu.Contect': 'Contect',
  'menu.Github': 'Github',
  'menu.Docs': 'Docs',
  'menu.Blog': 'Blog',
  'menu.connect': 'Connect',
  'menu.Twitter': 'Twitter',
  'menu.Facebook': 'Facebook',
  'menu.Telegram': 'Telegram',
  'menu.Medium': 'Medium',


  'swap.swap': 'Swap',
  'swap.liquidity': 'Liquidity',
  'swap.exchange': 'Exchange',
  'swap.exchangeInfo': 'Trade tokens in an instant',
  'swap.from': 'From',
  'swap.FromEstimated': 'From (estimated)',
  'swap.to': 'To',
  'swap.toEstimated': 'To (estimated)',
  'swap.addSend': 'Add a send (optional)',
  'swap.removeSend': 'Remove send',
  'swap.insufficientLiquidity': 'Insufficient liquidity for this trade.',
  'swap.approving': 'Approving',
  'swap.approved': 'Approved',
  'swap.approve': 'Approve',
  'swap.priceImpactHigh': 'Price Impact High',
  'swap.balance': 'Balance',
  'swap.max': 'MAX',
  'swap.selectToken': 'Select a token',
  'swap.selectTokenHint': 'Find a token by searching for its name or symbol or by pasting its address below.',
  'swap.selectTokenPlaceholder': 'token search placeholder',
  'swap.selectTokenInput': 'Search name or paste address',
  'swap.selectCurrency': 'Select a currency',
  'swap.enterAmount': 'Enter an amount',
  'swap.tokenName': 'Token name',
  'swap.settings': 'Settings',
  'swap.slippageTolerance': 'Slippage tolerance',
  'swap.slippageHint': 'Your transaction will revert if the price changes unfavorably by more than this percentage.',
  'swap.slippageToleranceZero1': 'Your transaction may fail',
  'swap.slippageToleranceNotInput': 'Enter a valid slippage percentage',
  'swap.slippageToleranceError': 'Your transaction may be frontrun',
  'swap.transactionDeadline': 'Transaction deadline',
  'swap.transactionDeadlineNotInput': 'Enter a valid deadline',
  'swap.minutes': 'Minutes',
  'swap.transactionDeadlineHint': 'Your transaction will revert if it is pending for more than this long.',
  'swap.recentTransactions': 'Recent transactions',
  'swap.approveUSDT': 'Approve USDT',
  'swap.price': 'Price',
  'swap.minimumReceived': 'Minimum received',
  'swap.maximumSold': 'Maximum sold',
  'swap.minimumReceivedHint': 'Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.',
  'swap.priceImpact': 'Price Impact',
  'swap.priceImpactHint': 'The difference between the market price and estimated price due to trade size.',
  'swap.priceImpactHintSec': 'The difference between the market price and your price due to trade size.',
  'swap.liquidityProviderFee': 'Liquidity Provider Fee',
  'swap.liquidityProviderFeeHint': 'For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the MangoSwap treasury.',
  'swap.swapButtonError': 'Price Impact Too High',
  'swap.swapButtonInputError': 'Insufficient OKT balance',
  'swap.unlockWallet': 'Unlock Wallet',
  'swap.connectWalletInfo': 'Please connect your wallet to view your recent transactions',
  'swap.connectWallet': 'Connect to a wallet',
  'swap.learnConnectWallet': 'Learn how to connect',
  'swap.change': 'Change',
  'swap.selectList': 'Select a list',
  'swap.connectWallet2': 'Connect Wallet',
  'swap.invalidPair': 'Invalid pair',
  'swap.enterRecipient': 'Enter a recipient',
  'swap.invalidRecipient': 'Invalid recipient',
  'swap.swapAnyway': 'Swap Anyway',
  'swap.route': 'Route',
  'swap.routeTokens': 'Routing through these tokens resulted in the best price for your trade.',
  'swap.balanceInsufficient': 'Insufficient {symbol} balance',
  'swap.tokenStakePool': 'You’ll need {tokenSymbol} to stake in this pool!',
  'swap.buyTokenHint': 'Buy some {tokenSymbol}, or make sure your {tokenSymbol} isn’t in another pool or LP.',
  'swap.buyToken': 'Buy {tokenSymbol}',
  'swap.tokenRequired': '{tokenSymbol} required',
  'swap.locateAssets': 'Locate Assets',
  'swap.closeWindow': 'Close window',

  'pool.liquidity': 'Liquidity',
  'pool.addLiquidity': 'Add Liquidity',
  'pool.addLiquidityHint': 'Add liquidity to receive LP tokens',
  'pool.yourLiquidity': 'Your Liquidity',
  'pool.yourLiquidityHint': 'When you add liquidity, you are given pool tokens that represent your share. If you don’t see a pool you joined in this list, try importing a pool below.',
  'pool.connectWalletLiquidity': 'Connect to a wallet to view your liquidity.',
  'pool.noLiquidity': 'No liquidity found.',
  'pool.loading': 'Loading',
  'pool.notSeePool': "Don't see a pool you joined?",
  'pool.importIt': "Import it.",
  'pool.pooled': "Pooled {symbolName}",
  'pool.yourPoolTokens': "Your pool tokens:",
  'pool.yourPoolShare': "Your pool share:",
  'pool.remove': "Remove",
  'pool.noTransactions': "No recent transactions",
  'pool.unstakeTokensHint': "Or, if you staked your LP tokens in a farm, unstake them to see them here.",

  'find.connectWalletPools': "Connect to a wallet to find pools",
  'find.add': "Add",
  'find.remove': "Remove",
  'find.importPool': "Import Pool",
  'find.importPoolHint': "Use this tool to find pairs that do not automatically appear in the interface.",
  'find.selectToken': "Select a Token",
  'find.selectTokenInfo': "Select a token to find your liquidity.",
  'find.yourLiquidityHint': 'When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.',
  'find.removeTokensHint': 'Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.',
  'find.poolFound': 'Pool found!',
  'find.notLiquidityPool': 'You don’t have liquidity in this pool yet.',
  'find.noPoolFound': "No pool found.",
  'find.createPool': "Create pool.",
  'find.invalidPair': "Invalid pair.",

  'add.creatingPool': 'You are creating a pool',
  'add.youWillReceive': 'You will receive',
  'add.firstProviderHint': 'You are the first liquidity provider.',
  'add.pricePoolHint': 'The ratio of tokens you add will set the price of this pool.',
  'add.clickSupplyHint': 'Once you are happy with the rate click supply to review.',
  'add.initialPriceAndPool': 'INITIAL PRICES AND POOL SHARE',
  'add.priceAndPool': 'PRICES AND POOL SHARE',
  'add.supply': 'Supply',
  'add.input': 'Input',
  'add.lpTokens': 'LP TOKENS IN YOUR WALLET',
  'add.shareOfPool': 'Share of Pool',
  'add.symbolDeposited': '{symbol} Deposited',
  'add.rates': 'Rates',
  'add.createPoolSupply': 'Create Pool & Supply',
  'add.confirmSupply': 'Confirm Supply',

  'farms.farms': 'Farms',
  'farms.stakeLiquidityPool': 'Stake Liquidity Pool (LP) tokens to earn.',
  'farms.stakedOnly': 'Staked only',
  'farms.sortBy': 'SORT BY',
  'farms.search': 'SEARCH',
  'farms.hot': 'Hot',
  'farms.apr': 'APR',
  'farms.multiplier': 'Multiplier',
  'farms.earned': 'Earned',
  'farms.liquidity': 'Liquidity',
  'farms.details': 'Details',
  'farms.searchFarms': 'Search...',
  'farms.toTop': 'To Top',
  'farms.rowTableLabel': '{label2}',
  'farms.totalFunds': "The total value of the funds in this farm's liquidity pool",
  'farms.multiplierRepresents': 'The multiplier represents the amount of MGS rewards each farm gets.',
  'farms.multiplierNumberRatio': 'For example, if a 1x farm was getting 1 MGS per block, a {number}x farm would be getting {number2} MGS per block.',
  'farms.totalLiquidity': 'Total Liquidity',
  'farms.viewContract': 'View Contract',
  'farms.seePairInfo': 'See Pair Info',
  'farms.startFarming': 'START FARMING',
  'farms.staked': 'STAKED',
  'farms.stake': 'STAKE',
  'farms.stakeLP': 'Stake LP',
  'farms.enableFarm': 'ENABLE FARM',
  'farms.enable': 'Enable',

  'farms.live': 'Live',
  'farms.finished': 'Finished',
  'farms.paused': 'Paused',
  'farms.earn': 'Earn',
  'farms.approveContract': 'Approve Contract',
  'farms.harvest': 'Harvest',
  'farms.yourEarn': 'earned',
  'farms.compound': 'Compound',
  'farms.unstakeType': 'Unstake {initType}',
  'farms.yourStaked': 'Your Staked',
  'farms.waitForConfirmation': 'Waiting for confirmation',
  'farms.detailsHide': 'Hide',
  'farms.detailsOpen': 'Details',
  'farms.stakeLPTokens': 'Stake LP tokens',
  'farms.stakeSingle': 'Stake',
  'farms.cancel': 'Cancel',
  'farms.pendingConfirmation': 'Pending Confirmation',
  'farms.confirm': 'Confirm',
  'farms.get': 'Get',

  // 补充
  'farms.timeframe': 'TIMEFRAME',
  'farms.roi': 'ROI',
  'farms.calculatedInfo': 'Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.',

  'pools.depositTokens': 'Deposit {typeParam} Tokens',
  'pools.withdrawTokens': 'Withdraw {typeParam} Tokens',
  'pools.input': 'input',
  'pools.addToMetamask': 'Add to Metamask',
  'pools.mangoPOOLS': 'TelegramX Pools',
  'pools.mangoPOOLSInfo': 'Stake OKT to earn new tokens.You can unstake at any time.Rewards are calculated per block.',

  'ifo.applyFor': 'Apply for',
  'ifo.yourProject': 'Your Project',
  'ifo.createIFO': 'Create a IFO for your token',
  'ifo.applyNow': 'Apply now',
  'ifo.launchTime': 'Launch Time',
  'ifo.forSale': 'For Sale',
  'ifo.raiseUSD': 'To Raise(USD)',
  'ifo.totalRaised': 'Total Raised(% of target)',
  'ifo.totalBurn': 'Total burn',
  'ifo.launchIFOHint': 'Want to launch your own IFO?',
  'ifo.launchProject': 'Launch your project with MangoSwap, Okchain&apos;s most popular AMM program and liquidity provider, to bring your tokens directly to the most active and fast-growing community on Okchain.',
  'ifo.takePartHint': 'How to Take Part',
  'ifo.activateProfile': 'Activate your Profile',
  'ifo.activatePartIFo': 'You’ll need an active MangoSwap Profile to take part in an IFO!',
  'ifo.stakeLiquidity': 'Stake OKT and ASD in the liquidity pool to get LP tokens.',
  'ifo.buySaleTokens': 'You’ll spend them to buy IFO sale tokens.',
  'ifo.getLPTokens': 'Get LP tokens',
  'ifo.commitLPTokens': 'Commit LP Tokens',
  'ifo.salesLive': 'When the IFO sales are live, you can “commit” your LP tokens to buy the tokens being sold.',
  'ifo.recommendCommit': 'We recommend committing to the Basic Sale first, but you can do both if you want.',
  'ifo.claimTokens': 'Claim your tokens and achievement',
  'ifo.afterSalesFinish': 'After the IFO sales finish,you can claim any IFO tokens that you bought,and any unspent OKT-ASD LP tokens will be returned to your wallet.',
  'ifo.foldableText': '{text}',
  'ifo.initialFarm': 'IFO: Initial Farm Offerings',
  'ifo.buyTokens': 'Buy new tokens with a brand new token sale model.',
  'ifo.nextIfo': 'Next IFO',
  'ifo.pastIfos': 'Past IFOs',
  'ifo.viewProjectSite': 'View project site',
  'ifo.totalCommitted': 'Total committed',
  'ifo.end': 'End',
  'ifo.untilStart': 'Until start',
  'ifo.YOUR_LP_TOKENS_COMMITTED': 'YOUR LP TOKENS COMMITTED',
  'ifo.TO_RECEIVE': 'TO RECEIVE',
  'ifo.ofTotal': 'of total',
  'ifo.Hide': 'Hide',
  'ifo.Detail': 'Detail',
  'ifo.nothingtoClaim': 'Nothing to Claim',
  'ifo.overToken': `You'll be refunded any excess tokens when you claim`,
  'ifo.toReclaim': 'to reclaim',

  'question1': 'What’s the difference between a Basic Sale and Unlimited Sale?',
  'description1forQ1': 'In the Basic Sale, every user can commit a maximum of about 100 USD worth of MGS-OKT LP Tokens. We calculate the maximum LP amount about 30 minutes before each IFO. The Basic Sale has no participation fee.',
  'description2forQ1': 'In the Unlimited Sale, there’s no limit to the amount of MGS-OKT LP Tokens you can commit. However, there’s a fee for participation: see below.',
  
  'question2': 'Which sale should I commit to? Can I do both?',
  'description1forQ2': 'You can choose one or both at the same time! If you’re only committing a small amount, we recommend the Basic Sale first. Just remember you need a MangoSwap Profile in order to participate.',
  
  'question3': 'How much is the participation fee?',
  'description1forQ3': 'There’s only a participation fee for the Unlimited Sale: there’s no fee for the Basic Sale.',
  'description2forQ3': 'The fee will start at 1%.',
  'description3forQ3': 'The 1% participation fee decreases in cliffs, based on the percentage of overflow from the “Unlimited” portion of the sale.',
  
  'question4': 'Where does the participation fee go?',
  'description1forQ4': 'We burn it. The MGS-OKT LP tokens from the participation fee will be decomposed, then we use the OKT portion to market buy the MGS equivalent, then finally throw all of the MGS into the weekly token burn.',
  
  'question5': 'How can I get an achievement for participating in the IFO?',
  'description1forQ5': 'You need to contribute a minimum of about 10 USD worth of MGS-OKT LP Tokens to either sale.',
  'description2forQ5': 'You can contribute to one or both, it doesn’t matter: only your overall contribution is counted for the achievement.',


  // 补充添加
  'supple.transactionSubmitted': 'Transaction submitted',
  'supple.viewOklink': 'View on oklink',
  'supple.close': 'Close',
  'supple.confirmSwap': 'Confirm Swap',
  'supple.priceUpdated': 'Price Updated',
  'supple.accept': 'Accept',
  'supple.outputEstimated': 'Output is estimated. You will receive at least ',
  'supple.transactionRevert': ' or the transaction will revert.',
  'supple.inputEstimated': 'Input is estimated. You will sell at most ',
  'supple.outputSent': 'Output will be sent to',
  'supple.feePaid': 'For each trade a 0.3% fee is paid. 0.15% goes to liquidity providers and 0.05% goes to the MangoSwap treasury and 0.10% goes to burn.',
  'supple.confirmTransaction': 'Confirm this transaction in your wallet',
  'supple.recipient': 'Recipient',
  'supple.viewBscScan': '(View on BscScan)',
  'supple.walletAddress': 'Wallet Address or ENS name',
  'supple.tokenImported': 'Token imported',
  'supple.createHint': 'Anyone can create and name any KIP20 token on OKExchain, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.',
  'supple.interfaceHint': 'This interface can load arbitrary tokens by token addresses. Please take extra caution and do your research when interacting with arbitrary KIP20 tokens.',
  'supple.purchaseHint': 'If you purchase an arbitrary token, you may be unable to sell it back.',
  'supple.IUnderstand': 'I understand',
  'supple.continue': 'Continue',
  'supple.error': 'Error',
  'supple.dismiss': 'Dismiss',



  'fetch.transactionTokensIssue': 'The transaction cannot succeed due to error: {reason}. This is probably an issue with one of the tokens you are swapping.',
  'fetch.transactionTransfer': 'This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.',
  'fetch.gasUnexpected': 'Unexpected issue with estimating the gas. Please try again.',
  'fetch.missDependencies': 'Missing dependencies',
  'fetch.contactSupportError': 'Unexpected error. Please contact support: none of the calls threw an error',
  'fetch.transactionRejected': 'Transaction rejected.',
  'fetch.swapFailed': 'Swap failed: {message}',



}

const EnUs: Language = { code: 'enUS', language: 'English', locale }
export default EnUs