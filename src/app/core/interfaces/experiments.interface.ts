export enum ExperimentState {
  PREPARED = 'PREPARED',
  RUNNING = 'RUNNING',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR',
}

export interface Experiments {
  id: string;
  name: string;
  duration: number;
  state: ExperimentState;
}
