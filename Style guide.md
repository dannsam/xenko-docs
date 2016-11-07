---
breaks: false
---

# Documentation style guide

This guide explains how to write Xenko documentation.

* [Style](#Style)
  * [Use simple words](#SimpleVocabulary)
  * [Use active voice](#ActiveVoice)
  * [Use the second person](#Person)
  * [Instructions](#Instructions)
  ( [Words to watch](  *Wr))

* [Page content](#PagesContent)
  * [Getting Started Pages](#GettingStarted)
  * [Tutorials Pages](#Tutorials)
  * [Section Header Pages](#SectionHeader)
  * [Reference Pages](#Reference)
  * [HOWTO Pages](#Howtos)
  * [Avoid Long Explanations](#LongExplanations)
  * [Use Images & Videos](#UseImagesVideos)
* [Pages & Files Structure](#FilesStructure)
  * [Pages Hierarchy](#PagesHierarchy) 
  * [Pages Order](#PagesOrder)
  * [Files Hierarchy](#FilesHierarchy)
  * [Files Name](#FilesName)
* [Formatting](#Formatting)
  * [Text Styling](#Styling)
  * [Definitions](#Definitions)
    * [Xenko terms](#XenkoTerms)
    * [Game terms](#VideoGameTerms)
    * [Job terms](#JobTerms)
  * [Page References](#References)
  * [Related Topics](#RelatedTopics)
  * [API References](#APIReferences)
  * [Code References](#CodeReference)
  * [Placeholders](#Placeholders)
  * [Labels](#Labels)
  * [Notes, tips, and warnings](#Remarks)
  * [Platform-specific information](#PlatformRemarks)
  * [Notices](#Notices)
  * [Media](#Media)
    * [Videos](#Videos)
    * [Images](#Images)
    * [Diagrams](#Diagrams)
  * [Tables](#Tables)
  * [Lists](#Lists)
  * [Headers](#Headers)
  * [Capitals](#Capitalization)


# <a name="Style">Style </a>

## <a name="Tone">Tone</a>
> **Good**
> 
>  Write conversationally, as if you're talking to the reader in person. Use friendly, simple, neutral language. Delete every word you don't need.
> 
> **Bad**
>
>  Express your intended meaning with the parlance of a patient companion, trusted confidant or friendly acquaintance, as if one were engaged in healthy dialogue within the bodily proximity of the other. Maintain the usage of personable, candid, impressive language, without prevarication. Excise from one's utterance each and every word that proves itself surplus to the need at hand.

##  <a name="SimpleVocabulary">Use simple words</a>

Don't use obscure words and jargon when simple words will do. Keep in mind that we write for an international audience, and that not all Xenko users are native English speakers.

> **Good**
> 
>  use
> 
> **Bad**
>
>  utilize, utilization, usage

##  <a name="ActiveVoice">Use active voice </a>

Where possible, use active voice. This means that the **subject** of 
the sentence performs the action (verb). For example: "I (subject) ate the apple." 

This contrasts with passive voice, whereby the subject is acted on. For example: "The apple (subject) is eaten by me."

In most cases, active voice is easier to read.

> **Good**
> 
> The compiler transforms source code into an executable file.

> **Bad**
> 
> The source code is transformed into an executable file by the compiler.

Try to use active verbs where possible:

> **Good**
> 
> The **Create a new game** dialog opens.

> **Bad**
> 
> The **Create a new game** dialog is displayed.

##  <a name="Person">Use the second person</a>
Write directly to the reader, using imperative sentences and words like "you". Tell your reader what you want them to learn.

> **Good**
> 
> You can specify the project name.
> 
> **Bad**
> 
> The project name can be specified.

## <a name="Instructions">Don't use marketing language</a>
Documentation isn't the place to promote our software. When writing generally, don't describe  something as simple, easy, etc.

The exception is when you're explaining why the reader might want to use one method over another. In this situation it's fine to write something like "The simplest way to do X is..."

## <a name="Instructions">Instructions</a>

When writing instructions, break the tasks into numbered steps.

Write the goal of each step at the start of the sentence, not the end.

> **Good**
> 
> To start Xenko, click **Start**.

> **Bad**
> 
> Click **Start** to start Xenko.

##  <a name="WordsToWatch">Words to watch</a>

### allows you, enables you, lets you
Avoid. "Enables" is wordy marketing speak, and "lets" and "allows" sound like our software is giving you permission.

Instead, write "With X, you can Y". Better yet, write it as an active sentence, describing what the software itself does: "X does Y."

### eg, etc, ie
These don't require periods or commas. They were once necessary for print setting, but are now cumbersome to read with digital displays.

For reference, eg means "for example", and "ie" means "that is" (explaining in different terms).

In most cases, writing "for example"in full is better than writing eg, but the abbreviations are appropriate in parentheses or when space is limited, like tooltips.

### mouse and key actions
Capitalize as most keyboards do, like this:
* click (not click on or press)
* right-click
* double-click
* Ctrl
* Alt
* Shift
* Enter
* Backspace
* Space (not the space bar)
* Tab
* Caps Lock
* A, B, C etc (for letter keys)
* F1, F2 etc

Use "+" for simultaneous actions. For example: "Highlight the objects with Shift + click or Ctrl + click."

### page
Not article, topic, subject, etc.

### screen
Not to be used to describe parts of a UI. Be specific: is it a dialog box, tab, pane, page, something else?

### screenshot
Not screen or screengrab. 

### see
Not refer to.

### semicolons
OK in some situations, but always consider using a period instead.
 
A simple test: replace your semicolon with a period. Does your sentence make sense? If not, you probably used the semicolon incorrectly (unless you're writing a list).

If you're not confident with semicolons, don't use them.

### set up / setup
Verb: set up

Noun: setup 

### start up / startup
Verb: start up (eg start up a computer)

Noun: startup (eg check for updates on startup)

### sub-
Don't hyphenate words that begin with sub. Instead, write subfolder, subheading, subsection, subdomain, etc.

### up to date 
But up-to-date drivers (as an adjective). For example: "The drivers are up to date", but "Download up-to-date drivers".

### use
Not usage, utilize, utilization, or other weird form.

### want
Not wish.

### with
Be careful. When written to mean using, this can lead to unwanted ambiguity. For example, "select the objects with the checkboxes" could be read as "select the objects that have checkboxes" or "select the objects and the checkboxes".

#  <a name="PagesContent"> Page content </a>

Xenko documentation is composed of different types of pages. The expected content and layout
of the page directly depends on the type. Before writing your article, start by identifying the 
type of page you are targeting, then follow the below templates for content and layout.

In addition to content and layout guidelines based on the type of page, we finish this section 
with a few generic recommendations for the content.

##  <a name="GettingStarted"> Getting started pages </a>

Getting Started articles aim at guiding new Xenko users in their first steps. Pages should cover only basic 
and essential topics and don't need to explain concepts in depth. Only one subject should be covered per page.

Pages targeting any kind of audience should be inserted directly under the Getting Started root page.
Pages targeting a specific audience should be inserted under a page specifying the audience. Getting
Started pages order should follow the progress of a Xenko new user.

A Getting Started page consists of the following content:

1. The page title (the subject dealt in the page).
2. A short introduction explaining why the topic matters and the purposes of the feature or tool.
3. A short paragraph explaining what the reader will concretely learn to do in the page.
4. An image or a video illustrating what the user will learn (if possible).
5. The subheadings and the content of the page.

Example:
```
# Design Scenes with Xenko.

Scenes are an essential element of your game. They allow you to divide the content of your game into levels and modules.
In this article you will learn how to create and populate scenes from the editor in Xenko.

[Scene Image](media/scene.png)

## Drag and drop elements in your scene

...
```

##  <a name="Tutorials"> Tutorials </a>

The purpose of tutorials is to accompany users through the creation of a game component. Each tutorial 
starts from a initial state (most of the time an empty game) and ends to a final state (mini game or 
game component completed). A page should be created for each main step of the final realization.
Pages should be ordered chronologically and next pages should start exactly were previous pages stop.
A folder should be created for each tutorial. 

A tutorial heading page consists of the following content:

1. The page title (name of the tutorial).
2. A description of what will be realized and what can be learned from the tutorial. 
3. The knowledge needed to be able to complete the tutorial (if any). 
4. One or several images of the final realization (if possible). 
5. A table of content with the links to the tutorial sub-pages (ordered list).

Example
```
# My 2D game tutorial

In this tutorial you will create a simple 2D game from scratch. You will learn how to create a scene,
perform collisions between elements and add a UI to your game.
This tutorial assumes that you know how to create a new project and import assets in Xenko.

[My 2D Game Image](media/my2dGame.png)

1. [Import assets](ImportAsset.md)
2. [Create your level](CreateLevel.md)
3. [Add Collisions](AddCollisions.md)
4. [Add a UI](AddUI.md)
```

A tutorial page consists of the following content:

1. The page title (realization of the page) 
2. Links to previous and next tutorial pages
3. A description of what will be realized in the current page and what will be learned. 
4. One or several pictures illustrating the realization of the page (if possible).
5. The sub-steps and the content of the page.
6. A sentence introducing the next page of the tutorial including a link.

Example
```
# Add UI to the game

Previous [Use Physics Collisions](UsePhysicsCollision.md) | Next [Deploy your game](DeployYourGame.md)

In this page you will add a simple UI to your game. You will learn how to create a UI using Xenko default 
design and make it interact with the gameplay.

[My Game UI Image](media/MyGameUI.png)

1. [Add a UI component](# Add a UI component)
2. [Set the UI](# Set the UI)
3. [Make UI interact with your game](# Make UI interact with your game)

## Add a UI component 

...

In the next section we will see how you can [Deploy your game](DeployYourGame.md).

```

Note: as much as possible each instruction should be surrounded by two images showing the state 
before and after the instruction. Image before the first instruction should correspond to the initial
state and last image should correspond to the final state.

##  <a name="SectionHeader"> Section heading pages </a>

Section headings are the top pages of the folders of the documentation. The goal of heading pages is 
to introduce the section topic, to expose the best features of the engine and to provide an overview of the section.

A heading page consists of:

1. The name of the section as title
2. An image illustrating the section (for sub-folder this image can be skipped)
3. A short introduction sentence explaining what is the section about.
4. A paragraph exposing the main and best features of the engine on the topic.
5. A short paragraph explaining what can be learned by reading this section. 
6. An overview of the section giving a full insight of the topic (objectives, challenges, base concepts).

Note: for sub-folder headings only an overview or links to main subjects can be enough for a section heading page.

Example
```
# Physics

![Physic Section Image](media/PhysicSection.png)

Physics allows you to make physics simulations in your game.

Xenko has a physic system fully integrated in its game studio. Its dedicated physic editor allows you to
directly edit physic shapes of objects or to automatically generate them from the models. 

In this section you will learn how to simulate collisions between objects, add trigger regions, apply 
physic law on objects, etc.

## Overview

The goal of the physic engine is to provide ways to produce and automate actions on your game elements
so that they seems to follow physic laws. Accurate physic simulations being very costly all physic behaviors
have to be approximated. 

# Physic Shapes

![Physic Shapes Image](media/PhysicShapes.png)
...

# Physic object types
...
```

##  <a name="Reference"> Reference pages </a>

Reference pages explain in depth a specific concept, feature, or element.

A reference page consists of:

1. The page title (name of the concept)
2. The definition and explanation of the concept.
3. The standard usages of the concept and a explanation why the topic matters.
4. An image illustrating the concept (if possible)
6. The sub-topics with the content (functionalities, usages samples, etc)

Example
```
# Materials

A material is a set of rules defining how to render an element.

You can use materials with model, particles system and sprites to define the color, lighting and shadowing
of your element.

![Material Image](media/Material.png)

1. Object geometry

...

2. Object shading
...

```


##  <a name="Howtos"> HOWTO pages </a>

The goal of the HOWTO pages is to provide a list of clear instructions to realize a specific thing. 
Each HOWTO page should be independent from other HOWTO pages and guide the reader towards 
a single target. It should not define nor explain any concept.

A HOWTO page consists of:

1. The page title (phrase starting with a verb describing the target)
2. The knowledge needed to understand the instructions.
3. The goal of the page and what the user will learn to doc-audience
4. An image of the final realization (if possible)
5. The main steps and their explanations and sub-instructions (add the step number in the sub-title)

Example
```
# Add particles inside our UI

Prerequisites: This page assumes that you know how to use particles and UI elements in general.

In this page you will learn how to attach particles to an UI element.

![Particles In UI Image](media/ParticlesInUI.png)

## 1. Create your particle Effect.
...

## 2. Create your UI
...

## 3. Add a UI link component
...

```

Note: as much as possible each instruction should be surrounded by two images showing the state 
before and after the instruction. Image before the first instruction should correspond to the initial
state and last image should correspond to the final state.

##  <a name="LongExplanations"> Keep pages short</a>

Long pages discourage readers and make it difficult to retain information. Try to explain no more than one concept in a paragraph.

Pages should be no longer than eight screen lengths, including images. If your page is getting long, split it into separate articles.

##  <a name="UseImagesVideos"> Use images and videos </a>

Images (like screenshots and diagrams) help the reader. Short videos and animated GIFs are especially useful.

#  <a name="FilesStructure"> Structure </a>

The hierarchy of the documentation pages is specified in the [manual/toc.md](manual/toc.md) file
and is independent from the file hierarchy of this repository. For example, a single article can
be added several times at different location in the documentation if needed. Nevertheless for ease
we ask you to try to keep the same hierarchy between the documentation pages and this
repository files.

To add a new page in the documentation, just add a new entry at the appropriate place in the 
[toc](manual/toc.md) file.

## <a name="PagesHierarchy"> Page hierarchy </a>

As a general rule, avoid deep hierarchies for the ease of navigation.
As much as possible we recommend you not to go beyond 4 levels of depth.

> Getting Started
>   - Common Topic
>   - Targeted Audience
>      - Topic
> Tutorials
>   - My 2D game
>   - My 3D game
> Engine
>   - Topic
>   - Sub-Category
>     - Sub-Topic
>   - HOWTO
>     - Do something

Page naming conventions:
* The name of the pages under the HOWTO folder should start with a verb and describe an objective ('Activate post-effects to your game', etc)

## <a name="PagesOrder"> Page order </a>

As a general rule, order pages like this:

1. Chronologically when appropriate (Getting started / tutorial pages)
2. By importance (Overview pages -> References pages -> HOWTOs) 
3. Alphabetically when pages are of equal importance

## <a name="FilesHierarchy"> File hierarchy </a>

Article files should be organized into folders. As much as possible we will try to respect the
same hierarchy as the documentation. Files corresponding to section heading should be included at the 
top of the folder having the same name and be named 'index.md'. Folder and file names should be
composed of only **lower case letters, words should be separated by dashes**.

Media files (images and videos) referenced in articles should be placed in a dedicated folder
named 'media' and put next to the referencing articles.

Code sample files (C#, scripts, etc) referenced in articles should be placed in a dedicated 
folder named 'code' and put next to the referencing articles.

Hierarchy example:

> graphic
>   - index.md
>   - overview.md
>   - media
>     - overview-image1.png
>     - overview-image2.png
>     - overview-video2.mp4
>   - post-effects
>     - index.md
>     - media
>       - post-effect-image1.png
>     - code
>       - post-effect-code.cs

## <a name="FilesName"> File names </a>

File names should consist only of **lowercase letters** and **words separated by dashes**.
Give clear names to files and start the page name by either an active verb or a noun (avoid -ing form verbs).

- Section headings should be named 'index.md'
- Page files should be named using the page title; eg Audio emitters becomes audio-emitters.md
- Media files should have a simple, descriptive names

Examples:
> **Good**  
> index.md  
> point-light.md  
> point-light-diagram.png  
>
> **Bad**  
> graphics-index.md  
> PointLightFile1.md  
> Img20150902.png  

#  <a name="Formatting"> Formatting </a>

##  <a name="Styling">Styling text</a>
**Bold** the names of things users will interact with or look for – important, active stuff, such as:
* buttons
* dialog boxes
* tabs
* panes
* text fields
* menus
* checkboxes

For example: "To start Xenko, click **Start**."

##  <a name="Definitions"> Definitions </a>

Define terms that the reader might not know. Only define the first use of the word on each page. If the expected audience for the page is intermediate or advanced, you can skip basic definitions. For terms that are not exclusive to Xenko, consider linking to an external resource such as Wikipedia. 

###  <a name="XenkoTerms"> Xenko terms </a>

These terms are specific to Xenko, such as asset,
live scripting, and graphic compositor. 

These must be defined. You don't necessary need to create a page for each term; if it's simple to explain, you can define it in the page where it's mentioned.

Add the following tagg TODO virgile when we are done in editor doc. 
Then link it at least every first occurrence of the word in an article. 
In addition add a shorter version of the definition as metadata in the page.
This will be used later to create definition tooltips.

For example:

```
TODO @virgile: update this
```

###  <a name="VideoGameTerms">Game terms </a>

These terms are specific to the game and graphics industries. SUCH AS?

They should be briefly defined. If the term is important for Xenko (eg forward rendering), you might want to explain in a little more detail.

The brief definition will be used to build tooltip in the documentation and Game Studio. 

Example
```
TODO @virgile

In Xenko you can choose between @forward-rendering and @deffered-rendering. (<-link to a dedicated pages).

Depending on the rendering model the [Shaders](http://wikipedia/shaders) are completely different. 
(<- external reference)

The more complex shaders are blablabla (<- second reference no link)
```

###  <a name="JobTerms"> Job terms </a>

These terms are specific to a role in game development. SUCH AS?

They only need to be defined when we expect people who don't do that job to read the page, or when the term is used in the Xenko API.

##  <a name="References"> Linking to other pages </a>

When you mention a term that has its own documentation page, link to it. For most terms, you should only link on the first mention. For API terms, you should link every time you mention it (see below).

To link to a page:

1. Add a uid at the top of the destination file.
2. When you want to link the page, reference it using the @uid shortcut.

For example:
```
material.md:
---
uid: material
---

Don't use anything like "click here" for a link; there's always a better way of doing it.

Ideally, the title of the linked page will be self-explanatory. In this case use the title in your link.

If the information you're talking about isn't obvious from the page title, explain what relevant information it contains **before** you link: "For more information about XYZ, see **Cool page**." 

Punctuation (eg periods and commas) following the link should never be part of the link text.

# Material
...

sprite.md:
For more information about sprite color, read @material.
```

For more information, see the DocFX documentation.

## <a name="RelatedTopics"> Related topics </a>
Link to related topics at the bottom of the page.

To do this, use the **doc-relatedtopics** style. For example:
```
<div class="doc-relatedtopics">
* [Page1](link-to-page1)
* [Page2](link-to-page2)
* [Page3](link-to-page3)
</div>
```

## <a name="APIReferences"> API references </a>

Link to an API reference page **every time** you mention an API class, interface, function, etc.

To avoid adding the same link repeatedly, you can replace the function name with an action verb.

To adding a link to a reference API, use:
> @'MyNamespace.MyClass.MyFunction'

For example:
```
To play a sound, use the @'SiliconStudio.Xenko.Audio.SoundEffectInstance.Play' function.
Playing an ongoing sound has no effect. Playing a stopped sound restarts the sound from beginning.
```

## <a name="CodeReference"> Code samples</a>

Code samples should be as short as possible, properly formatted, and properly commented.

To include code directly in your article:

> \`\`\`cs  
> Asset.Unload(asset);  
> \`\`\`

If the same code sample is used in several pages, add a reference to a code file so it can be referenced from multiple pages. This means the code doesn't have to be edited in multiple pages when you change it.

> \[\!code-csharp\[Main\]\(index.cs?start=5&end=9\)\]  // add line 5 to 9 of file index.cs

## <a name="Placeholders"> Placeholder names</a>

When naming placeholder files, use the format "My___". This makes it clear that the name is a placeholder.

For example:
> Content.Load("MyFolder/MyAsset");

## <a name="Labels"> Target audience labels </a>
You can indicate the target audience of the page (for example beginners or designers) using a label. Place them right after the top-level title.

You can indicate:

* skill levels (Beginner, Intermediate, Advanced) with `label-doc-level`
* audiences (Artist, Programmer, Designer) with `label-doc-audience`
* platforms (eg iOS, Android) with `label-doc-platform`
* versions (eg Xenko 2.1) with `label-doc-version`

For example:
```
# Title

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Artist</span>

## Overview

Lorem ipsum...
```


## <a name="Remarks"> Notes, tips, and warnings </a>
Use a note or tip box when you want to mention optional information that isn't necessary to the task.

Use a warning when you want to highlight critical information that might cause problems if the reader doesn't see it.

```
> [!NOTE]
> Some useful notes
```

Available types:
* NOTE
* TIP
* WARNING

## <a name="PlatformRemarks"> Platform-specific information </a>

Indicate information that's specific to particular platforms. This means the reader can skip it if they're using a different platform.

You can use the following style classes:
```
<div class="doc-android">Android-specific text</div>
<div class="doc-iOS">iOS-specific text</div>
<div class="doc-Windows">Windows-specific text</div>
<div class="doc-Linux">Linux-specific text</div>
```

## <a name="Notices"> Notices </a>
Use notices to inform the reader that a page is incomplete or out of date.

```
<div class="doc-incomplete"/>  -> This page is incomplete
<div class="doc-outofdate"/> -> This page is out of date
```
These also add the 🔧 character to the page title.

## <a name="Media"> Media </a>

Add media (such as images and videos) using the following syntax:
> \!\[Graphics Compositor Diagram\]\(media/graphics-compositor.png\)  

In this example, the text "Graphic Compositor Diagram" is displayed if the image file isn't found.
'media/graphics-compositor.png' is the relative path to the file.

When you add a media file, please also include the source file (such as Photoshop files, Visio files, Adobe Premiere files, etc) used to create 
your media file. We can use these to update media if necessary.

When you create your media, try as much as possible to use free or mainstream tools. This makes it easier for us to modify the source files if necessary.

### <a name="Videos"> Videos </a>

Please use the **MP4** format and **H265** encryption for videos. We recommend Adobe After Effects for video editing.

Try to keep your video sizes low to keep page loading times down.

### <a name="Images"> Images </a>

Use the **JPEG** format for high-resolution images and **PNG** for other images. Please try to use Photoshop, GIMP and Paint.net for the source files.

Don't resize images when you create your media; the documentation pages automatically resize images to fit.

### <a name="Diagrams"> Diagrams </a>

Diagrams should be rendered as **PNG** or vector images. 

Since the documentation pages automatically resize images to fit, make sure that text in your diagrams is still readable after resizing. 

When a diagram is too big and can't be reduced, allow the reader to click and open it in full size. You can do this with the following syntax:
TODO virgile

Diagrams can be created with Visio or standard image editing tools.

## <a name="Tables"> Tables </a>

Add tables to the documentation by following the markdown syntax. Tables can improve the
way information is display but sometimes does not properly scale down. So be sure to try your page
on small resolution screen like Smart-phones before submitting your page.

## <a name="Lists"> Lists </a>
Lists make things easy to read. Use them!

If each item in the list is a sentence, use sentence case: capitalize the first word and end with a period.

- This is a sentence, for example.
- This is also a sentence.
- This is a sentence too.

If the items are fragments, or follow an introduction marked with a colon, use lowercase with no period. For example, these:

- are fragments
- that continue from the introductory "these:" sentence
- so don't use sentence case

When writing step-by-step instructions, use numbers rather than bullet points.

Try to keep items in sentences short.

## <a name="Headers"> Headings </a>

Use the markdown '#' to make headings. 

Only page titles should have the H1 style. Other headings and should be H2 or above.

Keep headings short and simple. Try to use nouns or active verbs. For "how to" pages, use gerunds (eg "Creating backups"). 

Don't use questions (eg "How do I create a backup?").

For example:
> \# Top Title: How to write headings
> \___  
> \## Write a subheading
> \### Write a sub-subfolder  
> \### Write a sub-subfolder  
> \## Write a subfolder  

## <a name="Capitalization"> Capitals </a>
From the [Guardian style guide:](https://www.theguardian.com/guardian-observer-style-guide-c): 

>Times have changed since the days of medieval manuscripts with elaborate hand-illuminated capital letters, or Victorian documents in which not just proper names, but virtually all nouns, were given initial caps (a Tradition valiantly maintained to this day by Estate Agents). A look through newspaper archives would show greater use of capitals the further back you went. 
>
>The tendency towards lowercase, which in part reflects a less formal, less deferential society, has been accelerated by the explosion of the internet: some web companies, and many email users, have dispensed with capitals altogether.

Uppercase sentences used to appear in software all over the place, but it's going out of style. It looks dated and self-important, and is increasingly used in the tech world only by BuzzFeed headline writers.

Use lowercase for stuff that isn't a proper noun, including:

* sentences following colons or semicolons
* headings
* button labels
* menu options
* job titles (eg artist, developer)
* bullet points when the point leads from a sentence you've already started (like this one)

Don't emphasize words by writing them in capitals; IT LOOKS LIKE SHOUTING. If you must emphasize, use **bold**.