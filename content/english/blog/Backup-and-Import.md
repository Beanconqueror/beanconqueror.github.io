---
title: "Backup & Import"
meta_title: "Backup & Import"
description: "this is meta description"
date: 2025-03-02T14:00:00Z
image: ""
categories: ["Backup & Import"]
author: "Lars Saalbach"
tags: ["Backup", "Import", "iOS", "Android"]
draft: false
---

## Automatic Backups

Beanconqueror does auto backups. They can be found here:

### iOS:

> Files App -> My Device -> Beanconqueror -> Beanconqueror_automatic_export*.zip

### Android:

> /storage/emulated/0/Android/data/com.beanconqueror.app/files/Download/Beanconqueror_export/Beanconqueror_automatic_export*.zip (Or ///datacom.beanconqueror.app/files/Download/Beanconqueror_export)

This data does NOT inherit images or brew graph data.

 

## Backup:

### iOS:

On iOS thats pretty easy, all data, images, brew graphs, backup files etc. are saved  below:
> Files App -> My Device -> Beanconqueror

### Android:

Open up Beanconqueror

> → Menu → Settings → Full export to directory

Now you can choose a full directory to export to, all images, brew graphs, etc. are included.

 

## Import: 

### iOS:

The best you can do, is to include Beanconqueror to iCloud Backup and if you get a new device, install your data from the iCloud.
Important!: You need to wait the installation and don’t skip.

If you don’t want / can’t include Beanconqueror to the iCloud Backup:

#### Old iPhone:

1. Export database
2. Beanconqueror app > Settings > General > Export > Save to Files
3. Choose a directory that is accessible from both iPhones, e.g.: **iCloud Drive > Downloads**
4. Save. The operation creates the file Beanconqueror.zip in the selected directory aswell as saving the images and flows.
5. Files app > On my iPhone
6. Press on folder Beanconqueror and hold until a context menu opens.
7. Compress
8. A ZIP file is created, e.g. **Documents.zip**. Press on ZIP file and hold until a context menu opens.
9. Copy or move
10. Choose a directory that is accessible from both iPhones, e.g.: **iCloud Drive > Downloads**
11. Copy

#### New iPhone:

1. Prepare Beanconqueror
2. If Beanconqueror app has already been installed and used, delete it.
3. Install the Beanconqueror app
4. Start Beanconqueror app and go through start screens without creating data.
5. Exit Beanconqueror app
6. Prepare Beanconqueror folder
7. Files app > On my iPhone
8. There should be a folder with the name Beanconqueror and the Beanconqueror logo. If this is not the case, restart iPhone and check again.
9. Switch to folder Beanconqueror
10. Delete all sub folders (Download etc.)
11. Press on folder and hold until a context menu opens.
12. Delete
13. Deploy images and flows
14. Files app > **iCloud Drive > Downloads**
15. Press on **Documents.zip** and hold until a context menu opens.
16. Decompress
17. Go to folder **Documents**
18. Point-point-point menu > Select > Select All
19. Press on any object and hold until a context menu opens.
20. Copy or move
21. Select Beanconqueror Folder: On My iPhone > Beanconqueror
22. Copy
23. Optional: Delete On my iPhone > Beanconqueror > Beanconqueror 2.zip
24. Import database
25. Beanconqueror app > Settings > General > Import
26. Browse > **iCloud Drive > Downloads** > Beanconqueror.zip
27. After successful import, exit and restart Beanconqueror app
28. Enjoy successful migration and have a coffee :-)

 

### Android:

#### Old device:

1. Export database
2. Beanconqueror app > Settings > General > Full export to directoy
3. Choose a directory
4. Save. The operation creates the file Beanconqueror.zip in the selected directory aswell as saving the images and flows.
5. Transfer this folder now to the new Android Phone.

#### New device:

1. Prepare Beanconqueror
2. If Beanconqueror app has already been installed and used, delete it.
3. Install the Beanconqueror app
4. Start Beanconqueror app and go through start screens without creating data.
5. Exit Beanconqueror app
6. Make sure the folder from the old Android phone is transferred.
7. Open Beanconqueror App > Settings > General > Full import from directory
8. Choose the directory where the full backup is saved and press import
9. Enjoy successful migration and have a coffee :-)