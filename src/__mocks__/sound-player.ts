// Import this named export into your test file:
export const mockPlaySoundFile = jest.fn();

export const SoundPlayer = jest.fn().mockImplementation((): any => {
  return {playSoundFile: mockPlaySoundFile};
});
