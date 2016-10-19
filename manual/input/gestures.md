# Gestures

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>

Gestures are predefined patterns of [Pointers](pointers.md).
Xenko is able to recognize these patterns and trigger corresponding events.
For instance, in a strategy game you can drag and drop a unit to the battlefield with a **Drag** gesture.

> [!Note] **Input System** uses normalized values.
> All lengths, speeds and error margins of configuration files must use normalized values.

##Overview

Gestures can be single or multi-finger.
There are **two main types** of gesture in Xenko:

* **Discrete** gestures (_Flick_, _LongPress_, _Tap_) that trigger a single event when they are recognized.

* **Continuous** gestures (_Drag_, _Composite_) that trigger a series of events every time an end-user changes the direction of the gesture.

A gesture is always in one of the following states: _Began_, _Changed_, _Ended_, _Occurred_.
You can query the current state of a gesture with [GestureEvent.State](xref="SiliconStudio.Xenko.Input.GestureEvent.State")
field of the triggered gesture events.

> [!Note] A _Discrete_ gesture always has a state **Occurred**.

> [!Note] A _Continuous_ gesture always starts with **Began** action, then followed by 0 or more **Changed** actions
> and ends with **Ended** action.

### Gesture Configuration

Gestures can be configured using the [GestureConfig](xref="SiliconStudio.Xenko.Input.GestureConfig") classes.

> [!Note] Each gesture has its own configuration class with its specific configuration parameters (see correspondence list below).

You can configure the following parameters:
* Number of fingers for the gesture.
* Number of taps.
* The duration of the taps.
* The direction of the gesture.
* *Etc.*

### Gesture Activation

As gesture recognition requires CPU time, the **Input System** does not recognize any **Gestures** by default. 

To activate the recognition of a gesture proceed as follows:
1. **Instantiate the gesture configuration** class corresponding to gesture you want to recognize. 
For example a [GestureConfigDrag](xref="SiliconStudio.Xenko.Input.GestureConfigDrag") for a drag gesture (see below for correspondence list).
2. Adjust configuration class parameters to **configure the gesture**.
3. To activate the gesture recognition, **add the gesture configuration** to the [ActivatedGestures](xref="SiliconStudio.Xenko.Input.InputManager.ActivatedGestures") collection.
4. **To stop the gesture recognition**, simply remove the gesture configuration from the [Input.ActivatedGestures](xref="SiliconStudio.Xenko.Input.InputManager.ActivatedGestures") collection.

> [!Warning] Once you activate a gesture for recognition, you can no longer modify its parameters.
To change gesture parameters, you have to delete the previous entry from the [ActivatedGestures](xref="SiliconStudio.Xenko.Input.InputManager.ActivatedGestures") collection and create a new entry with new parameters.

### Gesture Recognition

When the system detects a gesture, it adds a [GestureEvent](xref="SiliconStudio.Xenko.Input.GestureEvent") to the list of [GestureEvents](xref="SiliconStudio.Xenko.Input.InputManager.GestureEvents").
The event contains information about the gesture that have been detected and its current state (location, number of fingers, etc.).

> [!Note]
> Each gesture has its own associated gesture event class (see below for correspondence list).

The [GestureEvent.Type](xref="SiliconStudio.Xenko.Input.GestureEvent.Type") field of the event indicates which gesture has been recognized.
You can then cast the base gesture event into the gesture-specific event type to have gesture-type-specific information about the event.

The system can detect several gestures simultaneously, so the event list can contain more than one item in a given update.
The list is cleared every update, so you don't need to clear it manually. All **Gesture Events** not analyzed during a frame turn are lost.

##Supported Gestures

###Drag Gesture

![Drag Gesture](media/gestures_drag_gesture.png) 

**Type** : Continuous

**Configuration class**: [GestureConfigDrag](xref="SiliconStudio.Xenko.Input.GestureConfigDrag")

**Event class**: [GestureEventDrag](xref="SiliconStudio.Xenko.Input.GestureEventDrag")

**Action description**: A user touches the screen, performs a translation and withdraws his/her finger(s).

**Comments**: The number of fingers on the screen cannot vary during the gesture.
You can decrease [GestureConfigDrag.MinimumDragDistance](xref="SiliconStudio.Xenko.Input.GestureConfigDrag.MinimumDragDistance")
if the gesture must be triggered for **smaller drags**. 

You can restrict direction of the drag to **vertical** or **horizontal** by using 
[GestureConfigDrag.DragShape](xref="SiliconStudio.Xenko.Input.GestureConfigDrag.DragShape").
In that case, the gesture is triggered only if it is close enough to the indicated direction.

###Flick Gesture 

![Flick Gesture](media/gestures_flick_gesture.png) 

**Type** : Discrete

**Configuration class**: [GestureConfigFlick](xref="SiliconStudio.Xenko.Input.GestureConfigFlick")

**Event class**: [GestureEventFlick](xref="SiliconStudio.Xenko.Input.GestureEventFlick")

**Action description**: A user touches the screen, performs a quick straight translation and withdraws his/her finger(s).

**Comments**: The number of fingers on the screen cannot vary during the gesture.
You can modify [GestureConfigFlick.MinimumFlickLength](xref="SiliconStudio.Xenko.Input.GestureConfigFlick.MinimumFlickLength") 
field to constrain a flick to have a **minimum length**. 

You can restrict direction of the flick to **vertical** or **horizontal** by using 
[GestureConfigFlick.FlickShape](xref="SiliconStudio.Xenko.Input.GestureConfigFlick.FlickShape").
In that case, the gesture is triggered only if the gesture is close enough to the indicated direction.

###Long Press Gesture 

![longPress Gesture](media/gestures_long_press_gesture.png) 

**Type** : Discrete

**Configuration class**: [GestureConfigLongPress](xref="SiliconStudio.Xenko.Input.GestureConfigLongPress")

**Event class**: [GestureEventLongPress](xref="SiliconStudio.Xenko.Input.GestureEventLongPress")

**Action description**: A user touches the screen and maintains the pressure without moving his fingers for a certain period of time (default time is 1 second).

**Comments**: The numbers of fingers on the screen cannot vary during the gesture.
You can modify [GestureConfigLongPress.RequiredPressTime](xref="SiliconStudio.Xenko.Input.GestureConfigLongPress.RequiredPressTime") field to change the required press time. 

###Composite Gesture 

![Translation Gesture](media/gestures_translation_gesture.png) ![media/scale.png](media/gestures_scale_gesture.png) ![media/rotation.png](media/gestures_rotation_gesture.png) 

**Type** : Continuous

**Configuration class**: [GestureConfigComposite](xref="SiliconStudio.Xenko.Input.GestureConfigComposite")

**Event class**: [GestureEventComposite](xref="SiliconStudio.Xenko.Input.GestureEventComposite")

**Action description**: A user touches the screen with two fingers, and moves them independently.

**Comments**: This gesture requires exactly two fingers on the screen.
**Composite Gesture** is triggered when the system detects one of the three basic actions:
* _Translation_: user translates two fingers together in the same direction.
* _Scale_: user moves two fingers closer or further from each other.
* _Rotation_: user rotates two fingers around the middle point.

###Tap Gesture 

![Tap Gesture](media/gestures_tap_gesture.png) 

 **Type** : Discrete

**Configuration class**: [GestureConfigTap](xref="SiliconStudio.Xenko.Input.GestureConfigTap")

**Event class**: [GestureEventTap](xref="SiliconStudio.Xenko.Input.GestureEventTap")

**Action description**: A user touches the screen and removes his/her fingers quickly without moving.

**Comments**: The number of fingers on the screen cannot vary during the gesture.
You can modify [GestureConfigTap.RequiredNumberOfTaps](xref="SiliconStudio.Xenko.Input.GestureConfigTap.RequiredNumberOfTaps") field to manage the required number of taps to detect.

> [!TIP] To distinguish single taps from multi-taps, the system uses latency in tap events.
> You can set [GestureConfigTap.MaximumTimeBetweenTaps](xref="SiliconStudio.Xenko.Input.GestureConfigTap.MaximumTimeBetweenTaps") field to **0** to avoid this latency.

##Code Samples

###Activate/Desactivate Gestures Recognitions

```cs
// Create the configuration of a gesture you want to recognize.
var singleTapConfig = new GestureConfigTap();

// Start tap gesture recognition.
Input.ActivatedGestures.Add(singleTapConfig);
 
// Create the configuration of the gesture you want to recognize.
var doubleTapConfig = new GestureConfigTap(2, 1);

// Start double tap gesture recognition.
Input.ActivatedGestures.Add(doubleTapConfig );
 
// Stop tap gesture recognition.
Input.ActivatedGestures.Remove(singleTapConfig);
 
// Stop all gesture recognitions.
Input.ActivatedGestures.Clear(); 
```

###Set Gesture Configuration
Each configuration class has a parameterless constructor that corresponds to the default gesture configuration.
Special constructors have also been implemented for parameters that you may modify frequently.

Other parameters correspond to the fields that we don't recommend to modify to keep a good coherency of the system. 
Yet, those fields can, too, be modified by accessing the corresponding properties.

```cs
// Default gesture config.
var singleTapConfig = new GestureConfigTap();

// Personalize gesture config by using the dedicated constructor.
var doubleTapConfig = new GestureConfigTap(2, 2);

// Personalize gesture config by directly accessing the desired property.
// Be sure you know, what you are doing, as in some cases this action may break the input system coherency.
var noLatencyTap = new GestureConfigTap() { MaximumTimeBetweenTaps= TimeSpan.Zero };
```

### Access Gesture Events
You can access the list of events triggered by recognized gestures using the 
[Input.GestureEvents](xref="SiliconStudio.Xenko.Input.GestureEvents") collection.
The collection is automatically cleared every update.

**Code:** Access Gesture events triggered since last update:

```cs
var currentFrameGestureEvents = Input.GestureEvents;
```

### Identify Gesture Type
Use the [GestureEvent.Type](xref="SiliconStudio.Xenko.Input.GestureEvent.Type") field to identity the gesture type and then cast it to the appropriate event type to have extra info about the event. 

**Code:** Identify the gesture type

```cs
foreach( var gestureEvent in Input.GestureEvents)
{
   	// Determine if the event is from a tap gesture
	if (gestureEvent.Type != GestureType.Tap)
		continue;
   
	// Cast a specific tap event class.
	GestureEventTap  tapEvent = (GestureEventTap) gestureEvent;
	
    // Access tap-event-specific field.
    log.Info("Tap position: {0}.", tapEvent.TapPosition);
}
``` 

### Identify Gesture State
Use [GestureEvent.State](xref="SiliconStudio.Xenko.Input.GestureEvent.State") field to get gesture event state.

**Code:** Identify the state of the gesture

```cs
switch(compositeGestureEvent.State)
{
case GestureState.Began:
	image.ComputePreview();
	break;
case GestureState.Changed:
	image.TransformPreview(compositeGestureEvent.TotalScale, compositionGestureEvent.TotalRotation);
	break;
case GestureState.Ended:
	image.TransformRealImage(compositeGestureEvent.TotalScale, compositionGestureEvent.TotalRotation);
	break;
default:
	break;
}
```

<div class="doc-relatedtopics">
* [Pointers](pointers.md)
* [Virtual Buttons](virtual-buttons.md)
</div>
