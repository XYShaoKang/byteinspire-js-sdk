import InspireCloud from './inspirecloud';

export default class Module {
  inspirecloud: InspireCloud;

  name: string = '';

  // eslint-disable-next-line no-undef
  [propName: string]: any;

  constructor(inspirecloud: InspireCloud) {
    this.inspirecloud = inspirecloud;
  }
}
