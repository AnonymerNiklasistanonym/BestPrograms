# BestPrograms

Repo for a list of the best programs (Linux + Windows):

[//]: # (Best Programs begin)
- 3D Computer Graphics
  - [Blender](https://github.com/lawl/NoiseTorch): A 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D models, motion graphics, interactive 3D applications, virtual reality and computer games

    `Linux`, `Windows`, [`OpenSource-GPL`](https://github.com/blender/blender), `GUI`, `modelling`, `rendering`
    - Pacman: [`blender`](https://www.archlinux.org/packages/?q=blender)
- Audio
  - [Audacity](https://www.audacityteam.org): Edit/Mix audio tracks

    `Linux`, `Windows`, [`OpenSource-CCPL+GPL2`](https://github.com/audacity/audacity), `GUI`, `audio-editor`
    - Pacman: [`audacity`](https://www.archlinux.org/packages/?q=audacity)
  - [foobar2000](https://www.foobar2000.org/download): An advanced freeware audio player for the Windows platform

    `Windows`, `ClosedSource`, `GUI`, `audio-player`
  - [Lollypop](https://gitlab.gnome.org/World/lollypop): A simple music player that automatically downloads cover/artist images and other information

    `Linux`, [`OpenSource-GPL`](https://gitlab.gnome.org/World/lollypop), `GUI`, `music-player`
    - Pacman: [`lollypop`](https://www.archlinux.org/packages/?q=lollypop)
  - [mp3DirectCut](https://mpesch3.de/index.html): A fast and extensive audio editor for encoded MP3 and AAC

    `Windows`, `ClosedSource`, `GUI`, `audio-editor`
  - [MP3TAG](https://www.mp3tag.de/en/): A powerful and easy-to-use tool to edit metadata of audio files

    `Windows`, `ClosedSource`, `GUI`, `audio-tag-editor`
  - [Noisetorch](https://github.com/lawl/NoiseTorch): Real-time microphone noise suppression

    `Linux`, `sudo-rights-necessary`, [`OpenSource-GPL3`](https://github.com/lawl/NoiseTorch), `GUI`, `microphone`, `noise-suppression`, `real-time`
    - Setup: To create a new microphone source based on an existing microphone input with ambient sounds suppressed like keyboard clicks or fan noises the gui needs to be started and an microphone input needs to be selected and loaded
    - Bugs: If a source changes or an output is changed everything needs to be initialized again; Discord and some other applications that use microphones need to be restarted after unloading because suddenly all microphone inputs are gone
    - Pacman [AUR]: [`noisetorch-bin`](https://aur.archlinux.org/packages/?K=noisetorch-bin)
  - [Playerctl](https://github.com/altdesktop/playerctl): Control global media player playback via the command line

    `Linux`, [`OpenSource-LGPL3`](https://github.com/altdesktop/playerctl), `CLI`, `media-player-control`
    - Pacman: [`playerctl`](https://www.archlinux.org/packages/?q=playerctl)
- Command Line
  - [tldr](https://github.com/tldr-pages/tldr-python-client): Get general and short $PROGRAM usage information for popular cli commands with `tldr $PROGRAM`

    `Linux`, [`OpenSource-MIT`](https://github.com/tldr-pages/tldr-python-client), `CLI`, `cli-helper`
    - Pacman: [`tldr`](https://www.archlinux.org/packages/?q=tldr)
  - [visidata](https://www.visidata.org): Display multiple data structures in the command line

    `Linux`, [`OpenSource-GPL3`](https://github.com/saulpw/visidata), `CLI`, `cli-helper`, `data-visualizer`
    - Pacman [AUR]: [`visidata`](https://aur.archlinux.org/packages/?K=visidata)
- Communication
  - [Discord](https://discordapp.com): Video/Audio/Text messaging service that can share your screen

    `Linux`, `Windows`, `ClosedSource`, `GUI`, `audio-call`, `chat`, `screen-share`, `video-call`
    - Pacman: [`discord`](https://www.archlinux.org/packages/?q=discord)
  - [Discord Overlay 'Discover'](https://github.com/trigg/Discover): Discord overlay for linux

    `Linux`, [`OpenSource-GPL3`](https://github.com/trigg/Discover), `GUI`, `screen-overlay`
    - Pacman [AUR GIT]: [`discover-overlay-git`](https://aur.archlinux.org/packages/?K=discover-overlay-git)
  - [Skype](http://www.skype.com): Video/Audio/Text messaging service that can share your screen from Microsoft

    `Linux`, `Windows`, `ClosedSource`, `GUI`, `audio-call`, `chat`, `screen-share`, `video-call`
    - Pacman [AUR]: [`skype-preview`](https://aur.archlinux.org/packages/?K=skype-preview)
  - [Slack](https://slack.com/downloads): Video/Audio/Text messaging service that can share your screen

    `Linux`, `Windows`, `ClosedSource`, `GUI`, `audio-call`, `chat`, `screen-share`, `video-call`
    - Pacman [AUR]: [`slack-desktop`](https://aur.archlinux.org/packages/?K=slack-desktop)
  - [Teamspeak](http://www.teamspeak.com): Audio/Text messaging service

    `Linux`, `Windows`, `ClosedSource`, `GUI`, `audio-call`, `chat`
    - Pacman: [`teamspeak3`](https://www.archlinux.org/packages/?q=teamspeak3)
- Databases
  - [MySQL Workbench](https://www.mysql.com/de/products/workbench): Manage/Read SQL databases

    `Linux`, [`OpenSource-GPL2`](https://github.com/mysql/mysql-workbench), `GUI`, `database-manager`, `sql`
    - Pacman: [`mysql-workbench`](https://www.archlinux.org/packages/?q=mysql-workbench)
  - [sqlitestudio](http://sqlitestudio.pl): Manage/Read SQLite databases

    `Linux`, `Windows`, [`OpenSource-GPL3`](https://github.com/pawelsalawa/sqlitestudio), `GUI`, `database-manager`, `sqlite`
    - Pacman [AUR]: [`sqlitestudio`](https://aur.archlinux.org/packages/?K=sqlitestudio)
- Desktop Environment
  - [xscreensaver](https://www.jwz.org/xscreensaver): Extended screensaver/locker for xserver environments

    `Linux`, [`OpenSource-BSD`](https://github.com/Zygo/xscreensaver), `GUI`, `screensaver`, `xserver`
    - Bugs: The default screensaver/locker needs to be disabled otherwise multiple lock screens will be shown
    - Pacman: [`xscreensaver`](https://www.archlinux.org/packages/?q=xscreensaver)
- Development
  - [CudaText](https://cudatext.github.io/): Very fast and minimal text editor

    `Linux`, `Windows`, [`OpenSource-MPL2`](https://github.com/Alexey-T/CudaText), `GUI`, `code-syntax-highlighting`, `text-editor`
    - Pacman [AUR]: [`cudatext-qt5-bin`](https://aur.archlinux.org/packages/?K=cudatext-qt5-bin)
  - [gedit](https://wiki.gnome.org/Apps/Gedit): Simple text editor

    `Linux`, [`OpenSource-GPL`](https://gitlab.gnome.org/GNOME/gedit), `GUI`, `code-syntax-highlighting`, `text-editor`
    - Pacman: [`gedit`](https://www.archlinux.org/packages/?q=gedit)
  - [GitHub Desktop](https://desktop.github.com): GUI for git repository managing that is optimized for GitHub repositories

    `Linux`, `Windows`, [`OpenSource-MIT`](https://github.com/desktop/desktop), `GUI`, `git`, `git-manager`, `github`
    - Pacman [AUR]: [`github-desktop`](https://aur.archlinux.org/packages/?K=github-desktop)
  - [glogg](http://glogg.bonnefon.org/): Fast log file reader (text files)

    `Linux`, `Windows`, [`OpenSource-GPL3`](https://github.com/nickbnf/glogg), `GUI`, `log-reader`
    - Pacman [AUR]: [`glogg`](https://aur.archlinux.org/packages/?K=glogg)
  - [Intellij Idea Community](https://www.jetbrains.com/idea): Java (Android) IDE

    `Linux`, `Windows`, [`OpenSource-APACHE`](https://github.com/JetBrains/intellij-community), `GUI`, `android`, `debugging`, `java`, `text-editor`
    - Pacman: [`intellij-idea-community-edition`](https://www.archlinux.org/packages/?q=intellij-idea-community-edition)
  - [Pycharm Community](https://www.jetbrains.com/pycharm): Python IDE

    `Linux`, `Windows`, [`OpenSource-APACHE`](https://github.com/JetBrains/intellij-community/), `GUI`, `debugging`, `python`, `text-editor`
    - Pacman: [`pycharm-community-edition`](https://www.archlinux.org/packages/?q=pycharm-community-edition)
  - [QtCreator](https://www.qt.io): C++ (Qt) development environment

    `Linux`, `Windows`, [`OpenSource-LGPL`](https://github.com/qt-creator/qt-creator), `GUI`, `c++`, `debugging`, `qt`, `text-editor`
    - Pacman: [`qtcreator`](https://www.archlinux.org/packages/?q=qtcreator)
  - [Typora](https://typora.io): Markdown text editor with PDF/HTML export and LaTeX Math support

    `Linux`, `Windows`, `ClosedSource`, `GUI`, `markdown`, `text-editor`
    - Pacman [AUR]: [`typora`](https://aur.archlinux.org/packages/?K=typora)
  - [VSCode](https://github.com/microsoft/vscode): Open Source build of Visual Studio Code (vscode) editor that is able to provide development environments for many languages

    `Linux`, `Windows`, [`OpenSource-MIT`](https://github.com/microsoft/vscode), `GUI`, `debugging`, `extensions`, `javascript`, `text-editor`, `typescript`, `web-development`
    - Pacman: [`code`](https://www.archlinux.org/packages/?q=code)
- Files
  - [Everything](https://www.voidtools.com/): Find files really fast (and with regular expressions) which is way better than the default Windows search

    `Windows`, `ClosedSource`, `GUI`, `file-searching`, `regular-expressions`
  - [RegexRenamer](http://regexrenamer.sourceforge.net/): A user-friendly graphical tool used to batch rename files using regular expressions

    `Windows`, `ClosedSource`, `GUI`, `file-renaming`, `regular-expressions`
- Fonts
  - [Fira Code](https://github.com/tonsky/FiraCode): Font with nice ligatures for programmers

    `Linux`, `Windows`, [`OpenSource-OFL`](https://github.com/tonsky/FiraCode), `ligatures`
    - Pacman: [`ttf-fira-code`](https://www.archlinux.org/packages/?q=ttf-fira-code)
  - [JetBrains Mono](https://www.jetbrains.com/lp/mono): Font with nice ligatures for programmers

    `Linux`, `Windows`, [`OpenSource-APACHE`](https://github.com/JetBrains/JetBrainsMono), `ligatures`
    - Pacman: [`ttf-jetbrains-mono`](https://www.archlinux.org/packages/?q=ttf-jetbrains-mono)
  - [noto-fonts-emoji](https://www.google.com/get/noto): Get colour emojis on Linux (for Discord and more)

    `Linux`, [`OpenSource-OFL`](https://github.com/googlefonts/noto-emoji), `emojis`
    - Pacman: [`noto-fonts-emoji`](https://www.archlinux.org/packages/?q=noto-fonts-emoji)
- Gaming
  - [Goverlay](https://github.com/benjamimgois/goverlay): Mangohud Configuration Editor

    `Linux`, [`OpenSource-GPL3`](https://github.com/benjamimgois/goverlay), `GUI`, `game-logging`, `game-overlay`
    - Pacman [AUR]: [`goverlay-bin`](https://aur.archlinux.org/packages/?K=goverlay-bin)
  - [Lutris](https://lutris.net): Game launcher

    `Linux`, [`OpenSource-GPL3`](https://github.com/lutris/lutris), `GUI`, `game-launcher`
    - Pacman: [`lutris`](https://www.archlinux.org/packages/?q=lutris)
  - [Mangohud](https://github.com/flightlessmango/MangoHud): Wine performance HUD and logging

    `Linux`, [`OpenSource-MIT`](https://github.com/flightlessmango/MangoHud), `CLI`, `game-logging`, `game-overlay`
    - Pacman [AUR]: [`mangohud`](https://aur.archlinux.org/packages/?K=mangohud)
  - [Steam](https://steampowered.com): Steam game launcher

    `Linux`, `Windows`, `ClosedSource`, `GUI`, `game-launcher`
    - Pacman: [`steam`](https://www.archlinux.org/packages/?q=steam)
- Graphs
  - [dia](http://live.gnome.org/Dia): End of life graph creator for UML/ERM/... that also has a cli export interface

    `Linux`, `Windows`, [`OpenSource-GPL`](https://gitlab.gnome.org/GNOME/dia), `GUI`, `CLI`, `class-diagrams`, `erm`, `uml`
    - Pacman: [`dia`](https://www.archlinux.org/packages/?q=dia)
- Images
  - [darktable](https://darktable.org): Utility to organize images

    `Linux`, `Windows`, [`OpenSource-GPL3`](https://github.com/darktable-org/darktable), `GUI`, `image-editor`, `image-viewer`
    - Pacman: [`darktable`](https://www.archlinux.org/packages/?q=darktable)
  - [gthumb](https://wiki.gnome.org/Apps/gthumb): Image browser and viewer

    `Linux`, [`OpenSource-GPL`](https://gitlab.gnome.org/GNOME/gthumb), `GUI`, `image-editor`, `image-viewer`
    - Pacman: [`gThumb`](https://www.archlinux.org/packages/?q=gThumb)
  - [Inkscape](https://inkscape.org): Vector graphics editor

    `Linux`, `Windows`, [`OpenSource-GPL+LGPL`](https://gitlab.com/inkscape/inkscape), `GUI`, `CLI`, `vector-graphics-editor`
    - Pacman: [`inkscape`](https://www.archlinux.org/packages/?q=inkscape)
  - [Krita](https://krita.org): Edit and paint images

    `Linux`, `Windows`, [`OpenSource-GPL3`](https://github.com/KDE/krita), `GUI`, `draw`
    - Pacman: [`krita`](https://www.archlinux.org/packages/?q=krita)
  - [Paint.NET](https://www.getpaint.net/): Drawing/editing program (much easier to use than GIMP)

    `Windows`, `ClosedSource`, `GUI`, `image-editor`
  - [Pinta](https://pinta-project.com): Drawing/editing program modeled after Paint.NET (much easier to use than GIMP)

    `Linux`, `Windows`, [`OpenSource-MIT`](https://github.com/PintaProject/Pinta), `GUI`, `image-editor`
    - Pacman: [`pinta`](https://www.archlinux.org/packages/?q=pinta)
- Inputsharing
  - [Barrier](https://github.com/debauchee/barrier): Share keyboard and mouse across devices (even across operating systems) via client server relationship

    `Linux`, `Windows`, [`OpenSource-GPL2WithOpeSSLException`](https://github.com/debauchee/barrier), `GUI`, `keyboard-sharing`, `mouse-sharing`
    - Pacman: [`barrier`](https://www.archlinux.org/packages/?q=barrier)
- Learning
  - [Anki](https://ankisrs.net/): Index card based learning application with cloud synchronization

    `Linux`, `Windows`, [`OpenSource-AGPL3`](https://github.com/ankitects/anki), `GUI`, `cloud-synchronization`, `index-card-based`
    - Pacman: [`anki`](https://www.archlinux.org/packages/?q=anki)
- Music
  - [MuseScore](https://musescore.org): A scorewriter

    `Linux`, `Windows`, [`OpenSource-GPL`](https://github.com/musescore/MuseScore), `GUI`, `scorewriter`
    - Pacman: [`musescore`](https://www.archlinux.org/packages/?q=musescore)
- Office
  - [DiffPDF](https://gitlab.com/eang/diffpdf): Compare PDF files visually and find the differences on a page by page basis

    `Linux`, [`OpenSource-GPL2`](https://gitlab.com/eang/diffpdf), `GUI`, `comparison`, `pdf`
    - Pacman: [`diffpdf`](https://www.archlinux.org/packages/?q=diffpdf)
  - [Libre Office](https://www.libreoffice.org): Free office suite

    `Linux`, `Windows`, [`OpenSource-LGPL3`](https://www.libreoffice.org/about-us/source-code/), `GUI`, `document-editor`, `office-suit`, `presentation-editor`, `table-editor`
    - Pacman: [`libreoffice-fresh`](https://www.archlinux.org/packages/?q=libreoffice-fresh)
  - [Meld](https://meldmerge.org/): Compare text files visually and find the differences

    `Linux`, `Windows`, [`OpenSource-GPL`](https://gitlab.gnome.org/GNOME/meld), `GUI`, `comparison`, `text`
    - Pacman: [`meld`](https://www.archlinux.org/packages/?q=meld)
  - [Pandoc](https://pandoc.org/): Create documents/presentations using Markdown (with LaTeX math/images/graphs) or other text files with many options for export/rendering

    `Linux`, `Windows`, [`OpenSource-GPL`](https://github.com/jgm/pandoc), `CLI`, `document-export`, `html`, `pdf`, `presentation-export`
    - Pacman: [`pandoc`](https://www.archlinux.org/packages/?q=pandoc)
  - [pdf24](https://en.pdf24.org/): Freeware to easily delete/pick/reorder pages in pdf files

    `Windows`, `ClosedSource`, `GUI`, `pdf-editor`
  - [SumatraPDF](https://www.sumatrapdfreader.org/download-free-pdf-viewer): View pdf files

    `Windows`, [`OpenSource-GPL3`](https://github.com/sumatrapdfreader/sumatrapdf), `GUI`, `pdf-viewer`
  - [TeX Live suite](http://tug.org/texlive): TeX Live suite

    `Linux`, [`OpenSource-GPL`](https://github.com/TeX-Live/texlive-source), `GUI`, `document-editor`, `office-suit`, `presentation-editor`
    - Pacman [GROUP]: [`texlive-most`](https://www.archlinux.org/groups/x86_64/texlive-most)
- Printing/Scanning
  - [gscan2pdf](http://gscan2pdf.sourceforge.net): A GUI with OCR capability to produce PDFs or DjVus from scanned documents

    `Linux`, [`OpenSource-GPL`](https://sourceforge.net/projects/gscan2pdf/), `GUI`, `scanner-manager`
    - Pacman: [`gscan2pdf`](https://www.archlinux.org/packages/?q=gscan2pdf)
  - [hplip](https://hplipopensource.com): Provides drivers for HP printers and manages them

    `Linux`, [`OpenSource-GPL2`](https://sourceforge.net/projects/hplip/), `GUI`, `printer-manager`
    - Pacman: [`hplip`](https://www.archlinux.org/packages/?q=hplip)
  - [system-config-printer](https://github.com/OpenPrinting/system-config-printer): A CUPS printer configuration tool and status applet

    `Linux`, [`OpenSource-GPL`](https://github.com/OpenPrinting/system-config-printer), `GUI`, `cups`, `printer-manager`
    - Pacman: [`system-config-printer`](https://www.archlinux.org/packages/?q=system-config-printer)
- Screenshare
  - [scrcpy](https://github.com/Genymobile/scrcpy): Display and control a USB connected Android 5.0+ device

    `Linux`, `Windows`, [`OpenSource-APACHE`](https://github.com/Genymobile/scrcpy), `CLI`, `android`
    - Pacman [AUR]: [`scrcpy`](https://aur.archlinux.org/packages/?K=scrcpy)
- Storage
  - [baobab](https://wiki.gnome.org/Apps/DiskUsageAnalyzer): Visualize files and their sizes of a drive in a pie graph

    `Linux`, [`OpenSource-GPL2`](https://wiki.gnome.org/Apps/DiskUsageAnalyzer), `GUI`, `file-system-usage-monitor`
    - Pacman: [`baobab`](https://www.archlinux.org/packages/?q=baobab)
  - [Filezilla](https://filezilla-project.org): FTP, FTPS and SFTP client

    `Linux`, `Windows`, [`OpenSource-GPL`](https://filezilla-project.org/sourcecode.php), `GUI`, `file-system-usage-monitor`
    - Pacman: [`filezilla`](https://www.archlinux.org/packages/?q=filezilla)
  - [gnome-disk-utility](https://gitlab.gnome.org/GNOME/gnome-disk-utility): Disk Management Utility to get connected drives, their partitions and more details

    `Linux`, [`OpenSource-GPL`](https://gitlab.gnome.org/GNOME/gnome-disk-utility), `GUI`, `file-system-usage-monitor`, `partition-manager`
    - Pacman: [`gnome-disk-utility`](https://www.archlinux.org/packages/?q=gnome-disk-utility)
  - [grive](https://github.com/vitalif/grive2): Synchronize Google Drive data

    `Linux`, [`OpenSource-GPL2`](https://github.com/vitalif/grive2), `CLI`, `google-drive-synchronization`
    - Pacman [AUR GIT]: [`grive-git`](https://aur.archlinux.org/packages/?K=grive-git)
  - [onedrive-abraunegg](https://github.com/abraunegg/onedrive): Synchronize Microsoft OneDrive data

    `Linux`, [`OpenSource-GPL`](https://github.com/abraunegg/onedrive), `CLI`, `microsoft-onedrive-synchronization`
    - Pacman [AUR]: [`onedrive-abraunegg`](https://aur.archlinux.org/packages/?K=onedrive-abraunegg)
  - [smartmontools](http://smartmontools.sourceforge.net): Control and monitor S.M.A.R.T. enabled ATA and SCSI Hard Drives

    `Linux`, [`OpenSource-GPL`](https://github.com/smartmontools/smartmontools), `GUI`, `file-system-usage-monitor`, `ssd-health`
    - Setup: Get SSD drive health/stats via `sudo smartctl -t long -a /dev/nvme0n1`
    - Pacman: [`smartmontools`](https://www.archlinux.org/packages/?q=smartmontools)
  - [SpaceSniffer](http://www.uderzo.it/main_products/space_sniffer/): Shows the file structure and file sizes in an easy to read graphical window

    `Windows`, `ClosedSource`, `GUI`, `file-system-usage-monitor`
- System
  - [Balena Etcher](https://balena.io/etcher): Burn ISO files for operating systems to USB sticks

    `Linux`, `Windows`, [`OpenSource-APACHE`](https://github.com/balena-io/etcher), `GUI`, `iso-burner`
    - Pacman [AUR]: [`balena-etcher`](https://aur.archlinux.org/packages/?K=balena-etcher)
  - [htop](https://htop.dev): Task Manager

    `Linux`, [`OpenSource-MIT`](https://github.com/htop-dev/htop), `CLI`, `hardware-monitor`, `task-manager`
    - Pacman: [`htop`](https://www.archlinux.org/packages/?q=htop)
  - [timeshift](https://github.com/teejee2008/timeshift): A system restore utility that also allows file restoration

    `Linux`, [`OpenSource-GPL`](https://github.com/teejee2008/timeshift), `GUI`, `os-backup`
    - Pacman [AUR]: [`timeshift`](https://aur.archlinux.org/packages/?K=timeshift)
- Video
  - [Handbrake](https://handbrake.fr): A video converter

    `Linux`, `Windows`, [`OpenSource-GPL`](https://github.com/HandBrake/HandBrake), `GUI`, `video-compressor`, `video-converter`
    - Pacman: [`handbrake`](https://www.archlinux.org/packages/?q=handbrake)
  - [MPV](https://mpv.io): A animalistic video player

    `Linux`, `Windows`, [`OpenSource-GPL3`](https://github.com/mpv-player/mpv), `GUI`, `audio-player`, `video-player`
    - Pacman: [`mpv`](https://www.archlinux.org/packages/?q=mpv)
  - [OBS](https://obsproject.com): A live streaming toolbox (YouTube, Twitch, ...)

    `Linux`, `Windows`, [`OpenSource-GPL2`](https://github.com/obsproject/obs-studio), `GUI`, `live-streaming`, `video-streaming`
    - Pacman: [`obs-studio`](https://www.archlinux.org/packages/?q=obs-studio)
  - [OpenShot](https://www.openshot.org/): A video editor

    `Linux`, `Windows`, [`OpenSource-GPL3`](https://github.com/OpenShot/openshot-qt), `GUI`, `video-creator`, `video-editor`
    - Bugs: Many GPU accelerated options do not actually use the GPU or multiple threads which makes the program really slow and NVIDIA GPU accelerated video encoding crashes every time on export
    - Pacman: [`openshot`](https://www.archlinux.org/packages/?q=openshot)
  - [Shotcut](https://www.shotcut.org): A video editor

    `Linux`, `Windows`, [`OpenSource-GPL3`](https://github.com/mltframework/shotcut), `GUI`, `video-creator`, `video-editor`
    - Pacman: [`shotcut`](https://www.archlinux.org/packages/?q=shotcut)
  - [VLC Media Player](https://www.videolan.org/vlc): A feature rich video player

    `Linux`, `Windows`, [`OpenSource-GPL2+LGPL2.1`](https://code.videolan.org/videolan/vlc), `GUI`, `audio-player`, `video-player`
    - Pacman: [`vlc`](https://www.archlinux.org/packages/?q=vlc)
  - [youtube-dl](https://ytdl-org.github.io/youtube-dl): A command-line program to download videos from YouTube.com and a few more sites

    `Linux`, `Windows`, [`OpenSource-Unlicense`](https://github.com/ytdl-org/youtube-dl), `CLI`, `video-downloader`
    - Pacman: [`youtube-dl`](https://www.archlinux.org/packages/?q=youtube-dl)
- Web
  - [Firefox](https://www.mozilla.org/de/firefox/new): A browser

    `Linux`, `Windows`, [`OpenSource-GPL+LGPL+MPL`](https://searchfox.org/mozilla-central/source/), `GUI`, `web-browser`
    - Pacman: [`firefox`](https://www.archlinux.org/packages/?q=firefox)
    - Pacman [AUR NIGHTLY]: [`firefox-nightly`](https://aur.archlinux.org/packages/?K=firefox-nightly)

[//]: # (Best Programs end)

---

To update the list edit [`best_programs.json`](best_programs.json) and run:

```sh
npm install # this is only necessary once
npm run start
```
