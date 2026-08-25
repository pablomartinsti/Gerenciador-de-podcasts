import { PodcastTransferModel } from '../models/podcast-transfer-model';
import { repositoryPodcast } from '../repositories/podcast-repository';
import { StatusCode } from '../utils/status-code';

export const serviceFilterCategory = async (category: string | undefined): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statuCode: 0,
    body: []
  };

  const queryString = category?.split('?c=')[1] || '';

  const data = await repositoryPodcast(undefined, queryString);

  responseFormat.statuCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

  responseFormat.body = data;

  return responseFormat;
};
