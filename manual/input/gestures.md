# Gestures

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>

Gestures are special patterns of [Pointers](pointers.md). The system is able to recognize these patterns and trigger certain events that correspond to these patterns.
For instance, in a strategy game you can drag and drop a unit to the battlefield with a **Drag** gesture.

> [!Note] **Input System** uses normalized values.
> All lengths, speeds and error margins of configuration files must use normalized values.

##Learn Gestures

Gestures can be single- or multi-finger. Access gestures via the [GestureConfig](xref="SiliconStudio.Xenko.Input.GestureConfig") classes. Each gesture has its own associated config class.

Currently, Xenko supports the following gesture types:

* Discrete gestures (_Flick_, _LongPress_, _Tap_) trigger a single event.

* Continuous gestures (_Drag_, _Composite_) trigger a series of events every time an end-user changes the direction of the gesture.
This way, a gesture can trigger certain complex actions in mobile games.

You can get the current state of gesture (_Began_, _Changed_, _Ended_, _Occurred_) by in the [Input.GestureEvent.State](xref="SiliconStudio.Xenko.Input.GestureEvent.State") field of the gesture event.

> [!Note] _Discrete_ gesture always has a state **Occurred**.

> [!Note] _Continuous_ gesture always starts with **Began** action, then followed by 0 or more **Changed** actions
> and ends with **Ended** action.

You can restrict *Drag* and *Flick* gestures to *vertical* and *horizontal* shapes.
In that case, the gesture event is triggered only if the gesture is close enough to the indicated shape.

For more information on gesture shapes see [API reference](xref="SiliconStudio.Xenko.Input.GestureShape").

##Recognize Gestures

By default, the **Input System** does not recognize **Gestures**. Manage gesture recognition as follows:

1. To activate a particular gesture recognition, add its configuration to [Input.ActivatedGestures](xref="SiliconStudio.Xenko.Input.InputManager.ActivatedGestures") collection.
2. Set gesture parameters, like the length of the **Tap** or the required distance of a **Drag**.
3. To stop all gesture recognition, simply clear [Input.ActivatedGestures](xref="SiliconStudio.Xenko.Input.InputManager.ActivatedGestures") collection.

> [!Note] Once you activate a gesture for recognition and set its parameters, you can no longer modify these parameters.
To change gesture parameters, you have to delete the previous entry from the [Input.ActivatedGestures](xref="SiliconStudio.Xenko.Input.InputManager.ActivatedGestures") collection and create a new entry with new parameters.

When the system detects a gesture, it adds [Input.GestureEvent](xref="SiliconStudio.Xenko.Input.GestureEvent") to the list of gesture events.
Each gesture has its own associated gesture event class.

[Input.GestureEvent.Type](xref="SiliconStudio.Xenko.Input.GestureEvent.Type") field indicates which gesture has been recognized.
You can then cast the base gesture event into the gesture-specific event type to have gesture-type-specific information about the event.

The system can detect several gestures simultaneously, so the event list can contain more than one item in a given update.
The list is cleared every update, so you don't need to clear it manually. All **Gesture Events** not analyzed during a frame turn are lost.

##Use Gestures

###Drag Gesture

![media/dragGesture.png](media/gestures_drag_gesture.png) 

**Type** : Continuous

**Configuration class**: [Input.GestureConfigDrag](xref="SiliconStudio.Xenko.Input.GestureConfigDrag")

**Event class**: [Input.GestureEventDrag](xref="SiliconStudio.Xenko.Input.GestureEventDrag")

**Action description**: A user touched the screen, performed a translation and withdraw his/her finger(s).

**Comments**: The number of fingers on the screen cannot vary during the gesture.
You can modify [Input.GestureConfigDrag.MinimumDragDistance](xref="SiliconStudio.Xenko.Input.GestureConfigDrag.MinimumDragDistance") field if the gesture must be triggered for smaller drags. 

###Flick Gesture 

![media/flick.png](media/gestures_flick_gesture.png) 

**Type** : Discrete

**Configuration class**: [Input.GestureConfigFlick](xref="SiliconStudio.Xenko.Input.GestureConfigFlick")

**Event class**: [Input.GestureEventFlick](xref="SiliconStudio.Xenko.Input.GestureEventFlick")

**Action description**: A user touched the screen, performed a quick straight translation and withdraw his/her finger(s).

**Comments**: The number of fingers on the screen cannot vary during the gesture.
You can modify [Input.GestureConfigFlick.MinimumFlickLength](xref="SiliconStudio.Xenko.Input.GestureConfigFlick.MinimumFlickLength") field to constrain a flick to have a minimum length. 

###Long Press Gesture 

![media/longPress.png](media/gestures_long_press_gesture.png) 

**Type** : Discrete

**Configuration class**: [Input.GestureConfigLongPress](xref="SiliconStudio.Xenko.Input.GestureConfigLongPress")

**Event class**: [Input.GestureEventLongPress](xref="SiliconStudio.Xenko.Input.GestureEventLongPress")

**Action description**: A user touched the screen and maintained the pressure without moving his fingers for a certain period of time (default time is 1 second).

**Comments**: The numbers of fingers on the screen cannot vary during the gesture.
You can modify [Input.GestureConfigLongPress.RequiredPressTime](xref="SiliconStudio.Xenko.Input.GestureConfigLongPress.RequiredPressTime") field to change the required press time. 

###Composite Gesture 

![media/translation.png](media/gestures_translation_gesture.png) ![media/scale.png](media/gestures_scale_gesture.png) ![media/rotation.png](media/gestures_rotation_gesture.png) 

**Type** : Continuous

**Configuration class**: [Input.GestureConfigComposite](xref="SiliconStudio.Xenko.Input.GestureConfigComposite")

**Event class**: [Input.GestureEventComposite](xref="SiliconStudio.Xenko.Input.GestureEventComposite")

**Action description**: A user touched the screen with two fingers, and moved them independently.

**Comments**: This gesture requires exactly two fingers on the screen.
**Composite Gesture** is triggered when the system detects one of the three basic actions:
* _Translation_: user translates two fingers together in the same direction.
* _Scale_: user moves two fingers closer or further from each other.
* _Rotation_: user turns two fingers around the middle point.

###Tap Gesture 

![media/tap.png](media/gestures_tap_gesture.png) 

 **Type** : Discrete

**Configuration class**: [Input.GestureConfigTap](xref="SiliconStudio.Xenko.Input.GestureConfigTap")

**Event class**: [Input.GestureEventTap](xref="SiliconStudio.Xenko.Input.GestureEventTap")

**Action description**:The user touched the screen, and removed his/her fingers quickly without moving.

**Comments**: The number of fingers on the screen cannot vary during the gesture.
You can modify [Input.GestureConfigTap.RequiredNumberOfTaps](xref="SiliconStudio.Xenko.Input.GestureConfigTap.RequiredNumberOfTaps") field to manage the required number of taps to detect.

> [Note!] To distinguish single taps from multi-taps, the system uses latency in tap events.
> You can set [Input.GestureConfigTap.MaximumTimeBetweenTaps](xref="SiliconStudio.Xenko.Input.GestureConfigTap.MaximumTimeBetweenTaps") field to **0** to avoid this latency.

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

You can access the recognized gestures via the [Input.GestureEvents](xref="SiliconStudio.Xenko.Input.GestureEvents") collection.
The collection is automatically cleared every update.

**Code:** Access Gesture events

```cs
var currentFrameGestureEvents = Input.GestureEvents;
```


Use the [Input.GestureEvent.Type](xref="SiliconStudio.Xenko.Input.GestureEvent.Type") field to identity the gesture type and then cast it to the appropriate event type to have extra info about the event. 

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

Use [Input.GestureEvent.State](xref="SiliconStudio.Xenko.Input.GestureEvent.State") field to learn gesture event state.

**Code:** Identify the event state

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
