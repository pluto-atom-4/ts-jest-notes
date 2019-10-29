import { SoundPlayer } from '../sound-player';
import { SoundPlayerConsumer } from '../sound-player-consumer';

import { mocked } from "ts-jest";

jest.mock('../sound-player'); // SoundPlayer is now a mock constructor

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  mocked(SoundPlayer).mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  // Show that mockClear() is working:
  expect(SoundPlayer).not.toHaveBeenCalled();

  const soundPlayerConsumer = new SoundPlayerConsumer();
  // Constructor should have been called again:
  expect(SoundPlayer).toHaveBeenCalledTimes(1);

  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();

  // mock.instances is available with automatic mocks:
  const mockSoundPlayerInstance = mocked(SoundPlayer).mock.instances[0];
  const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
  expect(mocked(mockPlaySoundFile).mock.calls[0][0]).toEqual(coolSoundFileName);
  // Equivalent to above check:
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});
