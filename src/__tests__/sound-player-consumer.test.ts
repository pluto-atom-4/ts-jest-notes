import * as MockPlayer from '../__mocks__/sound-player';
import * as Player from '../sound-player';
import SoundPlayerConsumer from '../sound-player-consumer';

jest.mock('../sound-player'); // SoundPlayer is now a mock constructor

const {SoundPlayer, mockPlaySoundFile} = Player as typeof MockPlayer;

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  SoundPlayer.mockClear();
  mockPlaySoundFile.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});

it('We can check if the consumer called an implemented method', () => {
  mockPlaySoundFile.mockImplementation((fileName: string): string => {
    console.log("this mock function is called with", fileName);
    return "this mock function is called with " + fileName;
  });
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});

it('We can check if the consumer called an implemented return value', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  mockPlaySoundFile.mockReturnValue("return value of mocked function");
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});

