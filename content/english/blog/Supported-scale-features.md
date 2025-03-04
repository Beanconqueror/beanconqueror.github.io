---
title: "Supported scale features"
meta_title: "Supported scale features"
description: "this is meta description"
date: 2025-03-01T10:00:00Z
image: ""
categories: ["Scale"]
author: "Lars Saalbach"
tags: ["Scale", "Features"]
draft: false
---

The most of the supported scales which are supported in Beanconqueror having a closed source API. (Acaia, Felicita, Hiroia, etc.)

That means that the implementation in Beanconqueror was a try & error situation to finally get it going.

We as Beanconqueror have tried to get official API support and documentation, without success.

The most integrations where done from the community (BIG THANKS!) which had a device at home. Therefore the modes like on a Acaia Scale can't be supported, because  Beanconqueror simply does not know the Bluetooth interfaces and how to interact with them.  Thats also the situation like when a button press on a scale is not reported to Beanconqueror e.g. Timer Start or Tare.  

 

## What can you do?

After you've bought the product from the manufacturer you can open up a support request ticket to ask them to support Beanconqueror native and reach out to me: info@beanconqueror.com. 

For an implementation, I also need a development device because experience has shown that implementing without a device for testing is extremely time-consuming and incredibly frustrating.

 

## Some last words

Beanconqueror currently supports approximately 25 different scales, each functioning in unique ways. To accommodate this, we developed custom logic to enable features like automatic start or stop on the first drip, as well as calculating our own flow values and similar functionalities.

Why is this necessary? As mentioned, not all scales provide the same data or capabilities, making it challenging to integrate 25 distinct solutions into a single brewing page.

As a result, certain features, such as a brewing recipe mode for Acaia scales (referenced above) or support for auto start/stop features, are unlikely to be implemented.