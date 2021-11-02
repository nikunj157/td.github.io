function scoreAd(adMetadata, bid, auctionConfig, trustedScoringSignals, browserSignals) {
  // Seller totally aligned with the buyer.
  return bid;
}

function reportResult(auctionConfig, browserSignals) {
  return {
    'success': true,
    'signalsForWinner': {'signalForWinner': 1},
    'reportUrl': 'https://td-1ha7.onrender.com/scripts/fakeEndPoint',
  };
}
