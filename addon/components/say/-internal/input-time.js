import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../../../templates/components/say/-internal/input-time';

export default class SayInternalInputTimeComponent extends Component {
  layout = layout
  
  tagName = ""

  @computed('minutes')
  get minutesString() {
    const prefixedString = "00" + ( this.minutes || 0 );
    return prefixedString.substr( prefixedString.length - 2 );
  }
}
