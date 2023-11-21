// @ts-nocheck
//Requests & Services
import { PortfolioService } from '@fintekkers/ledger-models/node/wrappers/services/portfolio-service/PortfolioService';
import type { PortfolioProto } from '@fintekkers/ledger-models/node/fintekkers/models/portfolio/portfolio_pb';
import type { ServiceError } from '@grpc/grpc-js';

import { FieldProto } from '@fintekkers/ledger-models/node/fintekkers/models/position/field_pb';
import * as uuid from '@fintekkers/ledger-models/node/wrappers/models/utils/uuid';
import * as dt from '@fintekkers/ledger-models/node/wrappers/models/utils/datetime';
 
/** */
export async function load() {
	const now = dt.ZonedDateTime.now();
  
	const portfolioService = new PortfolioService();

	console.log('portfolioService', FieldProto.PORTFOLIO_NAME);
	const portfolioData = portfolioService.searchPortfolio(now.toProto(), FieldProto.PORTFOLIO_NAME, 'Federal Reserve SOMA Holdings')
	.then((portfolios: PortfolioProto[]) => {
		const results = portfolios.map((portfolio) => {
			console.log(portfolio.getPortfolioName());
			console.log(uuid.UUID.fromU8Array(portfolio.getUuid()!.getRawUuid_asU8()).toString());

			return {
				portfolioName: portfolio.getPortfolioName(),
				portfolioId: uuid.UUID.fromU8Array(portfolio.getUuid()!.getRawUuid_asU8()).toString(),
			}
		});

		return results;
	}).catch((err: ServiceError) => {
		return { }
	});

	return { portfolioData };

}