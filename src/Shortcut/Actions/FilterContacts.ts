import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import FilterAction from '@/Shortcut/Actions/Filter';

export default class FilterContactsAction extends FilterAction {
    constructor(object: any) {
        super(() => 'Find Contacts Where', object, () => ActionComponent, () => '⚙️');
    }
}
