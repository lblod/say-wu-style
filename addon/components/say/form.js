import { action } from '@ember/object';
import Component from '@ember/component';
import layout from '../../templates/components/say/form';

export default class SayFormComponent extends Component {
  layout = layout

  tagName = ""

  @action
  handleSubmit(event) {
    event.preventDefault();

    if( this.onSubmit ) {
      console.log('Calling submit action');
      this.onSubmit();
    } else {
      console.log('Submit event requested with no submit action supplied');
    }
  }
}
