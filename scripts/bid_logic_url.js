function generateBid(
    interestGroup, auctionSignals, perBuyerSignals, trustedBiddingSignals,
    browserSignals) {
  let max_bid_index = 0;
  for (let i in interestGroup.ads) {
  	if (interestGroup.ads[i].metadata.bid > interestGroup.ads[max_bid_index].metadata.bid) max_bid_index = i;
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
