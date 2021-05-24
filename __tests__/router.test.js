/**
 * @jest-environment jsdom
 */

import { pushToHistory } from "../scripts/router";
describe('pushToHistory test', () => {
    test('settings page', () => {
        const test = pushToHistory('settings');
        expect(test.state.page).toEqual('settings');
        expect(test.length).toEqual(history.length);
    });

    test('entry page', () => {
        const test = pushToHistory('entry', 1);
        expect(test.state.page).toEqual('entry1');
        expect(test.length).toEqual(history.length);
    });

    test('default page', () => {
        const test = pushToHistory('default case');
        expect(test.state.page).toEqual(undefined);
        expect(test.length).toEqual(history.length);
    });
});