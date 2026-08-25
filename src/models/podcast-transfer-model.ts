import { PodcastModel } from './podcast-model';

export interface PodcastTransferModel {
  statuCode: number;
  body: PodcastModel[];
}
