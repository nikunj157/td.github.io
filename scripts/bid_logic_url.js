function generateBid(
    interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals,
    browserSignals) {
  int max_bid_index=0;
  for (let i in interestGroup.ads) {
  	if (interestGroup.ads[i].metadata.bid > interestGroup.ads[i].metadata.max_bid_index) max_bid_index = i;
  }
  const ad = interestGroup.ads[max_bid_index];
  
  return {'ad': 'anything',
          'bid': ad.metadata.bid,
          'render': ad.renderUrl};
}

function reportWin(
  auctionSignals, perBuyerSignals, sellerSignals, browserSignals) {
  sendReportTo("https://td-1ha7.onrender.com/scripts/fakeEndPoint");
}
