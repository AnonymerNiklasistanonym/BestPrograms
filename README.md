# BestPrograms

Repo for a list of the best programs (Linux + Windows)

*The following content needs to be migrated to the JSON file:*

[//]: # (Best Programs begin)
- 3D Computer Graphics
  - [Blender](https://github.com/lawl/NoiseTorch) (`Linux`, `Windows`, `OpenSource`, `GUI`, `modelling`, `rendering`): A 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D models, motion graphics, interactive 3D applications, virtual reality and computer games
    - Pacman: [`blender`](https://www.archlinux.org/packages/?sort=&q=blender)
- Audio
  - [Audacity](https://www.audacityteam.org/) (`Linux`, `Windows`, `OpenSource`, `GUI`, `audio-editor`): Edit/Mix audio tracks
    - Pacman: [`audacity`](https://www.archlinux.org/packages/?sort=&q=audacity)
  - [Noisetorch](https://github.com/lawl/NoiseTorch) (`Linux`, `sudo-rights-necessary`, `OpenSource`, `GUI`, `microphone`, `real-time`, `noise-suppression`): Real-time microphone noise suppression
    - Bugs: If a source changes or an output is changed everything needs to be initialized again
    - Pacman [AUR]: [`noisetorch-bin`](https://aur.archlinux.org/packages/?O=0&K=noisetorch-bin)
  - [Playerctl](https://github.com/altdesktop/playerctl) (`Linux`, `OpenSource`, `media-player-control`): Control global media player playback
    - Pacman: [`playerctl`](https://www.archlinux.org/packages/?sort=&q=playerctl)
- Web
  - [Firefox](https://www.mozilla.org/de/firefox/new/) (`Linux`, `Windows`, `OpenSource`, `GUI`, `web-browser`): A browser
    - Pacman: [`firefox`](https://www.archlinux.org/packages/?sort=&q=firefox)

[//]: # (Best Programs end)

*old*:

## `pacman`

TODO Write JSON configuration and javascript md writer

- Audio
  - audacity (openSource audioEditor gui linux windows)
  - playerctl (openSource audioController linux): [control audio playback via command line]
  - noisetorch (openSource audio gui linux): [microphone ambient sound suppresser]
- 3D Modelling
  - blender (openSource 3D gui linux windows)
- Web
  - firefox (openSource browser gui linux windows nightly=firefox-nightly)
- Video
  - mpv (openSource videoPlayer gui linux windows)
  - vlc (openSource videoPlayer gui linux windows)
  - handbrake (openSource videoConverter gui linux windows): [backup DVDs and BluRays]
  - shotcut (openSource videoEditor gui linux windows)
  - youtube-dl
  - obs (openSource screenRecorder gui linux windows)
- Images
  - inkscape (openSource vectorGraphicsEditor gui linux windows)
  - paint.net (freeware imageEditor gui windows linux_alternative=pinta)
  - pinta (openSource imageEditor gui linux aur)
  - gThumb (openSource imageEditor gui linux windows)
  - darktable (openSource imageEditor gui linux windows)
- Graphs
  - dia (openSource diagramEditor gui linux windows)
- Texteditor
  - code (openSource textEditor gui linux windows nightly=visual-studio-code-insiders)
  - gedit (openSource textEditor gui linux)
  - typora (freeware textEditor gui linux windows)
- Storage
  - Filezilla (openSource networkStorageClient sftp ftp gui linux windows)
  - gnome-disk-utility: [get connected drive names and their partitions and more details]
  - smartmontools: [get SSD drive health/stats via `sudo smartctl -t long -a /dev/nvme0n1`]
  - balena etcher: [burn iso files for operating systems to USB sticks]
  - baobab: [visualize files and their sizes of a drive in a pie graph]
- Task Manager
  - htop (openSource hardwareMonitor linux)
- Git
  - github-desktop[aur]
- System Customization
  - xscreensaver: [cool screensavers on Linux]
- Communication
  - skype-preview
  - discord
  - discover-overlay-git (openSource gui linux): Discord overlay for Linux PCs
  - slack
  - teamspeak3
- IDEs
  - intellij-idea-community-edition
  - pycharm-community-edition
  - qtcreator
  - vscode-insiders
- CLI
  - visidata[aur]: [visualize all kinds of data in the terminal]
  - tldr: [get general PROGRAM usage information for popular cli commands with `tldr PROGRAM`]
- Other
  - musescore
  - krita
- Office
  - gscan2pdf (openSource scanner gui linux): [use scanner]
  - hplip (printerManager gui linux): [manage hp printer even over network]
  - libre office (openSource)
  - system-config-printer: [cups desktop interface]
  - texlive-most (group)
- SQL
  - mysql-workbench
