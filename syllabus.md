Quick links: [Class Preparation](#class-preparation) | [Day One](#day-one-in-class-materials) | [Day Two](#day-two-in-class-materials) 

## The Body Everywhere and Here 

New York University  
Tisch School of the Arts  
ITPG-GT 2380 
The Body Everywhere and Here 
Fall 2026  
Course Credits — 1  

Saturday, 10/10 11:40am - 6:10pm  
Sunday, 10/11 12:10pm - 6:10pm  

## Instructor Contact

Instructor: Lisa Jamhoury  
Email: lisa.jamhoury@nyu.edu

## Course Objectives

At the completion of this course, the student will be able to:

- Think critically about the role of the physical body in digital and networked environments
- Better understand motion capture and how the body and its movements are represented digitally 

## Course Description

For an estimated 300,000 years, human experience has been rooted in the physical body. In the past few decades, we’ve evolved to engage through digital mediations—video calls, text messages, social profiles—where presence is fragmented, and embodiment is abstracted. How do we design digital experiences that acknowledge and activate the body rather than ignore it?

This weekend course explores embodied interaction in digital spaces through both theory and practice. We will examine the history and politics of motion capture, the role of presence in mediated environments, and the ways computers perceive and package the body. The course will include group discussions of influential works in the development of real-time embodied interaction, including those by Kit Galloway and Sherrie Rabinowitz, Susan Kozel, Myron Krueger, and Laurie Anderson. Students will work in groups with computer vision and real-time motion data to build interactive experiences that explore digital forms and their spatial impacts.

Emphasizing accessibility and experimentation, this course will focus on using low-fidelity and inexpensive tools that are easy to get up and running with, making them ideal for rapid prototyping and creative exploration. Tools that will be used include p5.js, ml5.js, webcams, and Microsoft Kinect. ICM-level programming experience is required.

## Evaluation and Policies

See [Evaluation and Policies](/policies.md).

## Mode of Instruction

This course will be offered entirely in person. If you need special accomodations please reach out. 

## Support

If you find yourself struggling, remember that you have many forms of support that you can take advantage of at ITP. Look out for the [office hours and help sessions that the residents offer](https://itp.nyu.edu/residents/contact-the-residents/). 

## Class Preparation 

### Required tools for class 

We will be coding using p5. If you'd like to follow along in class please make sure you have a code editor and terminal available. I will be using the following tools in class: 

- [Visual Studio Code](https://code.visualstudio.com/)
- [p5.vscode](https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [iTerm](https://iterm2.com/)
- Please also bring laptop, headphones, **some paper, and a pen or pencil** to class

### Required reading for class! Complete before the first class! 

Please read the following readings before coming to class. Each reading is just a few pages, but some of them are a bit thick. Give yourself some time to read and digest. We'll be discussing the materials at the top of our first class, and I'll be looking forward to hearing your thoughts. 

- Readings located on [Google Drive here](https://drive.google.com/drive/folders/1f38QY-0t23d-S_U3265s8vtKPOPRodG3?usp=sharing). Requires NYU Login to access. 

- **Exercise:** While reading, highlight the lines that stand out to you. For each reading, pick JUST ONE SENTENCE from EACH reading (5 sentences total). Place the sentences in [this Google Doc](https://docs.google.com/document/d/1I4JROQFbXaT7VoiDTXiAyghWySKJx6SoVU_jaZlOBjc/edit?usp=sharing) along with your first and last name. Requires NYU Login to access doc. Must be completed before class begins. _(With gratitude to [Zach Lieberman](https://www.instagram.com/zach.lieberman/?hl=en), from whom I learned this exercise.)_

- [Phenomenology of perception by Maurice Merleau-Ponty](https://drive.google.com/file/d/1xHP96xLGLJasFpEcwCLtYRBVf29x2N0x/view?usp=drive_link), pages 92-94 (through "what sees and touches")
- [Here/There: Telepresence, Touch, and Art at the Interface by Kris Paulsen](https://drive.google.com/file/d/18o0pNtYZz6qwTM3kNTxX41P0NaaCAPya/view?usp=drive_link), section titled "Telepresent Touch" pages 6-8, starting at bottom of page 6
- Closer: Performance, Technologies, Phenomenology by Susan Kozel, Adam Eeuwens, [pdf](https://github.com/lisajamhoury/The-Body-Everywhere-and-Here-2021/blob/main/readings/closer_2.pdf) | [audio file](https://github.com/lisajamhoury/Experiments-on-the-Embodied-Web-2024/tree/main/media)
- [The Extended Mind: The Power of Thinking Outside the Brain](https://drive.google.com/file/d/1aN4eHnycAdRNbcw_qE5w3I9PfP2-yqf-/view?usp=drive_link) Pages 1-2
- [The End of Average, Todd Rose, pages 1-9](https://github.com/lisajamhoury/The-Body-Everywhere-and-Here-2021/blob/main/readings/end_of_avg_intro.pdf)


## Day One In Class Materials

### Rough Schedule 

11:40 - 1:35pm — Syllabus, Intros, Theory  
 1:35 - 1:50pm — Break 1 (15 minute)  
 1:50 - 3:45pm — Code - motion detection with webcam / frame buffers  
 3:45 - 4:15pm — Break 2 (30 minute)  
 4:15 - 6:10pm — Code - motion detection with Kinect / 3D frame buffers

### Theory 

- Discussion Topic: What is a body? Can it be online? Why? How? 
- Discussion of homework readings 
- Independent and group activity, [Group Activity Board](https://docs.google.com/presentation/d/14iU3t-RmpN5bc9q2MUlXEpHCpjS5eoKsGdJj_-ysmWA/edit?usp=sharing) 
- Mocap history, forms, body politics, [Google Slides](https://docs.google.com/presentation/d/1TOpoinZ2oS9zU2P-ReEtj_HxaQ_761B4VlrfM8P_7Rc/edit?usp=sharing)

### Code Block 1

- Computer vision: how does the computer see the body
- Understanding framebuffers 

#### Examples 

- [Web cam examples](examples/day-1-webcam)

#### Resources

- [Navigating the array exercise](https://editor.p5js.org/lisajamhoury/sketches/3AW_uKOky)
- [Cat image](examples/assets/cat.jpg)

### Code Block 2 

- Computer vision in 3D: how does the computer see and process depth
- Working with Kinect via Kinectron

#### Examples 

- [Kinect / Kinectron examples](examples/day-1-kinect)


#### Additional Examples 

- [Kinectron Getting Started](/examples/other/01-kinectron-feed-test/) 
- [Kinectron Three.js Ribbons](/examples/other/02-kinectron-3js-ribbons/) 
- [Kinectron Three.js Pointcloud](/examples/other/03-kinectron-3js-pointcloud/) 

#### Resources 

- [HSB to RGB](https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately/54024653)
- [DepthDecoder](https://gist.github.com/lisajamhoury/aa516fe5c3c487eda9bd78af99955d86)
- [Kinectron](https://github.com/kinectron/kinectron)
- [Kinectron Server Releases](https://github.com/kinectron/kinectron/releases)

## Day Two In Class Materials 

### Rough Schedule 

12:10 - 1:55pm — Theory + Code | "The Third Space" and Code - keypoints / peer to peer  
1:55 - 2:10pm — Break 1 (15 minute)  
2:10 - 3:55pm — Theory: Site specificity / Practice — Design  
3:55 - 4:25pm — Break 2 (30 minute)  
4:25 - 6:10pm — Practice — Building / Sharing  

### Theory 

- Embodied interaction in the "third space" [Google Slides](https://docs.google.com/presentation/d/1sJ4Vd6ZlwUMPAeQ3eFfkatguL00LWJLsXO679xzlBXY/edit?usp=sharing) 

### Code Block 3

- Pose detection  
- Peer to peer
  
#### Examples 

- To come 
  
#### Resources

- [ml5 BodyPose](https://docs.ml5js.org/#/reference/bodypose)
- [p5LiveMedia](https://github.com/vanevery/p5LiveMedia?tab=readme-ov-file)
- [Keypoint smoothing](https://javascript.plainenglish.io/simple-smoothing-for-posenet-keypoints-cd1bc57f5872)
- [Keypoint smoothing example](https://editor.p5js.org/lisajamhoury/sketches/oB3r4UNOT)

### Theory and Practice 

- [Google Slides: Site specificity](https://docs.google.com/presentation/d/180KTU7JPKgmlsCNdwS-9RZiReiaFDDdolEXk-wSSa18/edit?usp=sharing)
- Practice — [Excercise Board](https://docs.google.com/presentation/d/1N8BDEyBj5u4TgAwGSp649GtASlks1ytW-I56r7NjG50/edit?usp=sharing)

## More resources 

### Helpful Links, Resources, Inspo — Day 1
- [Coding Train 9.12: Local Server, Text Editor, JavaScript Console - p5.js Tutorial](https://www.youtube.com/watch?v=UCHzlUiDD10)
- [Coding Train 11.3: The Pixel Array - p5.js Tutorial](https://www.youtube.com/watch?v=nMUMZ5YRxHI)
- [p5 Local Server](https://github.com/processing/p5.js/wiki/Local-server)
- [npm live-server](https://www.npmjs.com/package/live-server)
- [How to Turn Your Smartphone Into a Webcam](https://www.wired.com/story/use-your-phone-as-webcam/#:~:text=Install%20EpocCam%20Webcam%20Viewer%20from,network%20and%20launch%20the%20apps.)
- [Kyle McDonald JS CV Examples](https://kylemcdonald.github.io/cv-examples/) | Some more CV examples Stick to low and medium level for week 1 assignment
- Yining Shi Examples | [Posenet / Bodypix](https://github.com/yining1023/machine-learning-for-the-web/tree/master/week3-pose) | [Handpose / Facemesh](https://github.com/yining1023/machine-learning-for-the-web/tree/master/face-hand)
- [Lingdong Huang Mediapipe Demos](https://github.com/LingDong-/handpose-facemesh-demos)
- [Pose Animator: SVG Characters with Posenet](https://blog.tensorflow.org/2020/05/pose-animator-open-source-tool-to-bring-svg-characters-to-life.html)
- [clmtrackr](https://github.com/auduno/clmtrackr) | [Live example from Kyle McDonald](https://kylemcdonald.github.io/cv-examples/FaceTracking/)
- [tfjs face landmarks documentation](https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection)
- [ml5js.org](https://ml5js.org/)
- Coding Train ml5.js: Pose Estimation with PoseNet: [7.1](https://thecodingtrain.com/learning/ml5/7.1-posenet.html) | [7.2](https://thecodingtrain.com/learning/ml5/7.2-pose-classifier.html) | [7.3](https://thecodingtrain.com/learning/ml5/7.3-pose-regression.html)
- [Tips to improve your generative artwork](https://tylerxhobbs.com/essays/2018/tips-to-improve-your-generative-artwork)

### Helpful Links, Resources, Inspo — Day 2

#### General Kinect 
- [How to pronounce the name of Microsoft's cloud: Azure](https://www.youtube.com/watch?v=AmP11EgEM4g)
- [Kinect Windows / Azure Comparison](https://docs.microsoft.com/en-us/azure/kinect-dk/windows-comparison)
- [Azure Kinect Hardware Specification](https://docs.microsoft.com/en-us/azure/kinect-dk/hardware-specification)
- [Azure Kinect body joints documentation](https://docs.microsoft.com/en-us/azure/Kinect-dk/body-joints)
- [Understanding Kinect V2 Joints and Coordinate System](https://medium.com/@lisajamhoury/understanding-kinect-v2-joints-and-coordinate-system-4f4b90b9df16)

#### Kinectron
- [Kinectron](https://github.com/kinectron/kinectron)
- [Kinectron Server Releases](https://github.com/kinectron/kinectron/releases)
- [Kinectron Bootcamp Install by Jake Sherwood](https://jakesherwood.com/blog/body_ewah/kinectron-install)
- [Coding Train: Kinectron](https://www.youtube.com/watch?v=BV6xK3EOznI)
- [More Kinectron Examples](https://kinectron.github.io/docs/example-simple-skeleton.html) | Includes [Skeleton Example](https://kinectron.github.io/docs/example-skeleton-images-windows.html) 
— [Kinectron Github Repo Examples](https://github.com/kinectron/kinectron/tree/master/examples) | See [Feed Test Azure](https://github.com/kinectron/kinectron/tree/master/examples/azure_examples/p5_examples/feedTest) or [Feed Test Windows V2](https://github.com/kinectron/kinectron/tree/master/examples/windows_examples/p5_examples/feedTest) to see how all feeds work

#### Three.js 
- [Three.js Introduction](https://threejs.org/docs/#manual/en/introduction/Creating-a-scene)
- [THREE.Meshline](https://github.com/spite/THREE.MeshLine)

#### More resources
- [Kinect 2 Node Module](https://github.com/wouterverweirder/kinect2)
- [Azure Kinect Node Module](https://github.com/wouterverweirder/kinect-azure)
- [depth2web](https://github.com/js6450/depth2web)
- [Olos template](https://github.com/lisajamhoury/olos-template) 

### Further Reading 
- [Artificial Reality by Myron Krueger, pages 91-99](https://github.com/lisajamhoury/The-Body-Everywhere-and-Here-2021/blob/main/readings/artificial_reality_5.pdf)
- ["Mismatch: How Inclusion Shapes Design" Kat Holmes](https://mitpress.mit.edu/books/mismatch)
- [Video: Design for seven billion; design for one - Kat Holmes](https://www.youtube.com/watch?v=vPH1exUrSh8)



