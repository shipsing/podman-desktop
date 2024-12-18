/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
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

import '@testing-library/jest-dom/vitest';

import { fireEvent, render, screen } from '@testing-library/svelte';
import { expect, test, vi } from 'vitest';

import * as taskStores from '/@/stores/tasks';

import TaskManagerClearAllButton from './TaskManagerClearAllButton.svelte';

vi.mock('/@/stores/tasks');

test('Expect clear tasks is being called', async () => {
  const clearNotificationsSpy = vi.spyOn(taskStores, 'clearNotifications');
  render(TaskManagerClearAllButton);
  // expect the button is there
  const clearAll = screen.getByRole('button', { name: 'Clear all' });
  expect(clearAll).toBeInTheDocument();
  // click the button
  await fireEvent.click(clearAll);

  expect(clearNotificationsSpy).toHaveBeenCalled();
});