import Stream from './Stream';
import {getTracks} from '../actions/trackActions';

import {renderComponent, expect} from '../../test/TestUtils';

describe("#Stream", () => {
    let component;
    const props = {
        tracks: [{title: "title 1"}, {title: "title 2"}],
        getTracks: getTracks
    };
    beforeEach(() => {
        component = renderComponent(Stream, props);
    });

    it("should have two elements", () => {
        expect(component.find('.track')).to.have.lengthOf(2);
    })
});