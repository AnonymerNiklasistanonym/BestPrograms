# BestPrograms

Repo for a list of the best programs (Linux + Windows)

*New:*

[//]: # (Best Programs begin)
- 3D Computer Graphics
  - [Blender](https://github.com/lawl/NoiseTorch) (`Linux`, `Windows`, `OpenSource-GPL`, `GUI`, `modelling`, `rendering`): A 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D models, motion graphics, interactive 3D applications, virtual reality and computer games
    - Pacman: [`blender`](https://www.archlinux.org/packages/?sort=&q=blender)
- Audio
  - [Audacity](https://www.audacityteam.org/) (`Linux`, `Windows`, `OpenSource-CCPL+GPL2`, `GUI`, `audio-editor`): Edit/Mix audio tracks
    - Pacman: [`audacity`](https://www.archlinux.org/packages/?sort=&q=audacity)
  - [Noisetorch](https://github.com/lawl/NoiseTorch) (`Linux`, `sudo-rights-necessary`, `OpenSource-GPL3`, `GUI`, `microphone`, `real-time`, `noise-suppression`): Real-time microphone noise suppression
    - Setup: To create a new microphone source based on an existing microphone input with ambient sounds suppressed like keyboard clicks or fan noises the gui needs to be started and an microphone input needs to be selected and loaded
    - Bugs: If a source changes or an output is changed everything needs to be initialized again
    - Pacman [AUR]: [`noisetorch-bin`](https://aur.archlinux.org/packages/?O=0&K=noisetorch-bin)
  - [Playerctl](https://github.com/altdesktop/playerctl) (`Linux`, `OpenSource-LGPL3`, `media-player-control`): Control global media player playback via the command line
    - Pacman: [`playerctl`](https://www.archlinux.org/packages/?sort=&q=playerctl)
- Command Line
  - [tldr](https://github.com/tldr-pages/tldr-python-client) (`Linux`, `OpenSource-MIT`, `cli-helper`): Get general and short $PROGRAM usage information for popular cli commands with `tldr $PROGRAM`
    - Pacman: [`tldr`](https://www.archlinux.org/packages/?sort=&q=tldr)
  - [visidata](https://www.visidata.org) (`Linux`, `OpenSource-GPL3`, `cli-helper`, `data-visualizer`): Display multiple data structures in the command line
    - Pacman [AUR]: [`visidata`](https://aur.archlinux.org/packages/?O=0&K=visidata)
- Databases
  - [MySQL Workbench](https://www.mysql.com/de/products/workbench/) (`Linux`, `OpenSource-GPL2`, `GUI`, `sql`): Manage/Read SQL databases
    - Pacman: [`mysql-workbench`](https://www.archlinux.org/packages/?sort=&q=mysql-workbench)
- Office
  - [Libre Office](https://www.libreoffice.org/) (`Linux`, `Windows`, `OpenSource-LGPL3`, `GUI`, `office-suit`, `document-editor`, `presentation-editor`, `table-editor`): Free office suite
    - Pacman: [`libreoffice-fresh`](https://www.archlinux.org/packages/?sort=&q=libreoffice-fresh)
- Printing/Scanning
  - [system-config-printer](https://github.com/OpenPrinting/system-config-printer) (`Linux`, `OpenSource-GPL`, `GUI`, `printer-manager`, `cups`): A CUPS printer configuration tool and status applet
    - Pacman: [`system-config-printer`](https://www.archlinux.org/packages/?sort=&q=system-config-printer)
- Video
  - [Handbrake](https://handbrake.fr) (`Linux`, `Windows`, `OpenSource-GPL`, `GUI`, `video-compressor`, `video-converter`): A video converter
    - Pacman: [`handbrake`](https://www.archlinux.org/packages/?sort=&q=handbrake)
  - [MPV](https://mpv.io/) (`Linux`, `Windows`, `OpenSource-GPL3`, `GUI`, `audio-player`, `video-player`): A animalistic video player
    - Pacman: [`mpv`](https://www.archlinux.org/packages/?sort=&q=mpv)
  - [OBS](https://obsproject.com) (`Linux`, `Windows`, `OpenSource-GPL2`, `GUI`, `video-streaming`, `live-streaming`): A live streaming toolbox (YouTube, Twitch, ...)
    - Pacman: [`obs-studio`](https://www.archlinux.org/packages/?sort=&q=obs-studio)
  - [Shotcut](https://www.shotcut.org) (`Linux`, `Windows`, `OpenSource-GPL3`, `GUI`, `video-compressor`, `video-converter`): A video editor
    - Pacman: [`shotcut`](https://www.archlinux.org/packages/?sort=&q=shotcut)
  - [VLC Media Player](https://mpv.io/) (`Linux`, `Windows`, `OpenSource-GPL2+LGPL2.1`, `GUI`, `audio-player`, `video-player`): A feature rich video player
    - Pacman: [`vlc`](https://www.archlinux.org/packages/?sort=&q=vlc)
  - [youtube-dl](https://ytdl-org.github.io/youtube-dl/) (`Linux`, `Windows`, `OpenSource-The Unlicense`, `GUI`, `video-downloader`): A command-line program to download videos from YouTube.com and a few more sites
    - Pacman: [`youtube-dl`](https://www.archlinux.org/packages/?sort=&q=youtube-dl)
- Web
  - [Firefox](https://www.mozilla.org/de/firefox/new/) (`Linux`, `Windows`, `OpenSource-GPL+LGPL+MPL`, `GUI`, `web-browser`): A browser
    - Pacman: [`firefox`](https://www.archlinux.org/packages/?sort=&q=firefox)
    - Pacman [AUR NIGHTLY]: [`firefox-nightly`](https://aur.archlinux.org/packages/?O=0&K=firefox-nightly)

[//]: # (Best Programs end)

*Old*: (The following content needs to be migrated to the JSON file)

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
- Other
  - musescore
  - krita
- Office
  - gscan2pdf (openSource scanner gui linux): [use scanner]
  - hplip (printerManager gui linux): [manage hp printer even over network]
  - libre office (openSource)
  - system-config-printer: [cups desktop interface]
  - texlive-most (group)
