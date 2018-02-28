export const PORTFOLIO_UPDATE = 'PORTFOLIO_UPDATE';
export const PORTFOLIO_CLOSE = 'PORTFOLIO_CLOSE';

export function updatePortfolio(d) {
  return { type: PORTFOLIO_UPDATE, payload: d }
}
export function closePortfolio() {
  return { type: PORTFOLIO_CLOSE }
}
