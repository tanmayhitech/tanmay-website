/**
 * TANMAY YADAV PORTFOLIO - CYBERNETIC WEB AUDIO SYNTHESIZER
 * Sound Engine Disabled per user request.
 */

class CyberSoundEngine {
  constructor() {
    this.isEnabled = false;
  }

  toggleSound() { return false; }
  playClick() {}
  playChime() {}
  playShockwave() {}
  playTerminalKey() {}
}

window.soundEngine = new CyberSoundEngine();
