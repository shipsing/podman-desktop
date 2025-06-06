/**********************************************************************
 * Copyright (C) 2023-2024 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

/* eslint-disable @typescript-eslint/no-explicit-any */

import '@testing-library/jest-dom/vitest';

import { render, screen, within } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { beforeAll, describe, expect, test, vi } from 'vitest';

import type { InputBoxOptions, QuickPickOptions } from './quickpick-input';
import QuickPickInput from './QuickPickInput.svelte';

const receiveFunctionMock = vi.fn();
// mock some methods of the window object
beforeAll(() => {
  (window.events as unknown) = {
    receive: receiveFunctionMock,
  };

  vi.mocked(window.sendShowQuickPickOnSelect).mockResolvedValue(undefined);
  vi.mocked(window.sendShowQuickPickValues).mockResolvedValue(undefined);
});

describe('QuickPickInput', () => {
  test('Expect that esc key is sending an answer', async () => {
    const idRequest = 123;

    const quickPickOptions: QuickPickOptions = {
      items: ['item1', 'item2'],
      canPickMany: false,
      placeHolder: 'placeHolder',
      prompt: '',
      id: idRequest,
      onSelectCallback: false,
    };

    receiveFunctionMock.mockImplementation((message: string, callback: (options: QuickPickOptions) => void) => {
      if (message === 'showQuickPick:add') {
        callback(quickPickOptions);
      }
    });

    render(QuickPickInput, {});
    // now, press the ESC key
    await userEvent.keyboard('{Escape}');

    // check we received the answer for showQuickPick
    expect(window.sendShowQuickPickValues).toBeCalledWith(idRequest);

    // and not for showInputBox
    expect(window.sendShowInputBoxValue).not.toBeCalled();
  });

  test('Expect that title is displayed', async () => {
    const idRequest = 123;

    const quickPickOptions: QuickPickOptions = {
      items: ['item1', 'item2'],
      title: 'My custom title',
      canPickMany: false,
      placeHolder: 'placeHolder',
      prompt: '',
      id: idRequest,
      onSelectCallback: false,
    };

    receiveFunctionMock.mockImplementation((message: string, callback: (options: QuickPickOptions) => void) => {
      if (message === 'showQuickPick:add') {
        callback(quickPickOptions);
      }
    });

    render(QuickPickInput, {});

    const title = await screen.findByText('My custom title');
    expect(title).toBeInTheDocument();
  });

  test('Expect that description and detail is displayed', async () => {
    const idRequest = 123;

    const quickPickOptions: QuickPickOptions = {
      items: [
        { label: 'item1', description: 'my description1', detail: 'my detail1' },
        { label: 'item2', description: 'my description2', detail: 'my detail2' },
      ],
      canPickMany: false,
      placeHolder: 'placeHolder',
      prompt: '',
      id: idRequest,
      onSelectCallback: false,
    };

    receiveFunctionMock.mockImplementation((message: string, callback: (options: QuickPickOptions) => void) => {
      if (message === 'showQuickPick:add') {
        callback(quickPickOptions);
      }
    });

    render(QuickPickInput, {});

    const item1 = await screen.findByText('item1');
    expect(item1).toBeInTheDocument();
    const itemDescription1 = await screen.findByText('my description1');
    expect(itemDescription1).toBeInTheDocument();
    const itemDetail1 = await screen.findByText('my detail1');
    expect(itemDetail1).toBeInTheDocument();

    const item2 = await screen.findByText('item2');
    expect(item2).toBeInTheDocument();
    const itemDescription2 = await screen.findByText('my description2');
    expect(itemDescription2).toBeInTheDocument();
    const itemDetail2 = await screen.findByText('my detail2');
    expect(itemDetail2).toBeInTheDocument();
  });

  test('Expect that description is displayed', async () => {
    const idRequest = 123;

    const inputBoxOptions: InputBoxOptions = {
      multiline: false,
      validate: false,
      placeHolder: '',
      prompt: '',
      markdownDescription: 'Enter a value',
      id: idRequest,
    };

    receiveFunctionMock.mockImplementation((message: string, callback: (options: InputBoxOptions) => void) => {
      if (message === 'showInputBox:add') {
        callback(inputBoxOptions);
      }
    });

    render(QuickPickInput, {});

    const section = await screen.findByLabelText('markdown-content');
    expect(section).toBeInTheDocument();
    const paragraph = within(section).findByText(/Enter a value/g);
    expect(paragraph).toBeDefined();
  });

  test('Expect that markdown description is displayed', async () => {
    const idRequest = 123;

    const inputBoxOptions: InputBoxOptions = {
      multiline: false,
      validate: false,
      placeHolder: '',
      prompt: '',
      markdownDescription: 'Enter a value [See](https://podman-desktop.io)',
      id: idRequest,
    };

    receiveFunctionMock.mockImplementation((message: string, callback: (options: InputBoxOptions) => void) => {
      if (message === 'showInputBox:add') {
        callback(inputBoxOptions);
      }
    });

    render(QuickPickInput, {});

    const section = await screen.findByLabelText('markdown-content');
    expect(section).toBeInTheDocument();
    const paragraph = await within(section).findByText(/Enter a value/g);
    expect(paragraph).toBeInTheDocument();
    const link = await within(paragraph).findByRole('link');
    expect(link).toBeInTheDocument();
  });

  test('Expect that multiline is displayed', async () => {
    const idRequest = 123;

    const inputBoxOptions: InputBoxOptions = {
      multiline: true,
      validate: false,
      placeHolder: '',
      prompt: 'Enter a value',
      id: idRequest,
    };

    receiveFunctionMock.mockImplementation((message: string, callback: (options: InputBoxOptions) => void) => {
      if (message === 'showInputBox:add') {
        callback(inputBoxOptions);
      }
    });

    render(QuickPickInput, {});

    const area = await screen.findByRole('textbox');
    expect(area).toBeInTheDocument();
  });

  test('Expect that filtering works', async () => {
    const idRequest = 123;

    const quickPickOptions: QuickPickOptions = {
      items: ['itemA', 'itemB'],
      title: 'My custom title',
      canPickMany: false,
      placeHolder: 'placeHolder',
      prompt: '',
      id: idRequest,
      onSelectCallback: true,
    };

    receiveFunctionMock.mockImplementation((message: string, callback: (options: QuickPickOptions) => void) => {
      if (message === 'showQuickPick:add') {
        callback(quickPickOptions);
      }
    });

    render(QuickPickInput, {});

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    const itemA1 = await screen.findByText('itemA');
    expect(itemA1).toBeInTheDocument();
    const itemB1 = await screen.findByText('itemB');
    expect(itemB1).toBeInTheDocument();

    expect(window.sendShowQuickPickOnSelect).toHaveBeenCalled();
    expect(window.sendShowQuickPickOnSelect).toHaveBeenCalledWith(123, 0);

    await userEvent.type(input, 'B');

    const itemA2 = screen.queryByText('itemA');
    expect(itemA2).not.toBeInTheDocument();
    const itemB2 = await screen.findByText('itemB');
    expect(itemB2).toBeInTheDocument();

    expect(window.sendShowQuickPickOnSelect).toHaveBeenCalled();
    expect(window.sendShowQuickPickOnSelect).toHaveBeenCalledWith(123, 1);
  });

  test('Expect that filtering is case insensitive', async () => {
    const idRequest = 123;

    const quickPickOptions: QuickPickOptions = {
      items: ['itemA', 'itemB'],
      title: 'My custom title',
      canPickMany: false,
      placeHolder: 'placeHolder',
      prompt: '',
      id: idRequest,
      onSelectCallback: true,
    };

    receiveFunctionMock.mockImplementation((message: string, callback: (options: QuickPickOptions) => void) => {
      if (message === 'showQuickPick:add') {
        callback(quickPickOptions);
      }
    });

    render(QuickPickInput, {});

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    const itemA1 = await screen.findByText('itemA');
    expect(itemA1).toBeInTheDocument();
    const itemB1 = await screen.findByText('itemB');
    expect(itemB1).toBeInTheDocument();

    expect(window.sendShowQuickPickOnSelect).toHaveBeenCalled();
    expect(window.sendShowQuickPickOnSelect).toHaveBeenCalledWith(123, 0);

    await userEvent.type(input, 'a');

    const itemA2 = await screen.findByText('itemA');
    expect(itemA2).toBeInTheDocument();
    const itemB2 = screen.queryByText('itemB');
    expect(itemB2).not.toBeInTheDocument();
    expect(window.sendShowQuickPickOnSelect).toHaveBeenCalled();
    expect(window.sendShowQuickPickOnSelect).toHaveBeenCalledWith(123, 0);
  });

  test('Expect that invalid filter clears selection', async () => {
    const idRequest = 123;

    const quickPickOptions: QuickPickOptions = {
      items: ['itemA', 'itemB'],
      title: 'My custom title',
      canPickMany: false,
      placeHolder: 'placeHolder',
      prompt: '',
      id: idRequest,
      onSelectCallback: true,
    };

    receiveFunctionMock.mockImplementation((message: string, callback: (options: QuickPickOptions) => void) => {
      if (message === 'showQuickPick:add') {
        callback(quickPickOptions);
      }
    });

    render(QuickPickInput, {});

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    const itemA1 = await screen.findByText('itemA');
    expect(itemA1).toBeInTheDocument();
    const itemB1 = await screen.findByText('itemB');
    expect(itemB1).toBeInTheDocument();

    expect(window.sendShowQuickPickOnSelect).toHaveBeenCalled();
    expect(window.sendShowQuickPickOnSelect).toHaveBeenCalledWith(123, 0);

    await userEvent.type(input, 'q');

    const itemA3 = screen.queryByText('itemA');
    expect(itemA3).not.toBeInTheDocument();
    const itemB3 = screen.queryByText('itemB');
    expect(itemB3).not.toBeInTheDocument();

    expect(window.sendShowQuickPickOnSelect).toHaveBeenCalled();
    expect(window.sendShowQuickPickOnSelect).toHaveBeenCalledWith(123, -1);
  });

  test('Expect item label to have ellipsis class', async () => {
    const idRequest = 123;

    const quickPickOptions: QuickPickOptions = {
      items: [
        { label: 'item1', description: 'my description1', detail: 'my detail1' },
        { label: 'item2', description: 'my description2', detail: 'my detail2' },
      ],
      canPickMany: false,
      placeHolder: 'placeHolder',
      prompt: '',
      id: idRequest,
      onSelectCallback: false,
    };

    receiveFunctionMock.mockImplementation((message: string, callback: (options: QuickPickOptions) => void) => {
      if (message === 'showQuickPick:add') {
        callback(quickPickOptions);
      }
    });

    const { getByText } = render(QuickPickInput, {});

    const item1 = getByText('item1');
    expect(item1).toBeDefined();
    expect(item1.classList).toContain('overflow-hidden');
    expect(item1.classList).toContain('text-ellipsis');
  });

  test('Expect item button to have full label in title', async () => {
    const idRequest = 123;

    const quickPickOptions: QuickPickOptions = {
      items: [
        { label: 'item1', description: 'my description1', detail: 'my detail1' },
        { label: 'item2', description: 'my description2', detail: 'my detail2' },
      ],
      canPickMany: false,
      placeHolder: 'placeHolder',
      prompt: '',
      id: idRequest,
      onSelectCallback: false,
    };

    receiveFunctionMock.mockImplementation((message: string, callback: (options: QuickPickOptions) => void) => {
      if (message === 'showQuickPick:add') {
        callback(quickPickOptions);
      }
    });

    const { getByTitle } = render(QuickPickInput, {});

    const item1 = getByTitle('Select item1');
    expect(item1).toBeDefined();
  });

  test('Expect to see two quickpick in a row', async () => {
    // first quickpick being displayed
    const idRequest = 123;
    const quickPickOptions: QuickPickOptions = {
      items: ['item1', 'item2'],
      canPickMany: false,
      placeHolder: 'placeHolder',
      prompt: '',
      id: idRequest,
      onSelectCallback: false,
    };

    const quickPickOptions2: QuickPickOptions = {
      items: ['foo', 'bar'],
      canPickMany: false,
      placeHolder: 'placeHolder',
      prompt: 'enter a custom value',
      id: idRequest,
      onSelectCallback: false,
    };

    let eventCallback: ((options: QuickPickOptions) => void) | undefined;

    receiveFunctionMock.mockImplementation((message: string, callback: (options: QuickPickOptions) => void) => {
      if (message === 'showQuickPick:add') {
        eventCallback = callback;
      }
    });

    // when getting the response of the first quickpick, we ask to display the second quickpick
    vi.mocked(window.sendShowQuickPickValues).mockImplementation(() => {
      eventCallback?.(quickPickOptions2);
      return Promise.resolve();
    });

    // render the first quickpick
    const { getByTitle } = render(QuickPickInput, {});

    // wait that the event callback is set
    await vi.waitFor(() => eventCallback !== undefined);

    // ok ask to display a first quickpick
    expect(eventCallback).toBeDefined();
    eventCallback?.(quickPickOptions);

    // check the first quick pick options is displayed
    const item1 = await vi.waitFor(() => getByTitle('Select item1'));
    expect(item1).toBeDefined();

    // now, press the ESC key
    await userEvent.keyboard('{Escape}');

    // check we received the answer for showQuickPick
    expect(window.sendShowQuickPickValues).toBeCalledWith(idRequest);

    // and the next quickpick should be displayed
    const itemFoo = getByTitle('Select foo');
    expect(itemFoo).toBeDefined();
  });
});
