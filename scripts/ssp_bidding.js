function scoreAd(adMetadata, bid, auctionConfig, trustedScoringSignals, browserSignals) {
  // Seller totally aligned with the buyer.
  return bid;
}

function reportResult(auctionConfig, browserSignals) {
  return {
    'success': true,
    'signalsForWinner': {'signalForWinner': 1},
    'reportUrl': 'https://nikunja.users.x20web.corp.google.com/td/scripts/fakeEndPoint',
  };
}
