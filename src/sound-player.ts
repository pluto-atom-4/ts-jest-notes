export class SoundPlayer {

  private foo: string;

  constructor() {
    this.foo = 'bar';
  }

  playSoundFile(fileName: string): string {
    console.log('Playing sound file ' + fileName);
    return 'Playing sound file ' + fileName;
  }
}
